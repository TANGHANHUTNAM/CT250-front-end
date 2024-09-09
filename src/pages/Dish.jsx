import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";
import BodyLayout from "../layouts/BodyLayout";
import MenuSideBar from "../components/menu/MenuSideBar";

const DishPage = () => {
  const { t } = useTranslation();

  useDynamicTitle(t("BreadcrumbsAndTitle.all_dishes"));
  useTopPage();

  return (
    <BodyLayout>
      <div className="flex gap-8 py-8">
        <div className="w-1/4">
          <MenuSideBar />
        </div>
        <div className="grow">Dishes List</div>
      </div>
    </BodyLayout>
  );
};

export default DishPage;
