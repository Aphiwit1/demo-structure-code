import PrimaryButton from '@components/buttons/PrimaryButton'
import InputField from '@components/form/InputField/InputField'
import { emailRule, requiredRule } from '@constant/formRules'
import withLoginPage from './withLoginPage'

const LoginPage = ({ control, handleLogin }: any) => {
  return (
    <div className='p-5 bg-slate-100'>
      <form onSubmit={handleLogin}>
        <InputField
          name='email'
          control={control}
          rules={{
            ...requiredRule,
            ...emailRule,
          }}
          placeholder='Enter your email'
          type='email'
          label='Email'
          className='mb-[23px]'
        />
        <InputField
          name='password'
          control={control}
          rules={requiredRule}
          placeholder='Enter your password'
          type='password'
          label='Password'
          className='mb-[24px]'
        />
        <div className='flex justify-end items-center'>
          <PrimaryButton className='w-full bg-blue-600' type='submit'>
            Login
          </PrimaryButton>
        </div>
      </form>
    </div>
  )
}

const WrappedComponent = withLoginPage(LoginPage)
export default WrappedComponent
