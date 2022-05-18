import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./header.module.css";

const Header = () => {
  return (
    <div className={classes["header-container"]}>
      <div className={classes["logo-container"]}>
        <Link to={"/"}>
          <h1>Screener</h1>
        </Link>
      </div>

      <nav className={classes["nav-item-container"]}>
        <div className={classes["nav-item"]}>
          <NavLink activeClassName={classes["nav-item-active"]} to="/config">
            Configuration
          </NavLink>
        </div>
        <div className={classes["nav-item"]}>
          <NavLink activeClassName={classes["nav-item-active"]} to="/news">
            News
          </NavLink>
        </div>
        <div className={classes["nav-item"]}>
          <NavLink activeClassName={classes["nav-item-active"]} to="/aboutus">
            About Us
          </NavLink>
        </div>
        <div className={classes["nav-item"]}>
          <NavLink activeClassName={classes["nav-item-active"]} to="contactus">
            Contact Us
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
