// import React from 'react'
// import {
//   UserRole,
//   useUserMeQuery,
// } from '@client/graphql/gql-gen/types-and-hooks.ts'
// import { useGraphQLClient } from '@client/clientContext.tsx'
// import Loading from '@components/utils/Loading.tsx'
// import NoData from '@components/NoData/NoData.tsx'
// import { toast } from 'react-toastify'
// import { Navigate } from 'react-router-dom'

// const toastRouteGuardId = 'TOAST_ROUTE_GUARD_ID'

// const withRoleGuard = (Component: React.FC) => {
//   const Hoc = ({ activeRoles }: { activeRoles?: UserRole[] }) => {
//     const graphQLClient = useGraphQLClient()
//     const { data: userMe, isLoading, isError } = useUserMeQuery(graphQLClient)

//     if (isLoading) {
//       return <Loading />
//     }
//     if (isError || userMe?.profile.role === undefined) {
//       return <NoData message='Something went wrong' />
//     }
//     if (userMe?.profile.role && activeRoles) {
//       const isActive = activeRoles.includes(userMe?.profile.role)
//       if (!isActive) {
//         toast.info("You don't have permission to access this page", {
//           toastId: toastRouteGuardId,
//         })
//         return <Navigate to='/' replace />
//       }
//     }

//     return <Component />
//   }
//   return Hoc
// }
// export default withRoleGuard
