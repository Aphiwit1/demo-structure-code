import { StateCreator } from 'zustand'

export interface SideNavigationSlice {
  isCollapse: boolean
  toggleCollapse: () => void
}

export const createSideNavigationSlice: StateCreator<
  SideNavigationSlice
> = set => ({
  isCollapse: false,
  toggleCollapse: () => {
    set(state => ({
      ...state,
      isCollapse: !state.isCollapse,
    }))
  },
})
