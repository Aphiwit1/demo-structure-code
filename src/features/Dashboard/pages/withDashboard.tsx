import ConfirmModal from '@components/Modal/components/ConfirmModal'
import { useModal } from '@components/Modal/context/ModalContext'
import { DashboardRoutesPath } from '@config/Router'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import useBreadcrumbs from 'use-react-router-breadcrumbs'

const withDashboard = (Component: React.FC) => {
  const Hoc = () => {
    const navigate = useNavigate()
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

    const breadcrumbs = useBreadcrumbs()
    console.log('breadcrumbs>>>', breadcrumbs)

    const onHandleSetting = () => {
      navigate(DashboardRoutesPath.remainingLifeSetting.absolutePath)
    }

    const handleOnDeleteDocument = async () => {
      await openDeleteModal({
        message: 'Are you sure to delete this document',
      })
    }

    const newProps: any = {
      handleOnDeleteDocument,
      onHandleSetting,
      breadcrumbs,
    }
    return <Component {...newProps} />
  }

  return Hoc
}
export default withDashboard
