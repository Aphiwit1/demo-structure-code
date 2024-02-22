import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { CredentialType } from './interface'

import { useAppStore } from 'src/store/store'
import { toast } from 'react-toastify'

const withLoginPage = (Component: React.FC) => {
  const Hoc = () => {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<CredentialType>({ mode: 'all' })
    const loginAuth = useAppStore(state => state.login)

    const handleLogin: SubmitHandler<CredentialType> = ({
      email,
      password,
    }: any) => {
      console.log(email, password)

      loginAuth('sfwef4')
      toast.success('Login successfully')
    }

    const newProps: any = {
      control,
      handleLogin: handleSubmit(handleLogin),
    }

    return <Component {...newProps} />
  }

  return Hoc
}
export default withLoginPage
