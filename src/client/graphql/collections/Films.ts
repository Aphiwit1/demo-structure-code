
import { graphql } from '@client/graphql/gql-gen'

export const FilmFragment = graphql(/* GraphQL */ `
  fragment FilmItem on Film {
    id
    title
    releaseDate
    producers
  }
`)