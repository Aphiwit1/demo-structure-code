
import './App.css'


import { useNuengQueryQuery } from '@client/graphql/gql-gen/types-and-hooks'
import { useGraphQLClient } from '@client/clientContext'




function App() {
  // `data` is typed!
  const graphQLClient = useGraphQLClient()
  const {data, isLoading }= useNuengQueryQuery(graphQLClient, {})
  console.log('data : ', data)
  return (
    <div className='App'>
       xx
    </div>
  )
}

export default App
