import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";
import NewsListGrid from "../components/news/NewsListGrid";
import { useState } from "react";
import Pagination from "../components/pagination/Pagination";
import NewsLayout from "../layouts/NewsLayout";

const NewsPage = () => {
  const { t } = useTranslation();

  useDynamicTitle(t("BreadcrumbsAndTitle.all_dishes"));
  useTopPage();

  const [sortBy, setSortBy] = useState({});
  const [filterBy, setFilterBy] = useState({});
  const [selectedCategory, setSelectedCategory] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  console.log(sortBy, filterBy, selectedCategory, currentPage);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <NewsLayout
      title={t("NewsPage.title")}
      sort={{ seletedOption: sortBy, setSelectedOption: setSortBy }}
      filter={{ selectedFilter: filterBy, setSelectedFilter: setFilterBy }}
      category={{
        selectedCategory: selectedCategory,
        setSelectedCategory: setSelectedCategory,
      }}
    >
      <div className="space-y-12">
        <NewsListGrid />
        <Pagination
          totalPages={50}
          currentPage={currentPage}
          onChangePage={handleChangePage}
        />
      </div>
    </NewsLayout>
  )
};

export default NewsPage;
