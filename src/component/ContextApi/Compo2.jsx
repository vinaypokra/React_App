import React, { useContext } from "react";
import Compo3 from "./Compo3";
import { FirstName, LastName } from "./ContextApiUse";

const Compo2 = () => {
  /* Hooks useContect */
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  return (
    <>
      <h1>
        Hello {fname} {lname} Using "useContext"
      </h1>
      <Compo3 />
    </>
  );
};

export default Compo2;
