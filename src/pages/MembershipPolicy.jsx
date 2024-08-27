import { useDynamicTitle } from "../hooks";
import { useTranslation } from "react-i18next";

const MembershipPolicyPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.membership_policy"));

  return (
    <div className="bg-bgPrimary">
      <div className="max-w-screen-xl mx-auto w-full text-primary px-3 flex flex-col gap-5 font-medium py-10 ">
        <p className="text-3xl font-semibold">{t("MembershipPolicy.title")}</p>
        <p>{t("MembershipPolicy.content_1")}</p>
        <p>{t("MembershipPolicy.content_2")}</p>
        <p>{t("MembershipPolicy.content_3")}</p>
        <p>{t("MembershipPolicy.content_4")}</p>
        <p>{t("MembershipPolicy.content_5")}</p>
        <p>{t("MembershipPolicy.content_6")}</p>
        <p>{t("MembershipPolicy.content_7")}</p>
        <p>{t("MembershipPolicy.content_8")}</p>
      </div>
    </div>
  );
};

export default MembershipPolicyPage;
