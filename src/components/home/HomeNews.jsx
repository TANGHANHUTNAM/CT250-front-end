import { HiOutlineNewspaper } from "react-icons/hi2";
import NewsCard from "../news/NewsCard";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getNewsWithFilter } from "../../services/newsService";
import StatusCodes from "../../utils/StatusCodes";

const HomeNews = () => {
  const { t } = useTranslation();

  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const res = await getNewsWithFilter({
        page: 1,
        limit: 4,
      });

      if (
        res &&
        res.EC === StatusCodes.SUCCESS_DAFAULT &&
        res.DT &&
        res.DT.data
      ) {
        setNews(res.DT.data);
      }
    };

    fetchNews();
  }, []);

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
          {news.length > 0 &&
            news.map((item, i) => {
              return (
                <div
                  key={`news-${i}-${item?._id}`}
                  className="my-3 px-3 sm:w-1/2 lg:w-1/4"
                >
                  <NewsCard news={item} />
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
