import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";
import DishListGrid from "../components/dish/DishListGrid";
import { useState } from "react";
import DishLayout from "../layouts/DishLayout";
import Pagination from "../components/pagination/Pagination";

const DishPage = () => {
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
    <DishLayout
      title={t("DishPage.title")}
      sort={{ seletedOption: sortBy, setSelectedOption: setSortBy }}
      filter={{ selectedFilter: filterBy, setSelectedFilter: setFilterBy }}
      category={{
        selectedCategory: selectedCategory,
        setSelectedCategory: setSelectedCategory,
      }}
    >
      <div className="space-y-12">
        <DishListGrid />
        <Pagination
          totalPages={50}
          currentPage={currentPage}
          onChangePage={handleChangePage}
        />
      </div>
    </DishLayout>
  );
};

export default DishPage;
