import { useDynamicTitle } from "../hooks";
import { useTranslation } from "react-i18next";

const DeliciousDish = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.delicious_dishes"));

  return <>DeliciousDish</>;
};

export default DeliciousDish;
