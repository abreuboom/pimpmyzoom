import { Link } from "react-router-dom";
import React from "react";
import css from "../css/NavBar.module.css";

export default function NavBar() {
  return (
    <div className={css.container}>
      <Link to='/'>
        <div className={css.navItem}>
          <p>Zoomer</p>
        </div>
      </Link>

      <Link to='/why'>
        <div className={css.navItem}>
          <p>Why?</p>
        </div>
      </Link>
    </div>
  );
}
