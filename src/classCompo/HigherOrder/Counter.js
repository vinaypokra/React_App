import React from "react";
// import AddExtra from "./MainCom";
import withFunction from "./WithFunction";
// class Counter extends Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.inc_count}>{this.props.count} Click</button>
//       </div>
//     );
//   }
// }

const Counter = ({ count, setCount }) => {
  return (
    <div>
      <button onClick={setCount}>{count} Click</button>
    </div>
  );
};
const Counter2 = ({ count, setCount }) => {
  return (
    <div>
      <button onClick={setCount}>{count} Click</button>
    </div>
  );
};

const MainCounterBox = () => {
  let UseCounter = withFunction(Counter);
  let UseCounter2 = withFunction(Counter2);
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <div style={{ width: "300px" }}>
          {" "}
          <UseCounter />
        </div>
        <div style={{ width: "300px" }}>
          {" "}
          <UseCounter2 />
        </div>
      </div>
    </>
  );
};

export default MainCounterBox;
