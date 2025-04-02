"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../redux/slices/weatherSlice";
import WeatherWidget from "./WeatherWidget";
import { useRouter } from "next/navigation";

const Weather = () => {
  const router = useRouter()
  const [cities,setCities] = useState(["New York","Tokyo","Denver"])
  const [search,setSearch] = useState("")
  const [weatherDetails,setWeatherDetails] = useState({})
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(fetchWeather(cities));
  }, [dispatch]);


  return (
    <div>
      <div className="mt-4 mx-2 text-center sm:text-2xl text-xl">
        Weather updates for
        
        <input className="mx-5 max-w-1/4 relative text-center text-xl border rounded-md" type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder={"New York,Tokyo,Denver"}></input> 
        <button onClick={()=>{dispatch(fetchWeather(search.split(',')));setCities(search.split(','));console.log(cities)}} className="hover:cursor-pointer">🔍</button>
      </div>
      
      <div className="flex items-center justify-center cols-3 gap-3 my-4">
      {cities.map((city) => (
        <div onClick={()=>router.push('/weather/'+city)} key={city} className="p-5 bg-amber-50 rounded-lg">
          <h3 className="text-center underline hover:cursor-pointer">{city}</h3>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {data[city]?.main && 
            ( 
              <p>Temperature: {data[city].main.temp}K 
              <WeatherWidget data={data[city]} city={city} error={error} /></p> 
            )
          }
          
        </div>
        ))}
      </div>
    </div>
  );
};

export default Weather;
