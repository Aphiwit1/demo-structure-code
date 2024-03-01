import React from 'react'
import { NavLink } from 'react-router-dom'
import useBreadcrumbs from 'use-react-router-breadcrumbs'

export const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs()

  return (
    <React.Fragment>
      {breadcrumbs.map(({ match, breadcrumb }, index) => {
        return (
          <NavLink key={match.pathname} to={match.pathname}>
            <span className='text-black'>
              {breadcrumb}
              {breadcrumbs.length - 1 !== index ? ' / ' : ''}
            </span>
          </NavLink>
        )

        return null
      })}
    </React.Fragment>
  )
}
