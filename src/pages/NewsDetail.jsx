import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import NewsDetails from "../components/newsDetail/NewsDetail";
import BodyLayout from "../layouts/BodyLayout";

const NewsDetailPage = () => {
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
    <BodyLayout
      title={t("NewsPage.title")}
      sort={{ seletedOption: sortBy, setSelectedOption: setSortBy }}
      filter={{ selectedFilter: filterBy, setSelectedFilter: setFilterBy }}
      category={{
        selectedCategory: selectedCategory,
        setSelectedCategory: setSelectedCategory,
      }}
    >
      <NewsDetails />
    </BodyLayout>
  );
};

export default NewsDetailPage;
