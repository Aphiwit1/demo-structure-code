import { DashboardRoutesPath } from '@config/Router'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const withSelectUnitPage = (Component: React.FC) => {
  const Hoc = () => {
    const navigate = useNavigate()

    const onHandleSelectedUnit = () => {
      navigate(DashboardRoutesPath.dashboard.absolutePath)
    }
    const newProps: any = { onHandleSelectedUnit }
    return <Component {...newProps} />
  }

  return Hoc
}
export default withSelectUnitPage
