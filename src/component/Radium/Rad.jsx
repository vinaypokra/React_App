import React from "react";
import Radium, { StyleRoot } from "radium";

const Rad = () => {
  const styles = {
    width: "100px",
    margin: "auto",
    padding: "10px",
    ":hover": {
      transform: "scale(1.04,1.04)",
    },
  };
  const innerContainer = {
    display: "inline-block",
    backgroundColor: "white",
    width: "50%",
    height: "500px",
    "@media (max-width : 500px)": {
      width: "100%",
    },
  };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Radium</h1>
        <div>
          <div style={innerContainer}></div>
          <div style={{ ...innerContainer, backgroundColor: "black" }}></div>
        </div>
        <button style={styles}>Vinay</button>
      </div>
    </>
  );
};
export default Radium(Rad);
