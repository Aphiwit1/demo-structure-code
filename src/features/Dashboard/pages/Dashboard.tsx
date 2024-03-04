import MockTable from '@features/Dashboard/components/MockTable/MockTable'
import withDashboard from './withDashboard'
import PrimaryButton from '@components/buttons/PrimaryButton'
import { NavLink } from 'react-router-dom'
import SimpleChart from '@features/Dashboard/components/SimpleChart/SimpleChart'
import Tag from '@components/Tag/Tag'
import { StatusEnum } from '@enums/StatusEnum'

const Dashboard = ({
  handleOnDeleteDocument,
  onHandleSetting,
  breadcrumbs,
}: any) => (
  <>
    <div className='flex justify-end'>
      <PrimaryButton
        onClick={() => onHandleSetting()}
        type='button'
        className='sdsd'
      >
        Remainign Life Setting
      </PrimaryButton>
    </div>
    {/* <div className='w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 bg-gradient-to-r from-cyan-500 to-blue-500 mb-5'>
      Dashboard Page
      <button className='border px-2 m-3' onClick={handleOnDeleteDocument}>
        Modal
      </button>
    </div> */}

    {/* <div className='w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 bg-gradient-to-r'>
      <MockTable />
    </div> */}

    <div>
      <h2>
        Status:{' '}
        <Tag tagStyle={StatusEnum.NORMAL} isShowPrefixDot={true}>
          LOW
        </Tag>
      </h2>
      <SimpleChart />
    </div>

    <div>
      <h2>
        Status:
        <Tag tagStyle={StatusEnum.WARNING} isShowPrefixDot={true}>
          WARNING
        </Tag>
      </h2>
      <SimpleChart />
    </div>
  </>
)

const WrappedComponent = withDashboard(Dashboard)
export default WrappedComponent
