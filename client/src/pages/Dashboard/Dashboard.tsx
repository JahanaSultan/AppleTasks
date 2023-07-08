import { useAuthUser, useSignOut } from "react-auth-kit";
import SideMenu from "../../components/SideMenu/SideMenu";
import { useNavigate } from "react-router";

const Dashboard = (): JSX.Element => {
  const auth = useAuthUser();
  const signOut = useSignOut();
  const name = auth()?.name;
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <SideMenu />
      <button
        style={{ marginLeft: 150 }}
        onClick={() => {
          return signOut();
        }}
      >
        Sign out
      </button>
    </div>
  );
};

export default Dashboard;
