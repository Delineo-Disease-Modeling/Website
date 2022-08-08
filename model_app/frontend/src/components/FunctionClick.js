import React from "react";

//Why does this exist??

function FunctionClick() {
  function clickHandler() {
    console.log("hello world");
  }

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunctionClick;
