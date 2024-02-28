import React from 'react'

const withSelectFactoryPage = (Component: React.FC) => {
  const Hoc = () => {
    const newProps = {}
    return <Component {...newProps} />
  }

  return Hoc
}
export default withSelectFactoryPage
