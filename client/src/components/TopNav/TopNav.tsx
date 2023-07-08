import "./TopNav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBell,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { useAuthUser } from "react-auth-kit";

const TopNav = (): JSX.Element => {
  const auth = useAuthUser();
  const name = auth()?.name;
  return (
    <div className="topnav mt-1 flex-align-center">
      <div className="input-search">
        <div className="icon-box flex-center">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <input type="text" placeholder="Search" />
      </div>
      <div className="nav-profile flex">
        <div className="icons flex-align-center">
          <div className="icon">
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faCalendarDays} />
          </div>
        </div>
        <div className="profile flex-align-center">
          <div className="avatar">
            <img
              src="https://imgv3.fotor.com/images/gallery/watercolor-female-avatar.jpg"
              alt="avatar"
            />
          </div>
          <p className="name">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
