import React from "react";
import { FirstName, LastName } from "./ContextApiUse";

const Compo3 = () => {
  return (
    <>
      <FirstName.Consumer>
        {(fname) => {
          return (
            <LastName.Consumer>
              {(lname) => {
                return (
                  <h1>
                    Hello {fname} {lname} Using "ContextApi"
                  </h1>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </>
  );
};

export default Compo3;
