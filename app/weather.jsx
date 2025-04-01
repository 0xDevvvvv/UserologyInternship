"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "./redux/slices/weatherSlice";

const Weather = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(fetchWeather("New York"));
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data?.main && <p>Temperature: {data.main.temp}°C</p>}
    </div>
  );
};

export default Weather;
