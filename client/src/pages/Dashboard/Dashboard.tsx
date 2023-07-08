import { useAuthUser, useSignOut } from "react-auth-kit";
import SideMenu from "../../components/SideMenu/SideMenu";

const Dashboard = (): JSX.Element => {
  const auth = useAuthUser();
  const signOut = useSignOut();
  const name = auth()?.name;

  return (
    <div className="dashboard">
      <SideMenu />
      <button style={{ marginLeft: 150 }} onClick={signOut}>
        Sign out
      </button>
    </div>
  );
};

export default Dashboard;
