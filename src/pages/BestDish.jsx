import { useState } from "react";
import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";
import DishLayout from "../layouts/DishLayout";
import DishListGrid from "../components/dish/DishListGrid";

const BestDish = () => {
  const { t } = useTranslation();

  useDynamicTitle(t("BreadcrumbsAndTitle.best_dishes"));
  useTopPage();

  const [sortBy, setSortBy] = useState({});
  const [filterBy, setFilterBy] = useState({});
  const [selectedCategory, setSelectedCategory] = useState({});

  console.log(sortBy, filterBy, selectedCategory);

  return (
    <DishLayout
      title={t("BestDishPage.title")}
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

export default BestDish;
