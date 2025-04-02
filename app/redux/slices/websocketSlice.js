// websocketSlice.js
import { createSlice } from '@reduxjs/toolkit';

const websocketSlice = createSlice({
  name: 'websocket',
  initialState: { prices: {},increase : {} },
  reducers: {
    updatePrice: (state, action) => {
      if (state.prices[action.payload.id] - action.payload.price < 0 )  
        state.increase[action.payload.id] = true
      else
        state.increase[action.payload.id] = false



      state.prices[action.payload.id] = action.payload.price;
      console.log(action)
    },
  },
});

export const { updatePrice } = websocketSlice.actions;
export default websocketSlice.reducer;
