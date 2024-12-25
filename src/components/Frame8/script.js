import NewsAPI from 'newsapi';
const newsapi = new NewsAPI('32546ef66d1e4e5ea88f1774de963ed8');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.topHeadlines({
  q: 'economy',
  category: 'business',
  language: 'en',
})  .then((response) => {
  console.log(response);
})
.catch((error) => {
  console.error('Error fetching news:', error);
});
