import withSideNavigation from './withSideNavigation'

const SideNavigation = ({ onHandleLogout }: any) => {
  return (
    <>
      <aside
        className={`fixed h-full bg-white transition-all duration-300 w-[240px]`}
      >
        <nav className='h-full flex flex-col bg-white border-r shadow-sm'>
          <div className='p-4 pb-2 flex justify-between items-center'>
            Code Structure Demo
          </div>

          <ul className='flex-1 px-3'>
            <li
              className={`
          relative flex items-center py-2 px-3 my-1
          font-medium rounded-md cursor-pointer
          transition-colors group bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800” `}
            >
              <span className={`overflow-hidden transition-all  w-52 ml-3`}>
                Dashboard
              </span>
            </li>
          </ul>

          <div className='border-t flex p-3'>
            <div
              className={`
                flex justify-between items-center
                overflow-hidden transition-all  w-52 ml-3`}
            >
              <div className='leading-4'>
                <h4 className='font-semibold'>Nueng Aphiwit</h4>
                <span className='text-xs text-gray-600'>nuengza@gmail.com</span>
              </div>
              <div className='cursor-pointer' onClick={onHandleLogout}>
                Logout
              </div>
            </div>
          </div>
        </nav>
      </aside>
      ;
    </>
  )
}

const WrappedComponent = withSideNavigation(SideNavigation)
export default WrappedComponent
