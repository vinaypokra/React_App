import React, { createContext } from "react";
import Compo1 from "./Compo1";
const FirstName = createContext();
const LastName = createContext();
const ContextApiUse = () => {
  return (
    <>
      <FirstName.Provider value={"Vinay"}>
        <LastName.Provider value={"Pokra"}>
          <Compo1 />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};
export default ContextApiUse;
export { FirstName, LastName };
