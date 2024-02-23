import ConfirmModal from '@components/Modal/components/ConfirmModal'
import { useModal } from '@components/Modal/context/ModalContext'
import React from 'react'

const withDashboard = (Component: React.FC) => {
  const Hoc = () => {
    const { openModal: openDeleteModal } = useModal<any>({
      component: ({ onConfirm, message }: any) => (
        <ConfirmModal
          message={
            <div className='flex flex-col items-center'>
              <div className='text-lg font-medium'>Confirm</div>
              <p className='mt-[7px] text-sm'>{message}</p>
            </div>
          }
          onConfirm={onConfirm}
        />
      ),
    })

    const handleOnDeleteDocument = async () => {
      await openDeleteModal({
        message: 'Are you sure to delete this document',
      })
    }

    const newProps: any = {
      handleOnDeleteDocument,
    }
    return <Component {...newProps} />
  }

  return Hoc
}
export default withDashboard
