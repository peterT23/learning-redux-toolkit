import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import multiCounterReducer from "../features/multiCounter/multiCounterSlice";
import todoSlice from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: combineReducers({
    counter: counterReducer,
    multiCounter: multiCounterReducer,
    todo: todoSlice,
  }),
});
