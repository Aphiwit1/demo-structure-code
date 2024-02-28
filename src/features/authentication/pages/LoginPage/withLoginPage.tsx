import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useAppStore } from 'src/store/store'
import { toast } from 'react-toastify'

import { CredentialType } from './interface'
import { graphql } from 'src/gql'
import { useQuery } from '@tanstack/react-query'
import request from 'graphql-request'

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
