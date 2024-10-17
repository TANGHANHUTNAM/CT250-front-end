import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { formatCurrency } from "../../utils/format";
import { useEffect, useState } from "react";
import { getDishesWithFilter } from "../../services/dishService";
import StatusCodes from "../../utils/StatusCodes";

const RecommendedDishes = ({}) => {
  const { t } = useTranslation();

  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {
      const res = await getDishesWithFilter({
        page: 1,
        limit: 6,
        view: "best-dish",
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
  }, []);

  return (
    dishes &&
    dishes.length > 0 && (
      <div className="w-full rounded-sm bg-bgTertiary sm:w-48 md:w-52 lg:w-56">
        <div className="divide-y divide-solid divide-white/20">
          <p className="p-4 text-base font-semibold">
            {t("DishDetailPage.introduce")}
          </p>
          {dishes.map((item, index) => {
            return (
              <div
                key={`dish-detail-${index}-${item?._id}`}
                className="flex gap-4 p-4 sm:flex-col sm:gap-2"
              >
                <Link to={`/dish-detail/${item?._id}`}>
                  <img
                    src={item?.image}
                    loading="lazy"
                    className="w-20 rounded-sm object-contain sm:w-fit"
                  />
                </Link>
                <div className="grow space-y-1 overflow-hidden text-sm">
                  <Link
                    to={`/dish-detail/${item?._id}`}
                    className="truncate font-semibold hover:text-yellow-600"
                  >
                    {item?.name}
                  </Link>
                  <p className="font-medium text-tertiary">
                    {formatCurrency(item?.discountedPrice)}
                  </p>
                </div>
              </div>
            );
          })}
          <div className="p-4 text-center">
            <Link
              to="/best-dish"
              className="text-sm font-medium hover:text-tertiary"
            >
              {t("DishDetailPage.seeAll")}
            </Link>
          </div>
        </div>
      </div>
    )
  );
};

export default RecommendedDishes;
