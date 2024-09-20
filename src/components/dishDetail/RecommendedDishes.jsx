import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { formatCurrency } from "../../utils/format";

const data = [1, 2, 3, 4, 5, 6];

const RecommendedDishes = ({}) => {
  const { t } = useTranslation();

  return (
    data &&
    data.length > 0 && (
      <div className="w-full rounded-sm bg-bgTertiary sm:w-48 md:w-52 lg:w-56">
        <div className="divide-y divide-solid divide-white/20">
          <p className="p-4 text-base font-semibold">
            {t("DishDetailPage.introduce")}
          </p>
          {data.map((item, index) => {
            return (
              <div className="flex gap-4 p-4 sm:flex-col sm:gap-2">
                <Link to={`/dish-detail/${index}`}>
                  <img
                    src="https://bizweb.dktcdn.net/thumb/medium/100/469/097/products/1c8da310231574e189b9012e3125a3.jpg?v=1667881665957"
                    loading="lazy"
                    className="w-20 rounded-sm object-contain sm:w-fit"
                  />
                </Link>
                <div className="grow space-y-1 overflow-hidden text-sm">
                  <Link
                    to={`/dish-detail/${index}`}
                    className="truncate font-semibold hover:text-yellow-600"
                  >
                    Dương chi cam lộ
                  </Link>
                  <p className="font-medium text-tertiary">
                    {formatCurrency(55000)}
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
