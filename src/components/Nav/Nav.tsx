import { Fragment } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <Fragment>
      <div className="nav">
        <ul>
          <li>
            <NavLink to="/">keebtracker.jhondle</NavLink>
          </li>
          <li>
            <NavLink to="/builds">builds</NavLink>
          </li>
          <li>
            <NavLink to="/userParts">user parts</NavLink>
          </li>
          <li>
            <NavLink to="/wishlist">wishlist</NavLink>
          </li>
          <li>
            <NavLink to="/sold">sold</NavLink>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}

export default Nav;
