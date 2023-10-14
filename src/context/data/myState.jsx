import React from "react";
import MyContext from "./myContext";

function MyState(props) {
  const state = {
    name: "anju K",
    class: "B.tech",
  };
  const location = "gorakhpur";
  return (
    <MyContext.Provider value={{ state, location }}>
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
