import SideNavigation from "./components/SideNavigation/SideNavigation";
import withAppLayout from "./withAppLayout";

const AppLayout = ({ children }: any) => {
  return (
    <>
      {/* <SideNavigation userMe={userMe} /> */}
      <SideNavigation />
      <div
        className={`flex flex-col min-h-screen h-full w-full pb-[80px] pt-[52px] pl-[240px]`}
      >
        <div className="px-[40px] h-full ">{children}</div>
      </div>
    </>
  );
};

const WrappedComponent = withAppLayout(AppLayout);
export default WrappedComponent;
