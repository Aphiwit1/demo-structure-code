import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const withRemainingLifeSetting = (Component: React.FC) => {
  const Hoc = () => {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<any>()

    const onHandleRemainingLifeSetting: SubmitHandler<any> = (data: any) => {
      alert(data)
    }

    const newProps: any = {
      control,
      handleSetting: handleSubmit(onHandleRemainingLifeSetting),
    }

    return <Component {...newProps} />
  }

  return Hoc
}
export default withRemainingLifeSetting
