/* eslint-disable camelcase */
import { gql } from '@apollo/client'

export const get_all_therapies_queries = gql`
  query GetAllTherapies {
    therapies {
      id
      slug
      createdAt
      title
      story {
        html
      }
      publishedAt
      updatedAt
    }
  }
`
