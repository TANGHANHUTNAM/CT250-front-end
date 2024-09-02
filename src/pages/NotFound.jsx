import { Link } from "react-router-dom";
import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";

const NotFoundPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.not_found"));
  useTopPage();
  return (
    <section className="bg-bgPrimary">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight text-primary lg:text-9xl">
            {t("NotFound.title")}
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl dark:text-white">
            {t("NotFound.content_1")}
          </p>
          <p className="mb-4 text-lg font-light text-gray-300 dark:text-gray-400">
            {t("NotFound.content_2")}
            <span className="font-bold"> {t("NotFound.content_3")}</span>.
          </p>
          <Link
            to="/"
            className="my-4 inline-flex rounded-lg bg-[#152e29] px-5 py-2.5 text-center text-2xl font-bold text-white hover:bg-bgTertiary"
          >
            {t("NotFound.content_4")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
