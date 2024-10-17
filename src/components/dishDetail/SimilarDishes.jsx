import { useTranslation } from "react-i18next";
import DishCard from "../dish/DishCard";
import { useEffect, useState } from "react";
import { getDishesWithFilter } from "../../services/dishService";
import StatusCodes from "../../utils/StatusCodes";
import _ from "lodash";

const SimilarDishes = ({ category = {} }) => {
  const { t } = useTranslation();

  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    if (!_.isEmpty(category)) {
      const fetchDishes = async () => {
        const res = await getDishesWithFilter({
          category: category?._id,
          page: 1,
          limit: 10,
        });

        if (
          res &&
          res.EC === StatusCodes.SUCCESS_DAFAULT &&
          res.DT &&
          res.DT.data
        ) {
          setDishes(res.DT.data);
        }

        if (res && res.EC === StatusCodes.ERROR_DEFAULT) {
          setDishes([]);
        }
      };

      fetchDishes();
    }
  }, []);

  return (
    dishes &&
    dishes.length > 0 && (
      <div className="space-y-6 rounded-sm bg-bgTertiary py-6">
        <p className="border-b border-solid border-white/20 px-4 pb-4 text-base font-semibold lg:px-6 lg:text-lg">
          {t("DishDetailPage.similarDish")}
        </p>
        <div className="grid grid-cols-2 pl-2 pr-3 sr-530:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {dishes.map((dish) => {
            return (
              <DishCard key={`dish-detail-similar-${dish?._id}`} dish={dish} />
            );
          })}
        </div>
      </div>
    )
  );
};

export default SimilarDishes;
