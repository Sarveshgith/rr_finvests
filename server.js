import NewsAPI from "newsapi";
import express from "express";
import cors from "cors";
const app = express();

const newsapi = new NewsAPI(process.env.NEWS_API_KEY); // Replace with your NewsAPI key

// Enable CORS for all routes
app.use(cors());

// Define a route to fetch news
app.get('/', async (_, res) => {
  try {
    const responses = await newsapi.v2.topHeadlines({
      category:'business',
      language: 'en',
    });
    console.log('NewsAPI response:', responses);

    if (responses && responses.articles) {
      res.json(responses.articles);
    } else {
      console.error('No sources found in the response');
      res.status(500).json({ error: 'No sources found' });
    }
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});