import { TablePropsType } from '@components/Table/interface'

import NoData from '@components/NoData/NoData'
import { twJoin, twMerge } from 'tailwind-merge'
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import Pagination from '@components/Pagination/Pagination.tsx'
// import { CaretUpDownIcon } from '@components/Icons/Icons.tsx'
import Loading from '@components/utils/Loading.tsx'

const EmptyArray: any = []

/**
 * Please provide { id } in { data }. for being rowID
 ** */
const Table = <D extends object>({
  data,
  columns,
  isSortable = true,
  isLoading,
  isShowPagination,
  emptyStateMessage,
  pagination,
  canSelectRows,
  onDoubleClickRow,
  onSelectedRows,
  selectedRows,
  className,
  isResizeAble = false,
  isEmptySearch,
  enableMultiRowSelection,
}: TablePropsType<D>) => {
  const { getHeaderGroups, getRowModel, getState } = useReactTable<D>({
    columns,
    data: !data ? EmptyArray : data,
    getCoreRowModel: getCoreRowModel(),
    getRowId: (originalRow, index, parent) =>
      `${(originalRow as any).id ?? parent?.id ?? index}`,
    //   resize
    enableColumnResizing: isResizeAble,
    columnResizeMode: 'onChange',
    //   sort
    getSortedRowModel: getSortedRowModel(),
    manualSorting: false,
    enableSorting: isSortable,
    //   select
    enableRowSelection: canSelectRows,
    onRowSelectionChange: onSelectedRows,
    enableMultiRowSelection,
    //   pagination
    manualPagination: true,
    autoResetPageIndex: false,
    pageCount:
      isShowPagination && pagination ? pagination?.totalPage ?? -1 : undefined,
    //  State
    state: {
      rowSelection: selectedRows,
      pagination:
        isShowPagination && pagination
          ? {
              pageSize: pagination?.currentPageSize ?? data?.length ?? 0,
              pageIndex: (pagination.currentPage ?? 1) - 1,
            }
          : undefined,
    },
    //   Default column
    defaultColumn: {
      minSize: 0,
      size: 150,
      maxSize: 150,
    },
  })

  return (
    <div>
      {data?.length || isLoading ? (
        <>
          <div
            className={twMerge(
              'max-w-full overflow-x-auto bg-gray-secondary min-h-fit',
              className
            )}
          >
            <table className='w-full table-auto'>
              <thead>
                {getHeaderGroups().map(headerGroup => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                      <th
                        key={header.id}
                        colSpan={header.colSpan}
                        className={twMerge(
                          'relative text-xs font-normal border-b-[1px] border-white border-opacity-10 p-2 w-0 bg-blue-500'
                        )}
                        style={{
                          width:
                            header.getSize() === 150
                              ? 'auto'
                              : header.getSize(),
                        }}
                      >
                        <div
                          className={twMerge(
                            `relative flex items-center justify-left text-sm text-white`,
                            header.column.getIsSorted() &&
                              'text-secondary font-bold ',
                            header.column.getIsResizing() && 'cursor-col-resize'
                          )}
                          onMouseDown={header.getResizeHandler()}
                          onTouchStart={header.getResizeHandler()}
                          style={{
                            width:
                              header.column.getSize() === 150
                                ? 'auto'
                                : header.column.getSize(),
                          }}
                        >
                          {/*  Render header */}
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {/* Resize area */}
                          {header.column.getCanResize() && (
                            <div className='absolute top-0 right-[0px] h-full w-[5px] cursor-col-resize touch-none select-none' />
                          )}

                          {/* Sortable area */}
                          {header.column.getCanSort() && (
                            <div
                              onClick={header.column.getToggleSortingHandler()}
                            >
                              {/* <CaretUpDownIcon
                                width='15px'
                                height='15px'
                                className='ml-2 cursor-pointer'
                              /> */}
                            </div>
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>

              {isLoading ? (
                <tbody>
                  <tr className='h-[200px]'>
                    <td colSpan={100}>
                      <Loading className='flex items-center justify-center' />
                    </td>
                  </tr>
                </tbody>
              ) : (
                <tbody>
                  {getRowModel().rows.map(row => (
                    <tr
                      key={row.id}
                      className={twJoin(
                        'hover:bg-primary-20',
                        onDoubleClickRow && 'cursor-pointer'
                      )}
                      onClick={e => {
                        if (canSelectRows) {
                          row.toggleSelected()
                          e.preventDefault()
                        }
                      }}
                      onDoubleClick={() => {
                        if (onDoubleClickRow) onDoubleClickRow(row)
                      }}
                    >
                      {row.getVisibleCells().map(cell => (
                        <td
                          key={cell.id}
                          className={twMerge(
                            'align-top',
                            `py-[10px] text-xs  px-2`,
                            'first:pl-[10px] last:pr-[10px]',
                            canSelectRows &&
                              'first:px-[8px] [&:nth-child(2)]:!border-l-0'
                          )}
                          style={{
                            width:
                              cell.column.getSize() === 150
                                ? 'auto'
                                : cell.column.getSize(),
                          }}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>

          {!isLoading && isShowPagination && pagination && (
            <Pagination
              paginationProps={{
                count:
                  (data?.length || 0) +
                  (pagination.currentPageSize ?? 0) *
                    ((pagination.currentPage ?? 1) - 1),
                totalCount: pagination.totalCount,
                totalPage: pagination.totalPage || 0,
                handleOnPageChange: e =>
                  pagination.onPageChange && pagination.onPageChange(e),
              }}
              pageState={{
                pageIndex: (pagination.currentPage ?? 1) - 1,
                pageSize: pagination.currentPageSize,
              }}
            />
          )}
        </>
      ) : (
        emptyStateMessage ?? <NoData isSearch={isEmptySearch} />
      )}
    </div>
  )
}

export default Table
