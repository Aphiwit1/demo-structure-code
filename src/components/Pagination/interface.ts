export interface PaginationPropsType {
  paginationProps: {
    totalPage: number
    totalCount?: number
    count?: number

    gotoPage?: (updater: ((pageIndex: number) => number) | number) => void
    handleOnPageChange: (newPage: number) => void
  }
  pageState: { pageIndex: number; pageSize?: number }
}
