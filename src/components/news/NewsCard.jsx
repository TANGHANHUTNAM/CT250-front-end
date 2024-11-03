import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { convert } from "html-to-text";

const NewsCard = ({ news }) => {
  const { t } = useTranslation();

  return (
    <Link to={`/news/${news?.slug}`} className="p-4">
      <div className="overflow-hidden !bg-bgNew !text-white shadow-lg">
        {/* Image */}
        <div className="relative">
          <p className="block" title={news?.title}>
            <img
              className="h-48 w-full object-cover"
              src={news?.image}
              alt={news?.title}
            />
          </p>
          <div className="absolute left-2 top-2 rounded-md bg-yellow-400 px-2 py-1 text-sm text-white">
            {new Date(news?.publishedAt).toLocaleDateString("vi-VN", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="mb-2 text-sm !text-white">
            <span>
              {t("Home.News.author")} {news?.authorName}
            </span>
          </div>
          <h3 className="mb-2 line-clamp-2 text-lg font-semibold !text-white">
            <p className="hover:text-green-600">{news?.title}</p>
          </h3>
          <p className="mb-4 line-clamp-2 text-sm !text-white">
            {convert(news?.content, {
              wordwrap: false, // Không tự xuống dòng
              selectors: [
                { selector: "img", format: "skip" }, // Bỏ qua ảnh
                { selector: "a", options: { ignoreHref: true } }, // Bỏ qua liên kết
              ],
            })}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
