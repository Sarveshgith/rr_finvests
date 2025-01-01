import NewsAPI from "newsapi";
import express from "express";
import cors from "cors";
const app = express();
import axios from "axios";
app.use(cors());


app.get('/', async (_, res) => {
  try {
    console.log("inside");
    const url = `https://gnews.io/api/v4/search?q=investments&lang=en&max=10&apikey=${process.env.NEWS_API_KEY}`;
    const response = await axios.get(url);
    console.log('GNews API response:', response.data);

    if (response.data && response.data.articles) {
      res.json(response.data.articles);
    } else {
      console.error('No articles found in the response');
      res.status(500).json({ error: 'No articles found' });
    }
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});


x
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});