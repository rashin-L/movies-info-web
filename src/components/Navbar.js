import React, { Component } from "react";
import style from "../styles/style.module.css";
import { Link } from "react-router-dom";


class Navbar extends Component {
  render() {
    return (
      <nav className={style["navbar-collapse"]}>
        <ul className={style["navbar-nav"]}>
          <li className={style["nav-item"]}>
            <Link className={style["nav-link"]} to="/">
              Home
            </Link>
          </li>
          <li className={style["nav-item"]}>
            <Link className={style["nav-link"]} to="/movies">
              Movies
            </Link>
          </li>
          <li className={style["nav-item"]}>
            <Link className={style["nav-link"]} to="/about-us">
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
