import React from "react";
import { uploadItem } from "../utils/Firebase";

export default function Upload() {
  var src =
    "https://images.unsplash.com/photo-1585244759837-5bb4b3a6919c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max";
  var title = "Books Books Books";
  var author = "Hasque May";

  uploadItem(title, author, src);

  return (
    <div>
      <h1>yeet</h1>
    </div>
  );
}
