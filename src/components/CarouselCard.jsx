import React, { useState } from "react";

// import Preview from "./Preview";
import css from "../css/Carousel.module.css";

export default function CarouselCard(props) {
  const store = props.item;
  const [expanded, setExpanded] = useState(false);

  function toggleExpanded() {
    setExpanded(!expanded);
    props.onExpand();
  }

  return (
    <div
      className={[css.item, expanded ? css.expanded : ""].join(" ")}
      onClick={toggleExpanded}>
      <div className={css.imgContainer}>
        {/* {expanded && <Preview />} */}
        <img src={store.src} alt='' className={css.thumbnail} />
      </div>
      <div className={css.desc}>
        <p className={css.title}>{store.title}</p>
        <p className={css.author}>Submitted by {store.author}</p>
      </div>
    </div>
  );
}
