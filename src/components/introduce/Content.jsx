import { useTranslation } from "react-i18next";
const Content = () => {
  const { t } = useTranslation();
  return (
    <div className="content-container text-primary">
      <div className="content-title relative text-center">
        <p className="py-4 text-4xl font-medium uppercase">
          {t("Introduce.title")}
          <span className="absolute bottom-0 left-0 right-0 mx-auto box-border w-[100px] border-b-[6px] border-double"></span>
        </p>
      </div>
      <div className="content-main mt-3 text-sm font-medium">
        <p>{t("Introduce.content")}</p>
      </div>
    </div>
  );
};

export default Content;
