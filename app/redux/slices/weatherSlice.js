

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city) => {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_OPENWEATHERKEY}&units=metric`
    console.log(API_URL)
    const response = await axios.get(
        API_URL
    );
    return response.data;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: { data: {}, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
