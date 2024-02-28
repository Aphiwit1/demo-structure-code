import withSelectFactoryPage from './withSelectFactoryPage'

const SelectFactoryPage = () => {
  return (
    <>
      <section className='flex justify-center gap-5 items-center '>
        <div className='w-[300px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <a href='#'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-700'>
              Factory A
            </h5>
          </a>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            Chonburi
          </p>
          <a
            href='#'
            className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Manage
          </a>
        </div>

        <div className='w-[300px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <a href='#'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-700'>
              Factory B
            </h5>
          </a>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            Rayong
          </p>
          <a
            href='#'
            className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Manage
          </a>
        </div>

        <div className='w-[300px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <a href='#'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-700'>
              Factory C
            </h5>
          </a>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            Chantaburi
          </p>
          <a
            href='#'
            className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Manage
          </a>
        </div>
      </section>
    </>
  )
}

const WrappedComponent = withSelectFactoryPage(SelectFactoryPage)
export default WrappedComponent
