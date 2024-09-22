import { useDynamicTitle, useTopPage } from "../hooks";
import RecommendedDishes from "../components/dishDetail/RecommendedDishes";
import DishInformation from "../components/dishDetail/DishInformation";
import DishDescription from "../components/dishDetail/DishDescription";
import SimilarDishes from "../components/dishDetail/SimilarDishes";
import DishReview from "../components/dishDetail/DishReview";

const DishDetailPage = () => {
  useDynamicTitle("Chi tiết món ăn"); // Tiêu đề động: sẽ được thay đổi theo tên món ăn
  // const { t } = useTranslation();
  // useDynamicTitle(t("BreadcrumbsAndTitle.contact"));
  useTopPage();

  return (
    <div className="w-full bg-bgPrimary">
      <div className="mx-auto max-w-screen-xl sm:px-3">
        <div className="flex flex-col gap-3 py-3 text-primary sm:flex-row">
          <div className="grow space-y-3">
            <DishInformation />
            <DishDescription />
            <DishReview />
            <SimilarDishes />
          </div>
          <div className="shrink-0">
            <RecommendedDishes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishDetailPage;
