import MockTable from '@features/Dashboard/components/MockTable/MockTable'
import withDashboard from './withDashboard'

const Dashboard = ({ handleOnDeleteDocument }: any) => (
  <>
    <div className='w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 bg-gradient-to-r from-cyan-500 to-blue-500 mb-5'>
      Dashboard Page
      <button className='border px-2 m-3' onClick={handleOnDeleteDocument}>
        Modal
      </button>
    </div>

    <div className='w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 bg-gradient-to-r'>
      <MockTable />
    </div>
  </>
)

const WrappedComponent = withDashboard(Dashboard)
export default WrappedComponent
