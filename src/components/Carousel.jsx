import React, { useContext, useEffect, useState } from "react";

import CarouselCard from "./CarouselCard";
import { StoreContext } from "../utils/Context";
import css from "../css/Carousel.module.css";
import { ref } from "../utils/Firebase";

export default function Carousel() {
  const [expandedItem, setExpandedItem] = useState(false);

  let { store, addToStore } = useContext(StoreContext);

  console.log(store);

  function toggleExpand() {
    setExpandedItem(!expandedItem);
  }

  useEffect(() => {
    const fetchFeatured = ref.once(
      "value",
      snapshot => {
        snapshot.forEach(child => {
          var dict = child.val();
          var obj = {
            id: child.key,
            title: dict.title,
            author: dict.author,
            src: dict.src
          };

          addToStore(obj);
        });
      },
      err => {
        console.log(err);
      }
    );
    return () => fetchFeatured;
  });

  return (
    <div
      className={[css.container, expandedItem ? css.expandActive : ""].join(
        " "
      )}>
      {store.length !== 0 &&
        store.map(bg => {
          return <CarouselCard key={bg.id} item={bg} onExpand={toggleExpand} />;
        })}
    </div>
  );
}
