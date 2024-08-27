import { Link } from "react-router-dom";
import { useDynamicTitle } from "../hooks";
import { useTranslation } from "react-i18next";
const NotFoundPage = () => {
  useDynamicTitle("404 Không tìm thấy trang");
  const { t } = useTranslation();
  return (
    <section className="bg-bgPrimary">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary dark:text-primary-500">
            {t("NotFound.title")}
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-white md:text-4xl dark:text-white">
            {t("NotFound.content_1")}
          </p>
          <p className="mb-4 text-lg font-light text-gray-300 dark:text-gray-400">
            {t("NotFound.content_2")}
            <span className="font-bold"> {t("NotFound.content_3")}</span>.
          </p>
          <Link
            to="/"
            className="inline-flex text-white bg-[#152e29] hover:bg-bgTertiary font-bold rounded-lg text-2xl px-5 py-2.5 text-center my-4"
          >
            {t("NotFound.content_4")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
