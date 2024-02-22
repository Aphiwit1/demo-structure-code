import React from 'react'
import { useCheckUserIsProjectMemberQuery } from '@client/graphql/gql-gen/types-and-hooks.ts'
import { useGraphQLClient } from '@client/clientContext.tsx'
import Loading from '@components/utils/Loading.tsx'
import NoData from '@components/NoData/NoData.tsx'
import { toast } from 'react-toastify'
import { Navigate } from 'react-router-dom'
import { ErrorMessage } from '@constant/errorMessage.ts'
import { useParams } from 'react-router'

const toastRouteGuardId = 'TOAST_ROUTE_PROJECT_MEMBER_GUARD_ID'

const withProjectMemberGuard = (Component: React.FC<any>) => {
  const Hoc = props => {
    const { projectId } = useParams()
    const graphQLClient = useGraphQLClient()

    const { data, isLoading, isError } = useCheckUserIsProjectMemberQuery(
      graphQLClient,
      { projectId: projectId! }
    )

    if (isLoading) {
      return <Loading />
    }
    if (isError || data?.checkUserIsProjectMember === undefined) {
      return <NoData message='Something went wrong' />
    }

    if (!data.checkUserIsProjectMember) {
      toast.info(ErrorMessage.permissionAccessPage, {
        toastId: toastRouteGuardId,
      })
      return <Navigate to='/' replace />
    }

    return <Component {...props} />
  }
  return Hoc
}
export default withProjectMemberGuard
