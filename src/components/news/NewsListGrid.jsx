import NewsCard from "./NewsCard";

const NewsListGrid = ({ news = [] }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
      {news &&
        news.length > 0 &&
        news.map((item, i) => {
          return <NewsCard key={`news-${i}-${item?._id}`} news={item} />;
        })}
    </div>
  );
};

export default NewsListGrid;
