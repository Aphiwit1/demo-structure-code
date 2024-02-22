import React from 'react'
import { useAppStore } from 'src/store/store'

const withSideNavigation = (Component: React.FC) => {
  const Hoc = () => {
    const logout = useAppStore(state => state.logout)
    const onHandleLogout = () => {
      logout()
    }

    const newProps: any = {
      onHandleLogout,
    }
    return <Component {...newProps} />
  }

  return Hoc
}
export default withSideNavigation
