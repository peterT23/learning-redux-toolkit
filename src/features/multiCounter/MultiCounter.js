import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, addCounter } from "./multiCounterSlice";

const MultiCounter = () => {
  const dispatch = useDispatch();
  const counters = useSelector((state) => state.multiCounter);
  // const k = "xinchao";
  return (
    <div>
      <button onClick={() => dispatch(addCounter())}>Add Counter</button>
      {counters.map((counter, index) => (
        <div key={index} style={{ margin: "10px" }}>
          <button onClick={() => dispatch(decrement(index))}>-</button>
          <span>{counter.count}</span>
          <button onClick={() => dispatch(increment(index))}>+</button>
          {/* gia tri index o tren bay gio
           tương đương voi pay load  ví dụ chúng ta có thể thêm vào
            trong payload 1 giá trị mới bằng cách như sau increment({index, k ="xinchao"})*/}
        </div>
      ))}
    </div>
  );
};

export default MultiCounter;
