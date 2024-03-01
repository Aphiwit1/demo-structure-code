// import { HomeIcon } from '@components/Icons/Icons'
import { HomeIcon } from '@components/Icons/Icons'
import withSelectCompanyPage from '@features/SelectCompany/pages/SelectCompanyPage/withSelectCompanyPage'

const SelectCompanyPage = ({ onHandleSelectedCompany }: any) => {
  return (
    <>
      <section className='flex justify-center gap-5 items-center '>
        <div className='w-[300px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <a href='#'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-700'>
              Company A
            </h5>
          </a>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            Chonburi
          </p>
          <button
            onClick={() => onHandleSelectedCompany()}
            className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            <HomeIcon className='w-[20px] h-[20px] text-black' />
            Manage
          </button>
        </div>

        <div className='w-[300px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <a href='#'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-700'>
              Company B
            </h5>
          </a>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            Rayong
          </p>
          <button
            onClick={onHandleSelectedCompany}
            className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Manage
          </button>
        </div>

        <div className='w-[300px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <a href='#'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-700'>
              Company C
            </h5>
          </a>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            Chantaburi
          </p>
          <button
            onClick={onHandleSelectedCompany}
            className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Manage
          </button>
        </div>
      </section>
    </>
  )
}

const WrappedComponent = withSelectCompanyPage(SelectCompanyPage)
export default WrappedComponent
