import { useEffect } from "react";
import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";
import BodyLayout from "../layouts/BodyLayout";

const BuyingGuidePage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.buying_guide"));
  useTopPage();
  return (
    <BodyLayout>
      <div className="flex w-full flex-col gap-5 py-10 font-medium text-primary">
        <p className="text-3xl font-semibold">{t("BuyingGuide.title")}</p>
        <p>{t("BuyingGuide.content_1")}</p>
        <p>{t("BuyingGuide.content_2")}</p>
        <p>{t("BuyingGuide.content_3")}</p>
        <p>{t("BuyingGuide.content_4")}</p>
        <p>{t("BuyingGuide.content_5")}</p>
      </div>
    </BodyLayout>
  );
};

export default BuyingGuidePage;
