import { DashboardRoutesPath } from '@config/Router'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const withSelectFactoryPage = (Component: React.FC) => {
  const Hoc = () => {
    const navigate = useNavigate()

    const onHandleSelectedFactory = () => {
      alert('onHandleSelectedFactory')
      navigate(DashboardRoutesPath.dashboard.absolutePath)
    }
    const newProps: any = { onHandleSelectedFactory }
    return <Component {...newProps} />
  }

  return Hoc
}
export default withSelectFactoryPage
