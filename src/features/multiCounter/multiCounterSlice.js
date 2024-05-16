import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const multiCounterSlice = createSlice({
  name: "multiCounter",
  initialState,
  reducers: {
    addCounter: (state) => {
      state.push({ count: 0 });
      console.log("state", state);
    },
    increment: (state, action) => {
      const { index } = action.payload; /// ? cho nay la sao ta action.payload nay o dau ra -> trong ham dispatch(increment(index))
      console.log("index", index);
      console.log("action", action);
      state[index].count += 1;
    },
    decrement: (state, action) => {
      const index = action.payload;
      console.log("index", index);
      console.log("action", action);
      state[index].count -= 1;
    },
  },
});

console.log("multicounterSlice", multiCounterSlice);

export const { increment, decrement, addCounter } = multiCounterSlice.actions;
export default multiCounterSlice.reducer;
