import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NewsCard = ({ news }) => {
    const { t } = useTranslation();


    return (
        <Link to={`/news${news.url}`} className="p-4">
            <div className="bg-white shadow-lg overflow-hidden !bg-bgNew !text-white">
                {/* Image */}
                <div className="relative">
                    <p className="block" title="Mách bạn công thức làm canh cá nấu mẻ thơm ngon đậm vị">
                        <img className="w-full h-48 object-cover" src={news.image_url} alt={news.title} />
                    </p>
                    <div className="absolute top-2 left-2 bg-yellow-400 text-white px-2 py-1 rounded-md text-sm">
                        {news.date}
                    </div>
                </div>

                {/* Content */}
                <div className="p-4">
                    <div className="text-sm text-gray-500 mb-2 !text-white">
                        <span>{t("Home.News.author")} {news.author}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2 !text-white">
                        <p title={news.title} className="hover:text-green-600">
                            {news.title}
                        </p>
                    </h3>
                    <p className="text-gray-700 text-sm line-clamp-2 mb-4 !text-white">
                        {news.summary}
                    </p>
                    {/* <Link to={`/news${news.url}`} className="inline-flex items-center text-green-600 font-semibold hover:underline">
                        <div className="flex items-center">
                            <span className="mr-2 !text-white">Chi tiết</span>
                        </div>
                    </Link> */}
                </div>
            </div>
        </Link>
    )
}

export default NewsCard;

