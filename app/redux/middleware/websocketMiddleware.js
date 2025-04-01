import { updatePrice } from "../slices/websocketSlice";

export const startWebSocket = () => {
  return (dispatch) => {
    const socket = new WebSocket("wss://ws.coincap.io/prices?assets=bitcoin,ethereum");

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      Object.keys(data).forEach((crypto) => {
        dispatch(updatePrice({ id: crypto, price: data[crypto] }));
      });
    };
  };
};
