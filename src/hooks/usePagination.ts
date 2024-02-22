import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export interface PaginationProps {
  initialPerPage: number
  initialPage?: number
  isOnSearchParams?: boolean
  paramsKey?: string
}
export function usePagination({
  initialPerPage,
  initialPage = 1,
  isOnSearchParams = true,
  paramsKey = 'page',
}: PaginationProps) {
  const [, setSearchParams] = useSearchParams()
  const [page, setPage] = useState(initialPage)
  const [perpage, setPerpage] = useState(initialPerPage)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (isOnSearchParams) {
      setSearchParams(
        prev => {
          const updatedParams = new URLSearchParams(prev)
          updatedParams.set(paramsKey, page.toString())
          return updatedParams
        },
        //  Replace path to perform back by browser
        { replace: true }
      )
    }
  }, [paramsKey, isOnSearchParams, page, setSearchParams])

  function pageChange(newPage: number) {
    setPage(newPage)
  }

  function perpageChange(newPerpage: number) {
    setPerpage(newPerpage)
    setPage(1)
  }

  function handleTotalChange(newTotal: number) {
    setTotal(newTotal)
  }

  return {
    page,
    perpage,
    total,
    pageChange,
    perpageChange,
    handleTotalChange,
  }
}
