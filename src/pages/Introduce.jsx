import Content from "../components/introduce/Content";
import Gallery from "../components/introduce/Gallery";
import { useDynamicTitle } from "../hooks";
import { useTranslation } from "react-i18next";

const IntroducePage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.introduction"));

  return (
    <div className="introduce-page bg-bgPrimary">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-6 px-3 py-10">
        <Content />
        <Gallery />
      </div>
    </div>
  );
};

export default IntroducePage;
