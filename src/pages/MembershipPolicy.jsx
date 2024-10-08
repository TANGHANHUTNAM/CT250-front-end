import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";
import BodyLayout from "../layouts/BodyLayout";

const MembershipPolicyPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.membership_policy"));
  useTopPage();
  return (
    <BodyLayout>
      <div className="flex w-full flex-col gap-5 py-10 font-medium text-primary">
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
    </BodyLayout>
  );
};

export default MembershipPolicyPage;
