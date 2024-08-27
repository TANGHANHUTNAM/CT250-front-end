import { useDynamicTitle } from "../hooks";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.contact"));

  return <>ContactPage</>;
};

export default ContactPage;
