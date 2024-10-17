import { GiKnifeFork } from "react-icons/gi";
import DishCard from "../dish/DishCard";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { getDishesWithFilter } from "../../services/dishService";
import StatusCodes from "../../utils/StatusCodes";

const DishOutstanding = () => {
  const { t } = useTranslation();

  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {
      const res = await getDishesWithFilter({
        page: 1,
        limit: 10,
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
    <div className="dish-outstanding bg-bgTertiary py-10">
      <div className="mx-auto max-w-screen-xl px-2 sm:px-4">
        {/* title */}
        <div className="title mb-7 flex items-center justify-center text-primary">
          <span className="hidden h-14 w-14 items-center justify-center rounded-full border-2 border-solid border-tertiary text-3xl text-tertiary sm:flex">
            <GiKnifeFork />
          </span>
          <p className="px-5 text-center font-dancingscript text-3xl font-semibold md:text-5xl">
            {t("Home.DishOutstanding.title")}
          </p>
          <span className="hidden h-14 w-14 items-center justify-center rounded-full border-2 border-solid border-tertiary text-3xl text-tertiary sm:flex">
            <GiKnifeFork />
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {dishes &&
            dishes.length > 0 &&
            dishes.map((dish) => {
              return (
                <DishCard key={`home-best-dish-${dish?._id}`} dish={dish} />
              );
            })}
        </div>
        <div className="view-more mt-10 text-center text-tertiary">
          <Link
            to="/best-dish"
            className="cursor-pointer text-lg font-semibold duration-200 hover:text-yellow-500"
          >
            {t("Home.DishOutstanding.viewmore")}...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DishOutstanding;
