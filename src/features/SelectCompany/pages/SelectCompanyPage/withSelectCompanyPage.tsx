import { SelectUnitRoutesPath } from '@config/Router'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppStore } from 'src/store/store'

const withSelectCompanyPage = (Component: React.FC) => {
  const Hoc = () => {
    const navigate = useNavigate()
    const selectFactory = useAppStore(state => state.selectFactory)

    const onHandleSelectedCompany = () => {
      selectFactory()
      navigate(SelectUnitRoutesPath.selectUnit.absolutePath)
    }
    const newProps: any = { onHandleSelectedCompany }
    return <Component {...newProps} />
  }

  return Hoc
}
export default withSelectCompanyPage
