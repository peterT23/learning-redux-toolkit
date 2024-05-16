import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "./todoSlice";

const TodoFilterBtns = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(setFilter("SHOW_ALL"))}>Show ALL</button>
      <button onClick={() => dispatch(setFilter("SHOW_COMPLETED"))}>
        Show Compledted
      </button>
      <button onClick={() => dispatch(setFilter("SHOW_ACTIVE"))}>
        Show Active
      </button>
    </div>
  );
};

export default TodoFilterBtns;
