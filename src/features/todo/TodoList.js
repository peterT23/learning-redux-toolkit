import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "./todoSlice";

const todoFilter = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter((todo, index) => todo.completed);
    case "SHOW_ACTIVE":
      return todos.filter((todo, index) => !todo.completed);
    default:
      return todos;
  }
};

const TodoList = () => {
  const { todos, filter } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const todoFilters = todoFilter(todos, filter);

  return (
    <ul>
      {todoFilters.map((todo, index) => (
        <li
          key={index}
          className={todo.completed ? "completed" : ""}
          onClick={() => dispatch(toggleTodo(todo.id, todo.text))}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
