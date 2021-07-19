import React, { useState } from "react";

export default function WithFunctionUpdate(OriginalComponent) {
  const UpdateCompo = () => {
    const BoxStyle = { background: "white", width: "90%", height: "50vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" };
    const [count, setCount] = useState(0);
    function inc_count() {
      setCount(count + 1);
    }
    return (
      <div style={BoxStyle}>
        <OriginalComponent count={count} setCount={inc_count} />
      </div>
    );
  };
  return UpdateCompo;
}
