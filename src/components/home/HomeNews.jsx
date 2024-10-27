import { HiOutlineNewspaper } from "react-icons/hi2";
import data from "../../../public/NewsData.json";
import NewsCard from "../news/NewsCard";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HomeNews = () => {
  const { t } = useTranslation();
  const getRandomItems = (array, count) => {
    const shuffled = [...array].sort(() => 0.5 - Math.random()); // Trộn mảng
    return shuffled.slice(0, count); // Lấy 4 đối tượng ngẫu nhiên
  };
  const List = getRandomItems(data, 4);
  return (
    <div className="bg-bgTertiary pb-10 pt-14">
      <div className="mx-auto max-w-screen-xl text-primary">
        {/* title */}
        <div className="title mb-9 flex flex-row items-center justify-center">
          <span className="hidden h-14 w-14 items-center justify-center rounded-full border-2 border-solid border-tertiary text-3xl text-tertiary sm:flex">
            <HiOutlineNewspaper />
          </span>
          <p className="px-5 text-center font-dancingscript text-3xl font-semibold md:text-5xl">
            {t("Home.News.title")}
          </p>
          <span className="hidden h-14 w-14 items-center justify-center rounded-full border-2 border-solid border-tertiary text-3xl text-tertiary sm:flex">
            <HiOutlineNewspaper />
          </span>
        </div>
        {/* items */}
        <div className="flex flex-col flex-wrap px-4 sm:flex-row">
          {List.map((news, i) => {
            return (
              <div key={`news-${i}`} className="my-3 px-3 sm:w-1/2 lg:w-1/4">
                <NewsCard key={news.id} news={news} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="view-more mt-6 text-center">
        <Link
          to="/news"
          className="cursor-pointer text-lg font-semibold text-tertiary duration-200 hover:text-yellow-500"
        >
          {t("Home.News.viewmore")}...
        </Link>
      </div>
    </div>
  );
};

export default HomeNews;
