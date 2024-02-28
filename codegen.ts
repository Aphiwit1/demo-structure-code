import { CodegenConfig } from '@graphql-codegen/cli'

require('dotenv').config()

const config: CodegenConfig = {
  schema: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  documents: ['src/client/graphql/**/*.tsx', 'src/client/graphql/**/*.ts'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/client/graphql/gql-gen/types-and-hooks.ts': {
      config: {
        fetcher: 'graphql-request',
      },
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-query',
        // Ignore RequestInit TS-error
        { add: { content: '// @ts-nocheck' } },
      ],
    },
    './src/client/graphql/gql-gen/': {
      config: {
        declarationKind: 'class',
      },
      preset: 'client',
    },
  },
  config: {
    namingConvention: {
      enumValues: 'change-case-all#constantCase',
    },
    exposeFetcher: true,
    exposeQueryKeys: true,
  },
}

export default config
