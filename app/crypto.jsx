"use client"; // Required for Redux hooks in Next.js

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCryptoData } from "./redux/slices/cryptoSlice";

const Crypto = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.crypto);

  useEffect(() => {
    dispatch(fetchCryptoData());
  }, [dispatch]);

  return (
    <div className="p-4 border rounded-lg shadow-lg bg-gray-900 text-white">
      <h2 className="text-xl font-bold mb-4">Crypto Prices</h2>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {data && (
        <div>
          {Object.entries(data).map(([key, value]) => (
            <div key={key} className="mb-2">
              <h3 className="text-lg font-semibold">{key.toUpperCase()}</h3>
              <p>Price: ${value.usd.toFixed(2)}</p>
              <p>24h Change: {value.usd_24h_change.toFixed(2)}%</p>
              <p>Market Cap: ${value.usd_market_cap.toFixed(2)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Crypto;
