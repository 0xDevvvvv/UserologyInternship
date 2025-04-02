"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../redux/slices/weatherSlice";
import WeatherWidget from "./weather";

const Weather = () => {

  const cities = ["New York","Tokyo","Denver"]
  const [weatherDetails,setWeatherDetails] = useState({})
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(fetchWeather(cities));
  }, [dispatch]);


  return (
    <div>
      Weather Updates
    {cities.map((city) => (
      <div key={city}>
        {city}
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data[city]?.main && <p>Temperature: {data[city].main.temp}°C</p>}
        <WeatherWidget data={data[city]} city={city} error={error} />
      </div>
  ))}
  </div>
  );
};

export default Weather;
