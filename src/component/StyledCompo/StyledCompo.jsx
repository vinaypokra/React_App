import React from "react";
import styled from "styled-components";

const StyleDiv = styled.div`
  display: inline-block;
  background-color: white;
  width: 50%;
  height: 500px;
  &:hover {
    color: red;
    background-color: black;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;
const StyledCompo = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Style</h1>
        <div>
          <StyleDiv style={{ backgroundColor: "black" }}>s</StyleDiv>
          <StyleDiv>s</StyleDiv>
        </div>
        <button>Vinay</button>
      </div>
    </>
  );
};
export default StyledCompo;
