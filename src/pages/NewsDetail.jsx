import { useDynamicTitle, useTopPage } from "../hooks";
import { FaRegClock, FaUser } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import BodyLayout from "../layouts/BodyLayout";
import { useLoaderData } from "react-router-dom";
import { formatPublicationDateOfNews } from "../utils/format";
import _ from "lodash";

const NewsDetailPage = () => {
  const news = useLoaderData();

  const { t } = useTranslation();

  useDynamicTitle(t(news?.title || "BreadcrumbsAndTitle.all_dishes"));
  useTopPage();

  return (
    <BodyLayout>
      {!_.isEmpty(news) ? (
        <div className="mx-auto p-6 pt-10 !text-white">
          <h1 className="mb-4 text-3xl font-bold">{news?.title}</h1>

          {/* Post Info */}
          <div className="mb-6 flex flex-col text-sm text-gray-600 md:flex-row md:space-x-4">
            <div className="mb-2 flex items-center !text-white md:mb-0">
              <FaRegClock className="mr-2 h-4 w-4 text-tertiary" />
              {formatPublicationDateOfNews(news?.publishedAt)}
            </div>
            <div className="flex items-center !text-white">
              <FaUser className="mr-2 h-4 w-4 text-tertiary" />
              {news?.authorName}
            </div>
          </div>

          {/* Sections */}
          <div
            className="rte"
            dangerouslySetInnerHTML={{ __html: news?.content }}
          ></div>
        </div>
      ) : (
        <div className="py-9">
          <div className="rounded-md bg-[#fff3cd] px-4 py-3 text-sm font-medium text-yellow-600">
            {t("NewsPage.notExist")}
          </div>
        </div>
      )}
    </BodyLayout>
  );
};

export default NewsDetailPage;
