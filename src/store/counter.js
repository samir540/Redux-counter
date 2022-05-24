import { createSlice } from "@reduxjs/toolkit";


const initialCounterState = {
    counter: 0,
    toggle: true,
  };
  
  const counterSlice = createSlice({
    name: "counter",
    initialState:initialCounterState,
    reducers: {
      increase(state, action) {
        state.counter = state.counter + action.payload;
      },
      increment(state) {
        state.counter++;
      },
      decrement(state) {
        state.counter--;
      },
      toggle(state) {
        state.toggle = !state.toggle;
      },
    },
  });



  export  const counterActions = counterSlice.actions;
  export  default  counterSlice.reducer;