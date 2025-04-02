"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../redux/slices/weatherSlice";

const Weather = () => {

  const [city,setCity] = useState(["New York","Tokyo","Denver"])
  const [weatherDetails,setWeatherDetails] = useState({})
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(fetchWeather(city[0]));
    
  }, [dispatch]);


  return (
    <div>
      {city}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data?.main && <p>Temperature: {data.main.temp}°C</p>}
    </div>
  );
};

export default Weather;
