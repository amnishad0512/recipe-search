import React, { useState } from "react";
import { createContext } from "react";
const ListContext = createContext();
const List = (props) => {
  const [item, setItem] = useState([]);
  return (
    <>
      <ListContext.Provider value={{ item, setItem }}>
        {props.children}
      </ListContext.Provider>
    </>
  );
};

export default List;
export { ListContext };
