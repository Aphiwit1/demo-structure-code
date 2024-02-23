// import { CancelIcon } from '@components/Icons/Icons'
import { ModalProps } from './Modalinterface'
import { withModal } from './withModal'

const Modal = ({
  children,
  handleToggleModal,
  disabeldClose,
  onClose,
}: ModalProps & { handleToggleModal: () => void }) => (
  <div className='fixed right-0 left-0 top-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-10 '>
    <div className='p-[12px] border-2 bg-white rounded-[4px] flex flex-col w-fit max-h-95vh max-w-[80vw] relative overflow-y-auto'>
      {!disabeldClose && (
        <div
          className='relative text-neutral-body text-right'
          onClick={onClose ?? handleToggleModal}
        >
          {/* <CancelIcon
            width='24'
            height='24'
            className='absolute right-0 top-0 cursor-pointer z-1  text-black'
            onClick={onClose ?? handleToggleModal}
          /> */}
          X
        </div>
      )}
      {children}
    </div>
  </div>
)
const WrappedComponent = withModal(Modal)
export default WrappedComponent
