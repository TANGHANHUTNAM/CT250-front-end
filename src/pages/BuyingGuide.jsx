import { useDynamicTitle } from "../hooks";
import { useTranslation } from "react-i18next";

const BuyingGuidePage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.buying_guide"));

  return (
    <div className="bg-bgPrimary">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-5 px-3 py-10 font-medium text-primary">
        <p className="text-3xl font-semibold">{t("BuyingGuide.title")}</p>
        <p>{t("BuyingGuide.content_1")}</p>
        <p>{t("BuyingGuide.content_2")}</p>
        <p>{t("BuyingGuide.content_3")}</p>
        <p>{t("BuyingGuide.content_4")}</p>
        <p>{t("BuyingGuide.content_5")}</p>
      </div>
    </div>
  );
};

export default BuyingGuidePage;
