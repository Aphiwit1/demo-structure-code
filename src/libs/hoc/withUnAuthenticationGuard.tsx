// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router'
// import { DashboardRoutesPath } from '@config/Router.ts'
// import { FunctionComponentType } from '@interfaces/FunctionComponentType.ts'
// import { useAppStore } from '../../store/store.ts'

// const withUnAuthenticationGuard = (
//   Component: React.FC<FunctionComponentType>
// ) => {
//   const Hoc = (props: FunctionComponentType) => {
//     const navigate = useNavigate()
//     const isAuth = useAppStore(state => state.isAuth)
//     useEffect(() => {
//       if (isAuth) {
//         navigate(DashboardRoutesPath.dashboard.absolutePath)
//       }
//     }, [isAuth, navigate])

//     return <Component {...props} />
//   }
//   return Hoc
// }
// export default withUnAuthenticationGuard
