import React, { useEffect, useState } from "react";

import CarouselCard from "./CarouselCard";
import css from "../css/Carousel.module.css";
import { ref } from "../utils/Firebase";

const initialStore = Array(6).fill({
  title: "title",
  author: "author",
  src: require("../assets/placeholder_bg.png")
});

export default function Carousel() {
  const [store, setStore] = useState(initialStore);

  const [expandedItem, setExpandedItem] = useState(false);

  function toggleExpand() {
    setExpandedItem(!expandedItem);
  }

  useEffect(() => {
    const fetchFeatured = ref.once(
      "value",
      snapshot => {
        const newStore = [];

        snapshot.forEach(child => {
          var dict = child.val();
          var obj = {
            title: dict.title,
            author: dict.author,
            src: dict.src
          };

          newStore.push(obj);
        });

        setStore(newStore);
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
        store.map((bg, i) => {
          return <CarouselCard key={i} item={bg} onExpand={toggleExpand} />;
        })}
    </div>
  );
}
