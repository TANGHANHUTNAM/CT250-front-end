import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";
import BodyLayout from "../layouts/BodyLayout";
import MenuSideBar from "../components/menu/MenuSideBar";
import DishListGrid from "../components/dish/DishListGrid";

const DishPage = () => {
  const { t } = useTranslation();

  useDynamicTitle(t("BreadcrumbsAndTitle.all_dishes"));
  useTopPage();

  return (
    <BodyLayout>
      <div className="flex gap-5 py-8">
        <div className="w-1/4">
          <MenuSideBar />
        </div>
        <div className="w-full">
          {/* header */}
          <div className="px-2">
            <div className="header-page mb-4 flex items-center justify-between border-b-2 border-solid border-tertiary pb-4 pt-2">
              <p className="title font-bold uppercase text-tertiary">
                Món ngon mỗi ngày
              </p>
              <div className="w-fit rounded-md bg-tertiary p-2 text-sm font-semibold text-primary">
                <span className="mr-2">Sắp xếp:</span>
                <span>Mặc định</span>
              </div>
            </div>
          </div>
          {/* grid items */}
          <DishListGrid />
        </div>
      </div>
    </BodyLayout>
  );
};

export default DishPage;
