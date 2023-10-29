import { client } from '@/apollo-client'
import { get_therapy_by_slug_query } from '@/gql/queries/get-therapy-by-slug'

async function getContent(slug: string) {
  const data = client.query({
    query: get_therapy_by_slug_query,
    variables: { slug },
  })

  return data
}

export default async function Slug(props: any) {
  const { data } = await getContent(props.params.slug)

  const content = data.therapies[0]

  return (
    <main className="mx-auto p-10 sm:p-5 sm:pt-10 sm:max-w-[1120px]">
      <h1 className="font-extrabold text-zinc-300 text-4xl -tracking-wider">
        {content.title}
      </h1>

      <div className="mt-20 text-zinc-800 text-sm leading-[23px] tracking-wide prose prose-p:font-normal prose-strong:font-medium prose-strong:leading-10">
        <div dangerouslySetInnerHTML={{ __html: content.story.html }}></div>
      </div>
    </main>
  )
}
