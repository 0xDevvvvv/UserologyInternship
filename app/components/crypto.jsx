"use client"; // Required for Redux hooks in Next.js

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCryptoData } from "../redux/slices/cryptoSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Crypto = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.crypto);
  const router = useRouter()

  useEffect(() => {
    dispatch(fetchCryptoData());
  }, [dispatch]);

  return (
    <div className="text-black">
      <h2 className="text-center text-2xl underline font-bold mb-4">Crypto Prices</h2>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {data && (
        <div className="grid sm:grid-cols-3 mx-3 grid-cols-1 gap-2 text-start">
          {Object.entries(data).map(([key, value]) => (
            <div key={key} className="text-sm p-4 bg-blue-50 space-y-1 shadow-2xs rounded-xl hover:cursor-pointer" onClick={()=>router.push('/crypto/'+key) }>
              <h3 className="font-semibold text-lg underline"><Image src={key+'.svg'} width={20} height={20}/>{key.toUpperCase()}</h3>
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
