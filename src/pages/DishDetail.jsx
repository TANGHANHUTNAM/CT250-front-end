import { useDynamicTitle, useTopPage } from "../hooks";
import RecommendedDishes from "../components/dishDetail/RecommendedDishes";
import DishInformation from "../components/dishDetail/DishInformation";
import DishDescription from "../components/dishDetail/DishDescription";
import SimilarDishes from "../components/dishDetail/SimilarDishes";
import DishReview from "../components/dishDetail/DishReview";
import { useLoaderData } from "react-router-dom";
import _ from "lodash";

const DishDetailPage = () => {
  const dish = useLoaderData();

  useDynamicTitle(dish?.name || "Tonatra Restaurant");
  useTopPage();

  return (
    <div className="w-full bg-bgPrimary">
      <div className="mx-auto max-w-screen-xl sm:px-3">
        {_.isEmpty(dish) ? (
          <div className="py-6">
            <div className="rounded-md bg-[#fff3cd] px-4 py-3 text-sm font-medium text-yellow-600">
              Không tìm thấy món cần tìm.
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3 py-3 text-primary sm:flex-row">
            <div className="grow space-y-3">
              <DishInformation dish={dish} />
              <DishDescription dish={dish} />
              <DishReview />
              <SimilarDishes />
            </div>
            <div className="shrink-0">
              <RecommendedDishes />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DishDetailPage;
