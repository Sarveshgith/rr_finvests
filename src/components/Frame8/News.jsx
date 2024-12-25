import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation,Autoplay } from 'swiper/modules';
import './News.css';

const staticNewsContent = [
  {
    title: "Stocks to Watch",
    description:
      "Stocks to watch on December 3: ITC, Pricol, TVS Motor, Swiggy, Torrent Power, Nazara Tech, and more.",
    link: "https://example.com/stocks",
    image: "newsimage1.jpg", // Replace with an actual image URL or path
  },
  {
    title: "Elon Musk's Pay Package",
    description:
      "Elon Musk’s $56 billion Tesla pay package struck down again, Delaware Judge says board ‘improperly influenced…’",
    link: "https://example.com/elon",
    image: "newsimage2.jpg", // Replace with an actual image URL or path
  },
  {
    title: "India's Growth Dip",
    description:
      "India's growth may dip below 7% for the first time in four years, economists say.",
    link: "https://example.com/india-growth",
    image: "newsimage3.png", // Replace with an actual image URL or path
  },
];

const News = () => {
  const [news, setNews] = useState([]);
  const fetchNews = async () => {
    try {
      const response = await fetch('http://localhost:5000/'); // Fetch from backend
      const data = await response.json();
      const formattedNews = data
        .filter(articles => articles.title && articles.description && articles.url && articles.urlToImage) // Filter out articles with null parameters
        .map((articles) => ({
          title: articles.title,
          description: articles.description,
          link: articles.url,
          image: articles.urlToImage,
        }));
      setNews(formattedNews);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <main className="news" id="news">
     <div className="mt-5 mb-5">
 			 <h1 className="headin2 main__heading">TOP ECONOMIC NEWS</h1>
			  <button className="explorebutton btn mt-3">Know more →</button>
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
          {news.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="news-slide card">
                <img src={item.image} alt={item.title} />
                <p className='card-content news-content1 text-center'>{item.description}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
};

export default News;
