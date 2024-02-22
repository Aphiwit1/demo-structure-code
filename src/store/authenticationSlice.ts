import { StateCreator } from 'zustand'

export interface AuthenticationSlice {
  accessToken?: string
  refreshToken?: string
  isAuth: boolean
  logout: () => void
  login: (accessToken?: string, refreshToken?: string) => void
  refresh: (accessToken?: string, refreshToken?: string) => void
}

const initialAuthState = {
  accessToken: undefined,
  refreshToken: undefined,
  isAuth: false,
}

export const createAuthenticationSlice: StateCreator<
  AuthenticationSlice
> = set => ({
  accessToken: undefined,
  refreshToken: undefined,
  isAuth: false,
  logout: () => {
    set({ ...initialAuthState })
  },
  login: (accessToken, refreshToken) => {
    set({
      ...initialAuthState,
      accessToken,
      refreshToken,
      isAuth: true,
    })
  },
  refresh: (accessToken, refreshToken) => {
    set(state => ({
      ...state,
      accessToken,
      refreshToken,
      isAuth: true,
    }))
  },
})
