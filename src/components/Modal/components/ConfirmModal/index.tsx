import OutlinedButton from '@components/buttons/OutlinedButton'
import PrimaryButton from '@components/buttons/PrimaryButton'

import { ModalContext } from '@components/Modal/context/ModalContext'
import { useContext, useState } from 'react'
// import { CheckCircleIcon } from '@components/Icons/Icons.tsx'
import { ConfirmModalProps } from './interface'

const ConfirmModal = ({
  onConfirm,
  onCancel,
  textCancelButton,
  textConfirmButton,
  actionButtonRTL = false,
  message,
  disabledConfirmButton,
  showIcon = true,
  classNameCancelButton = 'px-[15px] py-[6px] text-gray-secondary border-[#DCDFE6] font-normal',
  classNameConfirmButton = 'py-[7px] px-[15px] rounded-[4px]',
}: ConfirmModalProps) => {
  const { handleToggleModal } = useContext(ModalContext)
  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <div className='w-[304px] relative'>
      <div className='flex flex-col items-center'>
        {/* {showIcon && (
          <CheckCircleIcon width='24' height='24' className='text-primary' />
        )} */}
        {showIcon}
        <div className='mt-[9px] px-[40px] text-center text-gray-secondary'>
          {message}
        </div>
      </div>
      <div
        className={`mt-[20px] flex items-center justify-center gap-x-[10px] ${
          actionButtonRTL && 'flex-row-reverse'
        }`}
      >
        <OutlinedButton
          type='button'
          className={classNameCancelButton}
          onClick={onCancel || handleToggleModal}
        >
          <span className='text-sm'>{textCancelButton || 'Cancel'}</span>
        </OutlinedButton>
        <PrimaryButton
          type='button'
          className={classNameConfirmButton}
          onClick={() => {
            setIsSubmitting(true)
            try {
              onConfirm()
            } catch (error) {
              //
            } finally {
              setIsSubmitting(false)
              handleToggleModal()
            }
          }}
          disabled={disabledConfirmButton || isSubmitting}
        >
          <span className='text-sm font-medium'>
            {textConfirmButton || 'Confirm'}
          </span>
        </PrimaryButton>
      </div>
    </div>
  )
}

export default ConfirmModal
