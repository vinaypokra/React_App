import React, { useMemo, useReducer } from "react";

/* ReCompute the not use the cached values */
var init_value = {
  count1: 0,
  count2: 1,
};

function reducer(state, action) {
  switch (action) {
    case "inc_count_1":
      return state + 1;
    case "inc_count_2":
      return state + 1;
    default:
      return state;
  }
}
export default function Memo() {
  const [count1, dispatch1] = useReducer(reducer, init_value.count1);
  const [count2, dispatch2] = useReducer(reducer, init_value.count2);
  const find_odd_even = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i++;
    return count1 % 2 === 0;
  }, [count1]);
  return (
    <>
      <button onClick={() => dispatch1("inc_count_1")}>{count1}Click</button>
      <span>{find_odd_even ? "even" : "false"}</span>
      <button onClick={() => dispatch2("inc_count_2")}>{count2}Click</button>
    </>
  );
}
