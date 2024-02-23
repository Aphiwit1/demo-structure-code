// import OutlinedButton from '@components/buttons/OutlinedButton'
// import PrimaryButton from '@components/buttons/PrimaryButton'

// import { ModalContext } from '@components/Modal/context/ModalContext'
// import { useContext } from 'react'
// import { LanguageType } from '@client/graphql/gql-gen/types-and-hooks.ts'
// import RadioInputField from '@components/form/RadioInputField/RadioInputField.tsx'
// import { useForm } from 'react-hook-form'
// import { requiredRule } from '@constant/formRules.ts'
// import { OptionType } from '@interfaces/OptionType.ts'
// import ENFlag from '@assets/images/enFlag.png'
// import THFlag from '@assets/images/thFlag.png'
// import { SelectLanguageModalProps } from './interface'

// const languageOptions: OptionType[] = [
//   {
//     label: 'EN',
//     value: LanguageType.EN,
//     icon: <img src={ENFlag} alt='EN' height={20} width={20} />,
//   },
//   {
//     label: 'TH',
//     value: LanguageType.TH,
//     icon: <img src={THFlag} alt='TH' height={20} width={20} />,
//   },
// ]

// type LanguageFormType = {
//   language: LanguageType
// }
// const SelectLanguageModal = ({
//   classNameCancelButton = 'px-[15px] py-[6px] text-gray-secondary border-[#DCDFE6] font-normal',
//   classNameConfirmButton = 'py-[7px] px-[15px] rounded-[4px]',
// }: SelectLanguageModalProps) => {
//   const { handleToggleModal } = useContext(ModalContext)
//   const {
//     control,
//     handleSubmit,
//     formState: { isValid },
//   } = useForm<LanguageFormType>({
//     mode: 'all',
//     defaultValues: {
//       language: LanguageType.EN,
//     },
//   })
//   const handleOnFormSubmit = (form: LanguageFormType) => {
//     handleToggleModal(form.language)
//   }

//   return (
//     <form onSubmit={handleSubmit(handleOnFormSubmit)}>
//       <div className='w-[304px] relative'>
//         <div className='flex flex-col items-center'>
//           <div className='mt-[9px] px-[40px] text-center text-gray-secondary text-base'>
//             Please select a language
//           </div>
//         </div>
//         <RadioInputField
//           className='flex justify-center items-center mt-[20px]'
//           control={control}
//           name='language'
//           options={languageOptions}
//           rules={requiredRule}
//           direction='vertical'
//         />
//         <div className='mt-[24px] flex items-center justify-center gap-x-[10px]'>
//           <OutlinedButton
//             type='button'
//             className={classNameCancelButton}
//             onClick={() => handleToggleModal()}
//           >
//             <span className='text-sm'>Cancel</span>
//           </OutlinedButton>
//           <PrimaryButton
//             type='submit'
//             className={classNameConfirmButton}
//             disabled={!isValid}
//           >
//             <span className='text-sm font-medium'>Confirm</span>
//           </PrimaryButton>
//         </div>
//       </div>
//     </form>
//   )
// }

// export default SelectLanguageModal
