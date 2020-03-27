import React from "react";
import css from "../css/HeaderTitle.module.css";
import publicUrl from "../utils/publicUrl";

export default function HeaderTitle() {
  return (
    <div className={css.container}>
      <img src={publicUrl("assets/red_decal.svg")} alt='vibes' />
      <p className={css.title}>A home for Zoom backgrounds</p>
      <img src={publicUrl("assets/purple_decal.svg")} alt='vibes' />
    </div>
  );
}
