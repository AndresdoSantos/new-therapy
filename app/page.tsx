/* eslint-disable @typescript-eslint/no-explicit-any */
async function getContent() {
  const endpoint =
    'https://api-sa-east-1.hygraph.com/v2/cloajnni2g3ho01ukd13k315d/master'

  const query = `{
    therapies() {
      id
      slug
      createdAt
      story { html }
      publishedAt
      updatedAt
    }
  }`

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
    next: { revalidate: 10 },
  }

  const response = await fetch(endpoint, options)

  const { data } = await response.json()

  return data
}

export default async function Home() {
  const data = await getContent()

  return (
    <main className="mx-auto p-10 sm:max-w-[800px] text-zinc-800 text-xs sm:text-sm prose tracking-wide prose-strong:font-medium prose-strong:leading-10">
      {data.therapies.map((item: { id: string; story: { html: any } }) => (
        <div
          key={item.id}
          dangerouslySetInnerHTML={{ __html: item.story.html }}
        ></div>
      ))}
    </main>
  )
}
