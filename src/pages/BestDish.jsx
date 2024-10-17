import { useEffect, useState } from "react";
import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";
import DishLayout from "../layouts/DishLayout";
import DishListGrid from "../components/dish/DishListGrid";
import Pagination from "../components/pagination/Pagination";
import { Spin } from "antd";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { getDishesWithFilter } from "../services/dishService";
import { LIMIT_PAGE } from "../constants";
import StatusCodes from "../utils/StatusCodes";
import { toast } from "react-toastify";

const BestDish = () => {
  const category = useLoaderData();

  const { t } = useTranslation();

  useDynamicTitle(category?.name || t("BreadcrumbsAndTitle.best_dishes"));
  useTopPage();

  const [currentPage, setCurrentPage] = useState(1);
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const [queryParams] = useSearchParams();
  const { categoryId } = useParams();

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
    const fetchDishes = async () => {
      const query = Object.fromEntries([...queryParams]);

      setLoading(true);
      const res = await getDishesWithFilter({
        category: categoryId,
        ...query,
        page: query.page ? query.page : 1,
        limit: LIMIT_PAGE,
        view: "best-dish",
      });

      if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
        setDishes(res.DT);
      }

      if (res && res.EC === StatusCodes.ERROR_DEFAULT) {
        setDishes([]);
        toast.error(res.EM);
      }

      setTimeout(() => {
        setLoading(false);
      }, 300);
    };

    fetchDishes();
  }, [queryParams, categoryId]);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <DishLayout
      title={category?.name || t("BestDishPage.title")}
      path="/best-dish"
    >
      {loading ? (
        <div className="flex items-center justify-center py-8 sr-950:py-20">
          <Spin />
        </div>
      ) : (
        <>
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
        </>
      )}
    </DishLayout>
  );
};

export default BestDish;
