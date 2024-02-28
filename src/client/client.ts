import { ClientError, GraphQLClient } from 'graphql-request'
import { Axios } from 'axios'
// import { DownloadClient } from '@client/rest/DownloadClient.ts'
import { useAppStore } from '../store/store.ts'

export class Client {
  // Axios client
  // public download: DownloadClient

  constructor(public graphQLClient: GraphQLClient, public axiosClient: Axios) {
    this.setupGraphqlMiddleware()
    this.setupAxiosInterceptor()
    // Set up axios client
    // this.download = new DownloadClient(axiosClient)
  }

  private getToken = () => {
    const session = localStorage.getItem('persist:authenticationByNueng')
    if (session) {
      const sessionObj = JSON.parse(session)
      // DESC: remove double quotes
      const token: string = sessionObj.state.accessToken?.replaceAll('"', '')
      return token
    }
    return undefined
  }

  private getRefreshToken = () => {
    const session = localStorage.getItem('persist:authenticationByNueng')
    if (session) {
      const sessionObj = JSON.parse(session)
      // DESC: remove double quotes
      const refreshToken: string = sessionObj.refreshToken?.replaceAll('"', '')
      return refreshToken
    }
    return undefined
  }

  private setupGraphqlMiddleware = () => {
    this.graphQLClient.requestConfig.requestMiddleware = request => {
      const token = this.getToken()
      // Inject token
      if (token) {
        return {
          ...request,
          headers: {
            ...request.headers,
            authorization: `Bearer ${token}`,
          },
        }
      }
      return request
    }
    this.graphQLClient.requestConfig.responseMiddleware = response => {
      if (response instanceof ClientError) {
        if (response.response.errors?.length) {
          const { extensions } = response.response.errors[0]
          if (
            extensions?.statusCode === 403 ||
            extensions?.statusCode === 401
          ) {
            useAppStore.getState().logout()
          }
        }
      }
    }
  }

  private setupAxiosInterceptor = () => {
    this.axiosClient.interceptors.request.use(async config => {
      const token = this.getToken()
      if (token) {
        config.headers.setAuthorization(`Bearer ${token}`)
      }
      return config
    })
  }
}
