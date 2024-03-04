// import { HomeIcon } from '@components/Icons/Icons'
import { HomeIcon } from '@components/Icons/Icons'
import withSelectUnitPage from './withSelectUnitPage'
import Tag from '@components/Tag/Tag'
import { StatusEnum } from '@enums/StatusEnum'

const SelectUnitPage = ({ onHandleSelectedUnit }: any) => {
  return (
    <>
      <section className='flex justify-center gap-5 items-center '>
        <div className='w-[300px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <a href='#'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-700'>
              Unit A
            </h5>
          </a>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            Minimum Remaining Life: 87 Days{' '}
            <Tag tagStyle={StatusEnum.NORMAL} isShowPrefixDot={true}>
              NORMAL
            </Tag>
          </p>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            PredictedDate of Tube Leakage: 27 May 2024
          </p>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            Main component to Failure: Waterfal - front
          </p>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            Data Connection Status:
            <Tag tagStyle={StatusEnum.NORMAL} isShowPrefixDot={true}>
              NORMAL
            </Tag>
          </p>
          <button
            onClick={onHandleSelectedUnit}
            className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            <HomeIcon className='w-[20px] h-[20px] text-black' />
            Manage
          </button>
        </div>
      </section>
    </>
  )
}

const WrappedComponent = withSelectUnitPage(SelectUnitPage)
export default WrappedComponent
