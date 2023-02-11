import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
  },
  reducers: {
    addItem: (state, action) => {
      if (!state.items.hasOwnProperty(action.payload.id)) {
        state.items[action.payload.id] = {
          menu: action.payload,
          quantity: 1,
        };
      } else {
        Object.keys(state.items).map((eachKey) => {
          if (parseInt(eachKey) === action.payload.id) {
            state.items[eachKey].quantity += 1;
          }
        });
      }
    },
    removeItem: (state, action) => {
      Object.keys(state.items).map((eachKey) => {
        if (parseInt(eachKey) === action.payload) {
          state.items[eachKey].quantity -= 1;
        }
      });
    },
    clearItems: (state, action) => {
      delete state.items[action.payload];
    },
  },
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
