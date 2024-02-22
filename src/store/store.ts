import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {
  AuthenticationSlice,
  createAuthenticationSlice,
} from './authenticationSlice.ts'
import {
  createSideNavigationSlice,
  SideNavigationSlice,
} from './sideNavigationSlice.ts'

export interface AppStore extends AuthenticationSlice, SideNavigationSlice {}
export const useAppStore = create<AppStore>()(
  persist(
    (set, get, api) => ({
      ...createAuthenticationSlice(set, get, api),
      ...createSideNavigationSlice(set, get, api),
    }),
    {
      name: 'persist:Mockuthentication',
      partialize: state => ({
        isAuth: state.isAuth,
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
      }),
    }
  )
)
