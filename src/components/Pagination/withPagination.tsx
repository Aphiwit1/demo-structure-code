import React from 'react'
import { PaginationPropsType } from './interface'

const withPagination = (Component: React.FC<PaginationPropsType>) => {
  const Hoc = ({ ...props }: PaginationPropsType) => {
    const newProps = {
      ...props,
    }
    return <Component {...newProps} />
  }

  return Hoc
}
export default withPagination
