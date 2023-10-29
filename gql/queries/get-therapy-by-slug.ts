/* eslint-disable camelcase */
import { gql } from '@apollo/client'

export const get_therapy_by_slug_query = gql`
  query GetTherapyBySlug($slug: String!) {
    therapies(where: { slug: $slug }) {
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
