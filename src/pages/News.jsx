import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";
import NewsListGrid from "../components/news/NewsListGrid";
import { useEffect, useState } from "react";
import Pagination from "../components/pagination/Pagination";
import NewsLayout from "../layouts/NewsLayout";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { getNewsWithFilter } from "../services/newsService";
import StatusCodes from "../utils/StatusCodes";
import { toast } from "react-toastify";
import { Spin } from "antd";

const LIMIT_PAGE = 12;

const NewsPage = () => {
  const { t } = useTranslation();

  useDynamicTitle(t("BreadcrumbsAndTitle.news"));
  useTopPage();

  const [news, setNews] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const location = useLocation();
  const [queryParams] = useSearchParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (currentPage > 1) {
      const queryParams = new URLSearchParams(location.search);
      queryParams.set("page", currentPage);
      queryParams.sort();

      const path = `${location.pathname}${queryParams.size > 0 ? `?${queryParams.toString()}` : ""}`;
      if (path !== `${location.pathname}${location.search}`) {
        navigate(path);
      }
    } else {
      const queryParams = new URLSearchParams(location.search);
      queryParams.delete("page");
      queryParams.sort();

      const path = `${location.pathname}${queryParams.size > 0 ? `?${queryParams.toString()}` : ""}`;
      if (path !== `${location.pathname}${location.search}`) {
        navigate(path);
      }
    }
  }, [currentPage]);

  useEffect(() => {
    const fetchNews = async () => {
      const query = Object.fromEntries([...queryParams]);

      setLoading(true);
      const res = await getNewsWithFilter({
        ...query,
        page: query.page ? query.page : 1,
        limit: LIMIT_PAGE,
      });

      if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
        setNews(res.DT);
      }

      if (res && res.EC === StatusCodes.ERROR_DEFAULT) {
        setNews([]);
        toast.error(res.EM);
      }

      setTimeout(() => {
        setLoading(false);
      }, 300);
    };

    fetchNews();
  }, [queryParams]);

  return (
    <NewsLayout title={t("NewsPage.title")}>
      {loading ? (
        <div className="flex items-center justify-center py-8 sr-950:py-20">
          <Spin />
        </div>
      ) : (
        <>
          {news.data && news.data.length > 0 ? (
            <div className="space-y-12">
              <NewsListGrid news={news.data} />
              <Pagination
                totalPages={news?.totalPages}
                currentPage={currentPage}
                onChangePage={handleChangePage}
              />
            </div>
          ) : (
            <div className="p-2">
              <div className="rounded-md bg-[#fff3cd] px-4 py-3 text-sm font-medium text-yellow-600">
                {t("NewsPage.noData")}
              </div>
            </div>
          )}
        </>
      )}
    </NewsLayout>
  );
};

export default NewsPage;
