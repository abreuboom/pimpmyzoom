import React from "react";
import css from "../css/HeaderTitle.module.css";

export default function HeaderTitle() {
  return (
    <div className={css.container}>
      <img src={require("../assets/red_decal.svg")} alt='vibes' />
      <p className={css.title}>A home for Zoom backgrounds</p>
      <img src={require("../assets/purple_decal.svg")} alt='vibes' />
    </div>
  );
}
