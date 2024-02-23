// import { CaretLeftIcon, CaretRightIcon } from '@components/Icons/Icons'
import ReactPaginate from 'react-paginate'
import { PaginationPropsType } from './interface'
import withPagination from './withPagination'

const Pagination = ({
  pageState: { pageIndex },
  paginationProps: {
    totalCount,
    totalPage,
    count,
    gotoPage,
    handleOnPageChange,
  },
}: PaginationPropsType) => (
  <div className='flex flex-col items-end  text-xs font-medium mt-[14px] w-full'>
    {count && totalCount && (
      <div className='mx-1'>
        {count} from {totalCount}
      </div>
    )}
    <div className='flex justify-between items-center w-full'>
      <ReactPaginate
        previousLabel={
          <div className='mx-1 flex items-center text-black'>
            {/* <CaretLeftIcon width='15' height='15' /> */}
            prev
          </div>
        }
        nextLabel={
          <div className='mx-1 flex items-center text-black'>
            next
            {/* <CaretRightIcon width='15' height='15' /> */}
          </div>
        }
        disableInitialCallback
        pageCount={totalPage}
        forcePage={pageIndex}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={({ selected }) => {
          gotoPage && gotoPage(selected)
          handleOnPageChange(selected + 1)
        }}
        containerClassName='flex gap-x-[5px] justify-end items-center text-center w-full '
        pageClassName='w-[22px] h-[22px] flex items-center justify-center'
        activeClassName='text-red bg-primary rounded-full'
        activeLinkClassName='text-white'
        pageLinkClassName='text-black'
        breakLinkClassName='text-black'
      />
    </div>
  </div>
)

const WrappedComponent = withPagination(Pagination)
export default WrappedComponent
