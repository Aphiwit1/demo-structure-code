import { DashboardRoutesPath, SelectUnitRoutesPath } from '@config/Router'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppStore } from 'src/store/store'

const withSelectFactoryPage = (Component: React.FC) => {
  const Hoc = () => {
    const navigate = useNavigate()
    const selectFactory = useAppStore(state => state.selectFactory)

    const onHandleSelectedFactory = () => {
      selectFactory()
      navigate(SelectUnitRoutesPath.selectUnit.absolutePath)
    }
    const newProps: any = { onHandleSelectedFactory }
    return <Component {...newProps} />
  }

  return Hoc
}
export default withSelectFactoryPage
