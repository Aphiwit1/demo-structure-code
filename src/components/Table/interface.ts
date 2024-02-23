import {
  ColumnDef,
  OnChangeFn,
  Row,
  RowSelectionState,
} from '@tanstack/react-table'

export interface TablePropsType<D extends object> {
  columns: ColumnDef<D, any>[]
  data: D[] | undefined
  isSortable?: boolean
  emptyStateMessage?: React.ReactNode
  isLoading?: boolean
  canSelectRows?: boolean
  isShowPagination?: boolean
  pagination?: {
    currentPage?: number
    currentPageSize?: number
    totalCount?: number
    totalPage?: number
    onPageChange?: (newPage: number) => void
  }
  onSelectedRows?: OnChangeFn<RowSelectionState>
  onDoubleClickRow?: (row: Row<D>) => void
  selectedRows?: RowSelectionState
  className?: string
  isResizeAble?: boolean
  isEmptySearch?: boolean
  enableMultiRowSelection?: boolean
}
