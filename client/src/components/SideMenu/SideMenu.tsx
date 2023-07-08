import "./SideMenu.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faHouse,
  faCircleCheck,
  faListCheck,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/img/logo.svg";
import { NavLink } from "react-router-dom";
import { useSignOut } from "react-auth-kit";

const SideMenu = (): JSX.Element => {
  const signout = useSignOut();
  return (
    <div className="side-menu ">
      <NavLink to="/" className="side-menu__logo">
        <img src={logo} alt="logo" />
      </NavLink>
      <div className="side-center-menu">
        <NavLink to="/" className="side-menu__item">
          <FontAwesomeIcon icon={faHouse} />
        </NavLink>
        <NavLink to="/createtask" className="side-menu__item">
          <FontAwesomeIcon icon={faPlusCircle} />
        </NavLink>
        <NavLink to="/alltasks" className="side-menu__item">
          <FontAwesomeIcon icon={faListCheck} />
        </NavLink>
        <NavLink to="/checkedtasks" className="side-menu__item">
          <FontAwesomeIcon icon={faCircleCheck} />
        </NavLink>
      </div>
      <div className="side-menu__item" onClick={() => signout()}>
        <FontAwesomeIcon icon={faRightFromBracket} />
      </div>
    </div>
  );
};

export default SideMenu;
