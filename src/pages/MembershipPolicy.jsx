import { useDynamicTitle } from "../hooks";
import { useTranslation } from "react-i18next";

const MembershipPolicyPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.membership_policy"));

  return (
    <div className="bg-bgPrimary">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-5 px-3 py-10 font-medium text-primary">
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
