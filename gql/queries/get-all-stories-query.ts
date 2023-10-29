import { gql } from '@apollo/client'

export const GET_ALL_STORIES_QUERY = gql`
  query GetAllStoriesQuery {
    therapies {
      createdAt
      id
      publishedAt
      slug
      story {
        html
      }
      updatedAt
    }
  }
`

export interface IStory {
  createdAt: string
  id: string
  publishedAt: string
  slug: string
  updatedAt: string
  story: { html: any }
}

export interface IStories {
  stories: IStory[]
}
