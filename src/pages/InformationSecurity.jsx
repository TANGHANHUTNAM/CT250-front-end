import { useEffect } from "react";
import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";
import BodyLayout from "../layouts/BodyLayout";

const InformationSecurityPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.information_security"));
  useTopPage();
  return (
    <BodyLayout>
      <div className="flex w-full flex-col gap-5 py-10 font-medium text-primary">
        <p className="text-3xl font-semibold">
          {t("InformationSecurity.title")}
        </p>
        <p>{t("InformationSecurity.content_1")}</p>
        <p>{t("InformationSecurity.content_2")}</p>
        <p>{t("InformationSecurity.content_3")}</p>
        <p>{t("InformationSecurity.content_4")}</p>
        <p>{t("InformationSecurity.content_5")}</p>
        <p>{t("InformationSecurity.content_6")}</p>
        <p>{t("InformationSecurity.content_7")}</p>
        <p>{t("InformationSecurity.content_8")}</p>
        <p>{t("InformationSecurity.content_9")}</p>
        <p>{t("InformationSecurity.content_10")}</p>
        <p>{t("InformationSecurity.content_11")}</p>
        <p>{t("InformationSecurity.content_12")}</p>
        <p>{t("InformationSecurity.content_13")}</p>
        <p>{t("InformationSecurity.content_14")}</p>
        <p>{t("InformationSecurity.content_15")}</p>
        <p>{t("InformationSecurity.content_16")}</p>
        <p>{t("InformationSecurity.content_17")}</p>
        <p>{t("InformationSecurity.content_18")}</p>
        <p>{t("InformationSecurity.content_19")}</p>
      </div>
    </BodyLayout>
  );
};

export default InformationSecurityPage;
