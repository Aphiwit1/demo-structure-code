import { graphql } from "@client/graphql/gql-gen";

  export const allFilms = graphql(/* GraphQL */ `
  query nuengQuery {
    allFilms {
      films {
        title
        director
        releaseDate
        speciesConnection {
          species {
            name
            classification
            homeworld {
              name
            }
          }
        }
      }
    }
  }
  
`)