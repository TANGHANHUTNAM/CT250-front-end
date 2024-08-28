import { useDynamicTitle } from "../hooks";

const DishDetailPage = () => {
  useDynamicTitle("Chi tiết món ăn"); // Tiêu đề động: sẽ được thay đổi theo tên món ăn
  // const { t } = useTranslation();
  // useDynamicTitle(t("BreadcrumbsAndTitle.contact"));

  return <>DishDetailPage</>;
};

export default DishDetailPage;
