 import React, { useState } from "react";

const Counter=() =>{
    const [count, setCount]=useState(0);
    const x = ()=> setCount(count+1);
    return(
        <div>
        <p>Count :{count}</p>
      <button onClick={x}>Increase
      </button>
       </div>
    )
};
export default Counter;
