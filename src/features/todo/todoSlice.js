import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../../app/apiService";

const initialState = {
  todos: [],
  filter: "SHOW_ALL",
  status: "idle",
};

export const addTodoAsync = createAsyncThunk("todo/addTodo", async (text) => {
  const todo = { text, completed: false };
  const res = await apiService.post("/todos", todo);
  console.log("res", res);
  return res.data;
});

export const getTodoAsync = createAsyncThunk("todo/getTodo", async () => {
  const res = await apiService.get("/todos");
  console.log("getTodo", res);
  return res.data;
});

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // addTodo: (state, action) => {
    //   const text = action.payload;
    //   state.todos.push({
    //     id: nextTodoId++,
    //     text,
    //     completed: false,
    //   });
    // },
    toggleTodo: (state, action) => {
      const id = action.payload; //// gia tri payload o day duowc gui den tu ham dispatch(toggleTodo(action.payload))
      state.todos[id].completed = !state.todos[id].completed;
    },

    setFilter: (state, action) => {
      const filterIn = action.payload;
      state.filter = filterIn;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTodoAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.todos.push(action.payload); /// gia tri payload o day duoc tra ve tu ham addTodoAsync => no chinh la res.data
        console.log("action payload", action.payload);
        console.log("addtodostate", state.todos);
      })
      .addCase(addTodoAsync.rejected, (state, action) => {
        state.status = "fail";
        state.error = action.error.message;
      });

    builder
      .addCase(getTodoAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTodoAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.todos = action.payload;
        console.log("state", state.todos);
      })
      .addCase(getTodoAsync.rejected, (state, action) => {
        state.status = "fail";
        state.error = action.error.message;
        console.log("action", action);
        console.log("state err", state.error);
      });
  },
});

export const { toggleTodo, setFilter } = todoSlice.actions;
export default todoSlice.reducer;
