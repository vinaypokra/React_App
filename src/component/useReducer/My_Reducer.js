import React, { useReducer } from "react";

const counter = {
  count1: 0,
  count2: 3,
};
function reducer(state, action) {
  switch (action) {
    case "INC":
      return state + 1;
    case "DES":
      return state - 1;
    case "INC5":
      return state + 5;
    case "DES5":
      return state - 5;
    case "RES1":
      return counter.count1;
    case "RES2":
      return counter.count2;
    default:
      return state;
  }
}
const My_Store = () => {
  const [count1, dispatch1] = useReducer(reducer, counter.count1);
  const [count2, dispatch2] = useReducer(reducer, counter.count2);
  return (
    <>
      Count1 :{count1}
      <br />
      <button onClick={() => dispatch1("INC")}>UP</button>
      <button onClick={() => dispatch1("DES")}>DOWN</button>
      <button onClick={() => dispatch1("RES1")}>REST</button>
      <br />
      Count2 :{count2}
      <br />
      <button onClick={() => dispatch2("INC5")}>UP</button>
      <button onClick={() => dispatch2("DES5")}>DOWN</button>
      <button onClick={() => dispatch2("RES2")}>REST</button>
    </>
  );
};

export default My_Store;
