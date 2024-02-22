import React, { useState } from 'react'

import {
  InputFieldAcceptProps,
  InputFieldProps,
} from '@components/form/InputField/interface'

const withInputField = (Component: React.FC<InputFieldProps>) => {
  const Hoc = ({ type, ...props }: InputFieldAcceptProps) => {
    const isPasswordType = type === 'password'

    const [isShowPassword, setIsShowPassword] = useState(false)
    const handleTogglePassword = () => setIsShowPassword(prev => !prev)

    const newProps = {
      type: isPasswordType ? (isShowPassword ? 'text' : 'password') : type,
      isPasswordType,
      handleTogglePassword,
      ...props,
    }

    return <Component {...newProps} />
  }

  return Hoc
}

export { withInputField }
