/* eslint-disable camelcase */
import Link from 'next/link'

import { client } from '@/apollo-client'
import { get_all_therapies_queries } from '@/gql/queries/get-all-therapies'

/* eslint-disable @typescript-eslint/no-explicit-any */
async function getContent() {
  const data = await client.query({ query: get_all_therapies_queries })

  return data
}

export default async function Home() {
  const { data } = await getContent()

  return (
    <main className="mx-auto sm:max-w-[800px] p-10 sm:p-5 sm:pt-10">
      <h1 className="font-extrabold text-zinc-300 text-4xl -tracking-wider">
        About me
      </h1>

      <ul className="mt-20">
        {data.therapies.map(
          (item: { id: string; title: string; slug: string }) => (
            <li className="mb-5" key={item.id}>
              <Link href={`/history/${item.slug}`}>
                <p className="text-sm text-zinc-700">{item.title}</p>
              </Link>
            </li>
          ),
        )}
      </ul>
    </main>
  )
}
