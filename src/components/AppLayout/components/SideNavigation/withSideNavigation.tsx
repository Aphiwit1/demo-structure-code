import ConfirmModal from '@components/Modal/components/ConfirmModal'
import { useModal } from '@components/Modal/context/ModalContext'
import React from 'react'
import { useAppStore } from 'src/store/store'

const withSideNavigation = (Component: React.FC) => {
  const Hoc = () => {
    const logout = useAppStore(state => state.logout)
    const onHandleLogout = () => {
      if (true) {
        openDeleteModal({
          onConfirm: () => logout(),
          message: 'Are you sure to Logout?',
        })
      }
    }

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

    const newProps: any = {
      onHandleLogout,
    }
    return <Component {...newProps} />
  }

  return Hoc
}
export default withSideNavigation
