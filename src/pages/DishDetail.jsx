import { useEffect } from "react";
import { useDynamicTitle, useTopPage } from "../hooks";

const DishDetailPage = () => {
  useDynamicTitle("Chi tiết món ăn"); // Tiêu đề động: sẽ được thay đổi theo tên món ăn
  // const { t } = useTranslation();
  // useDynamicTitle(t("BreadcrumbsAndTitle.contact"));
  useTopPage();
  return <>DishDetailPage</>;
};

export default DishDetailPage;
