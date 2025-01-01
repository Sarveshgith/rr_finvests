import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation,Autoplay } from 'swiper/modules';
import './News.css';


const News = () => {
  const [news, setNews] = useState([]);
  const fetchNews = async () => {
    try {
      const response = await fetch('https://rr-finvests-2.onrender.com'); // Fetch from backend https://rr-finvests-2.onrender.com
      const data = await response.json();
      console.log(data);
      const formattedNews = data
        .filter(articles => articles.title && articles.description && articles.url && articles.image)
        .map((articles) => ({
          title: articles.title,
          description: articles.description,
          link: articles.url,
          image: articles.image,
        }));
      setNews(formattedNews);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleButtonClick = () => {
    window.location.href = 'https://economictimes.indiatimes.com/';
  };

  return (
    <main className="news" id="news">
      <div className="mt-5 mb-5">
        <h1 className="headin2 main__heading">TOP ECONOMIC NEWS</h1>
        <button className="explorebutton3 btn mt-3" onClick={handleButtonClick}>Know more →</button>
      </div>
      <div className="swiper">
        <Swiper
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}>
          {news.length > 0 ? news.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="news-slide card">
                <img src={item.image} alt={item.title} />
                <p className='card-content news-content1 text-center'>{item.description}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              </div>
            </SwiperSlide>
          )) : (
            <div className="news-slide card">
              <p className='card-content news-content1 text-center'>Error occured while fetching news. Please retry after sometime</p>
            </div>
          )}
        </Swiper>
      </div>
    </main>
  );
};

export default News;
