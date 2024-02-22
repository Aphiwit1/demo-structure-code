import withDashboard from "./withDashboard";

const Dashboard = () => {
  return (
    <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 bg-gradient-to-r from-cyan-500 to-blue-500">
      Dashboard Page
    </div>
  );
};

const WrappedComponent = withDashboard(Dashboard);
export default WrappedComponent;
