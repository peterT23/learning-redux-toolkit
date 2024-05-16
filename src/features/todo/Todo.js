import React, { useEffect } from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import TodoFilterBtns from "./TodoFilterBtns";

import { getTodoAsync } from "./todoSlice";
import { useDispatch } from "react-redux";

const Todo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoAsync());
  }, [dispatch]);
  return (
    <div>
      <TodoAdd />
      <TodoList />
      <TodoFilterBtns />
    </div>
  );
};

export default Todo;
