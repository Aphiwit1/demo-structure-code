import { createContext, useContext, useState } from 'react'
import { Modal } from '@components/Modal'

type PromiseType = <T>(
  Component: JSX.Element,
  option: { isHideCloseButton: boolean }
) => Promise<T>

export const ModalContext = createContext<{
  handleOpenModal: null | PromiseType
  handleToggleModal: (v?: any) => void
}>({
  handleOpenModal: null,
  handleToggleModal: () => {
    //
  },
})
const initialValue = { body: <div />, isOpen: false, isHideCloseButton: false }

export const ModalContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [modal, setModal] = useState(initialValue)
  const [resolve, setResolve] = useState<(value?: unknown) => void>()
  const handleToggleModal = (v?: any) => {
    setModal({ ...initialValue })
    if (v && resolve) {
      resolve!(v)
    } else if (resolve) {
      resolve!()
    }
    setResolve(() => () => {
      //
    })
  }

  const handleOpenModal: PromiseType = async (
    Component: JSX.Element,
    { isHideCloseButton }
  ) =>
    new Promise(res => {
      setResolve(() => res)
      setModal({ body: Component, isOpen: true, isHideCloseButton })
    })

  const handleOnClose = () => {
    setModal({ ...initialValue })
    resolve!()
    setResolve(() => () => {
      //
    })
  }

  const BodyRenderer = modal.body

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ModalContext.Provider value={{ handleOpenModal, handleToggleModal }}>
      {children}
      <Modal
        isOpen={modal.isOpen}
        onClose={handleOnClose}
        disabeldClose={modal.isHideCloseButton}
      >
        {BodyRenderer}
      </Modal>
    </ModalContext.Provider>
  )
}

export interface ModalHookProps<T> {
  component: (props?: any) => JSX.Element
  onSuccess?: (v: T) => void
  onClose?: () => void
  isHideCloseButton?: boolean
}

export function useModal<T>({
  component,
  onSuccess,
  onClose,
  isHideCloseButton = false,
}: ModalHookProps<T>) {
  const { handleToggleModal, handleOpenModal } = useContext(ModalContext)

  return {
    async openModal(params?: any): Promise<T | undefined> {
      const res = await handleOpenModal!<T | undefined>(component(params), {
        isHideCloseButton,
      })
      if (res !== undefined) {
        if (onSuccess) {
          onSuccess(res)
        }
        return res
      }
      if (onClose) {
        onClose()
      }
      return undefined
    },
    handleToggleModal,
  }
}
