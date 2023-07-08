import { useAuthUser, useSignOut } from "react-auth-kit";
import SideMenu from "../../components/SideMenu/SideMenu";
import TopNav from "../../components/TopNav/TopNav";
import "./Dashboard.scss";

const Dashboard = (): JSX.Element => {
  const auth = useAuthUser();
  const name = auth()?.name;

  return (
    <div className="dashboard">
      <SideMenu />
      <TopNav />
    </div>
  );
};

export default Dashboard;
