import aboutImage from "../../assets/about.webp";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const About = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-bgTertiary py-14">
      <div className="mx-auto max-w-screen-xl px-3">
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="content flex flex-col gap-5 px-5 text-primary lg:w-1/2">
            <p className="title text-2xl font-semibold text-tertiary">
              {t("Home.About.title")}
            </p>
            <p className="name font-dancingscript text-5xl font-semibold">
              Tonatra Restaurant
            </p>
            <p className="des text-base font-medium">{t("Home.About.des")}</p>
            <span className="text-lg font-semibold text-tertiary duration-200 hover:text-yellow-500">
              <Link to={"/introduce"}>
                {t("Home.About.viewMore")}
                <span className="dash ml-2 inline-block w-10 border-b border-solid"></span>
              </Link>
            </span>
          </div>
          <div className="img flex justify-center overflow-hidden px-4 lg:w-1/2">
            <img
              className="duration-500 hover:scale-105"
              src={aboutImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
