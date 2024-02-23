import { usePagination } from '@hooks/usePagination'
import React from 'react'

const withMockTable = (Component: React.FC) => {
  const Hoc = () => {
    // ของจริงส่งมาเป็น props นะ ดูจากหน้าอื่นๆ
    const isOnSearchParams = true
    const initialPerPage = 5
    const { pageChange } = usePagination({
      initialPerPage,
      isOnSearchParams,
    })

    const newProps: any = {
      pageChange,
    }

    return <Component {...newProps} />
  }
  return Hoc
}
export default withMockTable
