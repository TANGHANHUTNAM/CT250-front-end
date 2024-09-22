import NewsCard from "./NewsCard";
import data from "../../../public/NewsData.json"
const NewsListGrid = () => {
    const List = data;
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {List.map((news) => {
                return <NewsCard key={news.id} news={news} />;
            })}
        </div>
    );
};

export default NewsListGrid;
