import { Fragment } from "react";
import "./Nav.css";

function Nav() {
  return (
    <Fragment>
      <div className="nav">
        <ul>
          <li>
            <a className="active" href="#home">
              keebtracker.jhondle
            </a>
          </li>
          <li>
            <a href="#news">builds</a>
          </li>
          <li>
            <a href="#contact">parts</a>
          </li>
          <li>
            <a href="#about">wishlist</a>
          </li>
          <li>
            <a href="#about">sold</a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}

export default Nav;
