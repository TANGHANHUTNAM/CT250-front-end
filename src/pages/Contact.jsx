import { useDynamicTitle } from "../hooks";
import { useTranslation } from "react-i18next";
import ContactForm from "../components/contact/contactForm";
import Map from "../components/contact/map";
const ContactPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.contact"));

  return (
    <div className="Contact-page bg-bgPrimary">
      <div className="max-w-screen-xl mx-auto w-full flex flex-col py-10">
        <ContactForm />
        <Map />
      </div>
    </div>
  );
};

export default ContactPage;
