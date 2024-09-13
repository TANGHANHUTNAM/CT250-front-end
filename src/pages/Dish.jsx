import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";
import DishListGrid from "../components/dish/DishListGrid";
import { useState } from "react";
import DishLayout from "../layouts/DishLayout";

const DishPage = () => {
  const { t } = useTranslation();

  useDynamicTitle(t("BreadcrumbsAndTitle.all_dishes"));
  useTopPage();

  const [sortBy, setSortBy] = useState({});
  const [filterBy, setFilterBy] = useState({});
  const [selectedCategory, setSelectedCategory] = useState({});

  console.log(sortBy, filterBy, selectedCategory);

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
      <DishListGrid />
    </DishLayout>
  );
};

export default DishPage;
