/* Life Cycle  */
/* compentDidMount 
componentDidUpdate 
componenetDidUnmount */
import react, { useEffect, useState } from "react";

const Some = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);

  useEffect(() => {
    alert("Click");
  }, [num]);
  return (
    <>
      <h1>Hello Guys I m Using UseEffect </h1>
      <button onClick={() => setNum(num + 1)}>Click Me {num}</button>
      <br />
      <button onClick={() => setNum2(num2 + 1)}>Click Me {num2}</button>
    </>
  );
};

export default Some;
