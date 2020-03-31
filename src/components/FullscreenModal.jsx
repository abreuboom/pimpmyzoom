import React, { useParams } from "react";

import css from "../css/FullscreenModal.module.css";

export default function FullscreenModal() {
  let { id } = useParams();

  return (
    <div className={css.overlay}>
      <div className={css.container}>
        {/* <img src={store.src} alt={store.title} /> */}
        <div className={css.btnGroup}></div>
      </div>
    </div>
  );
}
