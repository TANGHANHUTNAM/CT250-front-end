import Content from "../components/introduce/Content";
import Gallery from "../components/introduce/Gallery";
import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";
import BodyLayout from "../layouts/BodyLayout";

const IntroducePage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.introduction"));
  useTopPage();
  return (
    <BodyLayout>
      <div className="introduce-page flex w-full flex-col gap-4 py-10">
        <Content />
        <Gallery />
      </div>
    </BodyLayout>
  );
};

export default IntroducePage;
