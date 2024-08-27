import { useDynamicTitle } from "../hooks";
import { useTranslation } from "react-i18next";

const InformationSecurityPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.information_security"));

  return (
    <div className="bg-bgPrimary">
      <div className="max-w-screen-xl mx-auto w-full text-primary px-3 flex flex-col gap-5 font-medium py-10 ">
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
    </div>
  );
};

export default InformationSecurityPage;
