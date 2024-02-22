// import { SearchIcon, XCircleIcon } from '@components/Icons/Icons'

const NoData = ({
  isSearch,
  message,
  isShowIcon = true,
}: {
  isSearch?: boolean
  message?: string
  isShowIcon?: boolean
}) => (
  <div className='flex flex-col items-center justify-center py-[47.5px] space-x-1'>
    <div className='text-xl font-bold'>
      {message || (isSearch ? 'No results found' : 'There are no data')}
    </div>
    {isSearch && (
      <div className='text-base text-center break-all'>
        We couldn’t find what you search for.
        <br />
        Please try searching again.
      </div>
    )}
  </div>
)

export default NoData
