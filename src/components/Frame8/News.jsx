import { useState, useEffect } from 'react';
import './News.css';
import './style.css';

import { db } from '../../../firebase';
import { collection, getDocs } from 'firebase/firestore';

const staticNewsContent = [
	{
		img: 'newsimage1.jpg',
		desc: 'Stocks to watch on December 3: ITC, Pricol, TVS Motor, Swiggy, Torrent Power, Nazara Tech and more',
	},
	{
		img: 'newsimage2.jpg',
		desc: 'Elon Musk’s $56 billion Tesla pay package struck down again, Delaware Judge says board ‘improperly influenced…’',
	},
	{
		img: 'newsimage3.png',
		desc: "India's growth may dip below 7% for the first time in four years, economists say",
	},
];

const News = () => {
	const [news, setNews] = useState([]);

	const getNews = async () => {
		try {
			const newsColl = collection(db, 'news');
			const newsSnapshot = await getDocs(newsColl);
			const newsList = newsSnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			if (newsList.length > 0) {
				setNews(newsList);
			} else {
				setNews(staticNewsContent);
			}
		} catch (error) {
			console.error('Error fetching news:', error);
			setNews(staticNewsContent);
		}
	};

	useEffect(() => {
		getNews();
	}, []);

	return (
		<main className='main flow news' id='news'>
			<h1 className='headin2 main__heading text-center mt-5 mb-5'>
				TOP ECONOMIC NEWS
			</h1>
			<div className='main__cards cards'>
				<div className='cards__inner'>
					{news.map((item) => (
						<div className='cards__card card' key={item.id || item.name}>
							<div className='news-img'>
								<img src={item.img} alt='News' className='news-img1' />
								<p className='news-content1 text-center'>{item.desc}</p>
							</div>
						</div>
					))}
				</div>
				<div className='overlay cards__inner'></div>
			</div>
		</main>
	);
};

export default News;
