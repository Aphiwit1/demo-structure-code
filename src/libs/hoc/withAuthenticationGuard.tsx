import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import {
  AuthenticationRoutesPath,
  DashboardRoutesPath,
  SelectFactoryRoutesPath,
} from '@config/Router.ts'
import { FunctionComponentType } from '@interfaces/FunctionComponentType.ts'
import { useAppStore } from '../../store/store.ts'

const withAuthenticationGuard = (
  Component: React.FC<FunctionComponentType>
) => {
  const Hoc = (props: FunctionComponentType) => {
    const navigate = useNavigate()
    const isAuth = useAppStore(state => state.isAuth)
    const isSelectedFactory = useAppStore(state => state.isSelectedFactory)
    useEffect(() => {
      if (isAuth && !isSelectedFactory) {
        navigate(SelectFactoryRoutesPath.selectFactory.absolutePath)
      }
      // if (isAuth && isSelectedFactory) {
      //   navigate(DashboardRoutesPath.dashboard.absolutePath)
      // }
      if (!isAuth) {
        navigate(AuthenticationRoutesPath.login.absolutePath)
      }
    }, [isAuth, navigate])

    return <Component {...props} />
  }
  return Hoc
}
export default withAuthenticationGuard
