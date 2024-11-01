// src/components/EconomicNews.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./EconomicNews.css";

const EconomicNews = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
  
      const fetchNews = async () => {
        try {
          const response = await axios.get(
            `https://newsapi.org/v2/everything?q=economy&apiKey=32546ef66d1e4e5ea88f1774de963ed8`
          );
          setNews(response.data.articles.slice(0, 5));        } catch (error) {
          setError("Error fetching news");
        }
      };
      

    fetchNews();
  }, []);

  return (
    <div className="news-container " id="news">
      <h2>Top Economic News</h2>
      
      {/*
      {error ? (
        <p>{error}</p>
      ) : (
        news.map((item, index) => (
          <div key={index} className="news-item">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <h3>{item.title}</h3>
            </a>
            <p>{item.summary}</p>
          </div>
        ))
      )}
        */}
    </div>
  );
};

export default EconomicNews;
