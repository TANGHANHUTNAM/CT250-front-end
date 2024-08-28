import { useDynamicTitle } from "../hooks";
import { useTranslation } from "react-i18next";
import ContactForm from "../components/contact/contactForm";
import Map from "../components/contact/Map";
const ContactPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.contact"));

  return (
    <div className="Contact-page bg-bgPrimary">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col py-10">
        <ContactForm />
        <Map />
      </div>
    </div>
  );
};

export default ContactPage;
