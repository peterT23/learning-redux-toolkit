import React, { useState } from "react";
import { addTodoAsync } from "./todoSlice";
import { useDispatch } from "react-redux";

const TodoAdd = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  return (
    <div onChange={(e) => setText(e.target.value)}>
      <input
        type="text"
        id="todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(addTodoAsync(text));
          setText("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default TodoAdd;
