import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import {
  AuthenticationRoutesPath,
  SelectFactoryRoutesPath,
} from '@config/Router.ts'
import { FunctionComponentType } from '@interfaces/FunctionComponentType.ts'
import { useAppStore } from '../../store/store.ts'
import { SelectionFactoryRoutes } from '@features/SelectionFactory/SelectionFactoryRoutes.tsx'

const withAuthenticationGuard = (
  Component: React.FC<FunctionComponentType>
) => {
  const Hoc = (props: FunctionComponentType) => {
    const navigate = useNavigate()
    const isAuth = useAppStore(state => state.isAuth)
    useEffect(() => {
      if (isAuth) {
        navigate(SelectFactoryRoutesPath.selectFactory.absolutePath)
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
