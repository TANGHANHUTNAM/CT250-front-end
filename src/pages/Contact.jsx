import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";
import ContactForm from "../components/contact/ContactForm";
import Map from "../components/contact/Map";
import { useEffect } from "react";
const ContactPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.contact"));
  useTopPage();
  return (
    <div className="Contact-page bg-bgPrimary">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-6 py-10">
        <ContactForm />
        <Map />
      </div>
    </div>
  );
};

export default ContactPage;
