"use client"; // Required for Redux hooks in Next.js

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "./redux/slices/newsSlice";

const News = () => {
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <div className="p-4 border rounded-lg shadow-lg bg-gray-900 text-white">
      <h2 className="text-xl font-bold mb-4">Crypto News</h2>

      {loading && <p>Loading news...</p>}
      {error && <p>Error: {error}</p>}

      {articles.length > 0 ? (
        <ul>
          {articles.slice(0, 5).map((article, index) => (
            <li key={index} className="mb-4 border-b border-gray-700 pb-2">
              <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                <h3 className="text-lg font-semibold">{article.title}</h3>
              </a>
              <p className="text-sm text-gray-400">{article.source_id} - {new Date(article.pubDate).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No news available</p>
      )}
    </div>
  );
};

export default News;
