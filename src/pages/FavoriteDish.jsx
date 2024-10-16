import { useEffect, useState } from "react";
import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";
import BodyLayout from "../layouts/BodyLayout";
import { getMultipleDishes } from "../services/dishService";
import { useSelector } from "react-redux";
import _ from "lodash";
import StatusCodes from "../utils/StatusCodes";
import DishCard from "../components/dish/DishCard";

const FavoriteDishPage = () => {
  const { t } = useTranslation();

  useDynamicTitle(t("BreadcrumbsAndTitle.favorite_dishes"));
  useTopPage();

  const [dishes, setDishes] = useState([]);
  const [dishesInformation, setDishesInformation] = useState({});

  const favouriteDishes = useSelector((state) => state.favouriteDish);

  useEffect(() => {
    if (favouriteDishes && !_.isEmpty(favouriteDishes)) {
      const getDishesForFavourite = async () => {
        const res = await getMultipleDishes(Object.values(favouriteDishes));

        if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
          const data = {};
          res?.DT?.forEach((dish) => (data[dish?._id] = dish));
          setDishesInformation(data);
        }
      };

      getDishesForFavourite();
    } else {
      setDishesInformation([]);
    }
  }, []);

  useEffect(() => {
    if (
      favouriteDishes &&
      !_.isEmpty(favouriteDishes) &&
      !_.isEmpty(dishesInformation)
    ) {
      const list = Object.values(favouriteDishes).map((f) => {
        return dishesInformation[f];
      });
      setDishes(list);
    } else {
      setDishes([]);
    }
  }, [favouriteDishes, dishesInformation]);

  return (
    <BodyLayout>
      <div className="py-8">
        <div className="header-page mb-4 flex items-center justify-between border-b-2 border-solid border-tertiary pb-4">
          <p className="title font-bold uppercase text-tertiary">
            {t("FavoriteDishPage.title")}
          </p>
        </div>
        {dishes && dishes.length > 0 ? (
          <div className="-mx-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {dishes &&
              dishes.length > 0 &&
              dishes.map((dish) => {
                return <DishCard key={dish._id} dish={dish} />;
              })}
          </div>
        ) : (
          <div className="py-2">
            <div className="rounded bg-[#fff3cd] px-4 py-3 text-sm font-medium text-yellow-600">
              {t("FavoriteDishPage.noData")}
            </div>
          </div>
        )}
      </div>
    </BodyLayout>
  );
};

export default FavoriteDishPage;
