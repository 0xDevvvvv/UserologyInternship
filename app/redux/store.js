import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./slices/weatherSlice";
import cryptoReducer from "./slices/cryptoSlice";
import websocketReducer from "./slices/websocketSlice";
import newsReducer from "./slices/newsSlice"; // Import news slice

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    crypto: cryptoReducer,
    news: newsReducer,
    websocket: websocketReducer,
  },
});

export default store;
