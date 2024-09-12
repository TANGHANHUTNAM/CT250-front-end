import { GrLanguage } from "react-icons/gr";
import vietnam from "../../assets/vietname.png";
import english from "../../assets/english.png";
import { useTranslation } from "react-i18next";
const Language = () => {
  const { t, i18n } = useTranslation();
  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="fixed right-0 top-1/4 z-50">
      <div className="group relative flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-s-sm bg-tertiary">
        <span>
          <GrLanguage className="text-2xl text-primary" />
        </span>
        <div className="invisible absolute right-0 top-6 block scale-90 pt-4 opacity-0 transition-all duration-300 will-change-transform group-hover:visible group-hover:scale-100 group-hover:opacity-100">
          <div className="flex w-28 cursor-pointer flex-col gap-2 bg-primary p-2">
            {/* Vietnamese */}

            <div
              onClick={() => {
                handleChangeLanguage("vi");
              }}
              className={`flex gap-1 text-xs ${
                i18n.language == "vi" ? "font-medium text-red-600" : ""
              } `}
            >
              <img src={vietnam} className="h-3 w-4" alt="" />
              {i18n.language == "vi" ? (
                <span>Việt Nam</span>
              ) : (
                <span>Vietnamese</span>
              )}
            </div>
            {/* English */}
            <div
              onClick={() => {
                handleChangeLanguage("en");
              }}
              className={`flex gap-1 text-xs ${
                i18n.language == "en" ? "font-medium text-blue-600" : ""
              } `}
            >
              <img src={english} className="h-4 w-4" alt="" />
              <span>English</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Language;
