import { GQL_API_URL, REST_API_URL } from '@config/environment.ts'
import { Client } from '@client/client.ts'
import axios from 'axios'
import { GraphQLClient } from 'graphql-request'

const graphqlInstance = new GraphQLClient('https://swapi-graphql.netlify.app/.netlify/functions/index', {})
const axiosInstance = axios.create({
  baseURL: REST_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': true,
  },
})

console.log('GQL_API_URL>>', GQL_API_URL)

export const client = new Client(graphqlInstance, axiosInstance)
