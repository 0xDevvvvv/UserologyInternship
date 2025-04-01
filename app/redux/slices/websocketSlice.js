import { createSlice } from "@reduxjs/toolkit";

const websocketSlice = createSlice({
  name: "websocket",
  initialState: { prices: {} },
  reducers: {
    updatePrice: (state, action) => {
      state.prices[action.payload.id] = action.payload.price;
    },
  },
});

export const { updatePrice } = websocketSlice.actions;
export default websocketSlice.reducer;
