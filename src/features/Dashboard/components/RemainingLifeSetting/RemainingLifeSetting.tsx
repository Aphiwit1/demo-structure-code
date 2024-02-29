import PrimaryButton from '@components/buttons/PrimaryButton'
import withRemainingLifeSetting from './withRemainingLifeSetting'
import InputField from '@components/form/InputField/InputField'
import { requiredRule } from '@constant/formRules'

const RemainingLifeSetting = ({ handleSetting, control }: any) => {
  return (
    <div>
      <form onSubmit={handleSetting}>
        <InputField
          name='email'
          control={control}
          rules={{
            ...requiredRule,
          }}
          placeholder='Enter  Unit'
          type='unit'
          label='Unit'
          className='mb-[23px]'
        />

        <InputField
          name='email'
          control={control}
          rules={{
            ...requiredRule,
          }}
          placeholder='Enter  Unit'
          type='unit'
          label='Unit'
          className='mb-[23px]'
        />

        <div className=''>
          <PrimaryButton className='w-full bg-blue-600' type='submit'>
            Save
          </PrimaryButton>
        </div>
      </form>
    </div>
  )
}

const WrappedComponent = withRemainingLifeSetting(RemainingLifeSetting)
export default WrappedComponent
