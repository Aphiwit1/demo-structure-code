import { StateCreator } from 'zustand'

export interface AuthenticationSlice {
  accessToken?: string
  refreshToken?: string
  isAuth: boolean
  isSelectedFactory: boolean
  logout: () => void
  selectFactory: () => void
  login: (accessToken?: string, refreshToken?: string) => void
  refresh: (accessToken?: string, refreshToken?: string) => void
}

const initialAuthState = {
  accessToken: undefined,
  refreshToken: undefined,
  isAuth: false,
  isSelectedFactory: false,
}

export const createAuthenticationSlice: StateCreator<
  AuthenticationSlice
> = set => ({
  accessToken: undefined,
  refreshToken: undefined,
  isAuth: false,
  isSelectedFactory: false,
  logout: () => {
    set({ ...initialAuthState })
  },
  login: (accessToken, refreshToken) => {
    set({
      ...initialAuthState,
      accessToken,
      refreshToken,
      isAuth: true,
      isSelectedFactory: false,
    })
  },
  selectFactory: () => {
    set({
      ...initialAuthState,
      isAuth: true,
      isSelectedFactory: true,
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
