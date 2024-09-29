import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";
import DishListGrid from "../components/dish/DishListGrid";
import { useEffect, useState } from "react";
import DishLayout from "../layouts/DishLayout";
import Pagination from "../components/pagination/Pagination";
import { getDishesWithPagination } from "../services/dishService";
import StatusCodes from "../utils/StatusCodes";
import { LIMIT_PAGE } from "../constants";

const DishPage = () => {
  const { t } = useTranslation();

  useDynamicTitle(t("BreadcrumbsAndTitle.all_dishes"));
  useTopPage();

  const [sortBy, setSortBy] = useState({});
  const [filterBy, setFilterBy] = useState({});
  const [selectedCategory, setSelectedCategory] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [dishes, setDishes] = useState([]);

  console.log(sortBy, filterBy, selectedCategory, currentPage);

  useEffect(() => {
    const fetchDishes = async () => {
      const res = await getDishesWithPagination(currentPage, LIMIT_PAGE);

      if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
        setDishes(res.DT);
      }
    };

    fetchDishes();
  }, []);

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
      {dishes.data && dishes.data.length > 0 ? (
        <div className="space-y-12">
          <DishListGrid dishes={dishes?.data} />
          <Pagination
            totalPages={dishes?.totalPages}
            currentPage={currentPage}
            onChangePage={handleChangePage}
          />
        </div>
      ) : (
        <div className="p-2">
          <div className="rounded-md bg-[#fff3cd] px-4 py-3 text-sm font-medium text-yellow-600">
            {t("DishPage.noData")}
          </div>
        </div>
      )}
    </DishLayout>
  );
};

export default DishPage;
