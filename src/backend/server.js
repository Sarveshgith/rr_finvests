import express from "express";
import axios from "axios";

const app = express();

app.get("/api/economic-news", async (req, res) => {
  try {
    const { data } = await axios.get("https://economictimes.indiatimes.com/news/economy");
    const $ = cheerio.load(data);
    const newsData = [];

    $(".eachStory").each((index, element) => {
      const title = $(element).find("h3 a").text().trim();
      const link = "https://economictimes.indiatimes.com" + $(element).find("h3 a").attr("href");
      const summary = $(element).find(".summary").text().trim();
      const image = $(element).find("img").attr("data-src") || $(element).find("img").attr("src"); // Handle both `data-src` and `src` attributes

      if (title && link && image) {
        newsData.push({ title, link, summary, image });
      }
    });

    const topNewsData = newsData.slice(0, 5);

    console.log("Top News Data: ", topNewsData);

    res.json(topNewsData);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ message: "Error fetching news" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
