import React, { createContext, useEffect, useState } from "react";

// export the context so that other components can import
export const StoreContext = createContext();

const initialStore = Array(6).fill({
  id: "0000000001",
  title: "title",
  author: "author",
  src: require("../assets/placeholder_bg.png")
});

function StoreContextProvider(props) {
  const [store, setStore] = useState(() => {
    return initialStore;
  });

  useEffect(() => {
    window.localStorage.setItem("store", JSON.stringify(store));
  }, [store]);

  function addToStore(item) {
    console.log("hi");

    setStore(store.concat(item));
    console.log(store);
  }

  return (
    <StoreContext.Provider
      value={{
        ...store,
        addToStore
      }}>
      {props.children}
    </StoreContext.Provider>
  );
}
export default StoreContextProvider; // export this component as default
