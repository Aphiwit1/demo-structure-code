import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import {
  AuthenticationRoutesPath,
  DashboardRoutesPath,
} from '@config/Router.ts'

import { useAppStore } from '../../store/store.ts'
import { FunctionComponentType } from '@interfaces/FunctionComponentType.ts'

const withAuthenticationGuard = (
  Component: React.FC<FunctionComponentType>
) => {
  const Hoc = (props: FunctionComponentType) => {
    const navigate = useNavigate()
    const isAuth = useAppStore(state => state.isAuth)
    useEffect(() => {
      if (isAuth) {
        navigate(DashboardRoutesPath.dashboard.absolutePath)
      }
      if (!isAuth) {
        navigate(AuthenticationRoutesPath.login.absolutePath)
      }
    }, [isAuth, navigate])

    return <Component {...props} />
  }
  return Hoc
}
export default withAuthenticationGuard
