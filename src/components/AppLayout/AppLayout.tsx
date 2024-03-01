import withAuthenticationGuard from '@libs/hoc/withAuthenticationGuard'
import SideNavigation from './components/SideNavigation/SideNavigation'
import withAppLayout from './withAppLayout'
import { Breadcrumbs } from '@components/AppLayout/components/Breadcrumbs/Breadcrumbs'

const AppLayout = ({ children }: any) => (
  <>
    {/* <SideNavigation userMe={userMe} /> */}
    <SideNavigation />
    <div className='flex flex-col min-h-screen h-full w-full pb-[80px] pt-[52px] pl-[240px]'>
      <div className='px-[40px] h-full'>
        <div>
          <Breadcrumbs />
        </div>
        {children}
      </div>
    </div>
  </>
)

const WrappedComponent = withAuthenticationGuard(withAppLayout(AppLayout))
export default WrappedComponent
