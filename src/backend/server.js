import express from "express";
import axios from "axios";
import cheerio from "cheerio";

app.get("/api/economic-news", async (req, res) => {
  try {
    const { data } = await axios.get("https://economictimes.indiatimes.com/news/economy");
    const $ = cheerio.load(data);
    const newsData = [];

    $(".eachStory").each((index, element) => {
      const title = $(element).find("h3 a").text().trim(); // Added trim() to clean up whitespace
      const link = "https://economictimes.indiatimes.com" + $(element).find("h3 a").attr("href");
      const summary = $(element).find(".summary").text().trim(); // Added trim() to clean up whitespace

      // Check if title and link are valid before pushing to newsData
      if (title && link) {
        newsData.push({ title, link, summary });
      }
    });

    // Limit the newsData to the top 5 items
    const topNewsData = newsData.slice(0, 5); 

    console.log("Top News Data: ", topNewsData); // Debugging line to see the sliced data

    res.json(topNewsData); // Send only top 5 items
  } catch (error) {
    console.error("Error fetching news:", error); // Logging the error for debugging
    res.status(500).json({ message: "Error fetching news" });
  }
});
