import { useEffect, useState } from "react";
import { useApi, useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { search } from "../services/dishService";
import StatusCodes from "../utils/StatusCodes";
import { toast } from "react-toastify";
import BodyLayout from "../layouts/BodyLayout";
import Pagination from "../components/pagination/Pagination";
import DishCard from "../components/dish/DishCard";
import { LIMIT_PAGE } from "../constants";

const SearchPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.search"));
  useTopPage();

  const [searchParams] = useSearchParams();

  const [results, setResults] = useState({
    totalData: 0,
    totalPages: 1,
    data: [],
  });
  const [currentPage, setCurrentPage] = useState(1);

  const keyword = searchParams.get("keyword");

  const { apiFunction: handleSearch } = useApi(
    async (keyword, page, limit) => await search(keyword, page, limit),
  );

  const getSearchResults = async (keyword, page = 1, limit = 10) => {
    const res = await handleSearch(keyword, page, limit);

    if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
      setResults(res.DT);
    }

    if (res && res.EC === StatusCodes.ERROR_DEFAULT) {
      toast.error(res.EM);
    }
  };

  useEffect(() => {
    if (keyword) {
      getSearchResults(keyword, currentPage, LIMIT_PAGE);
    }
  }, [currentPage, keyword]);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <BodyLayout>
      <div className="py-6">
        {results?.data && results?.data.length > 0 ? (
          <>
            <div className="pb-6 text-base font-bold text-primary sr-530:text-lg sm:text-xl">
              {t("SearchPage.title", {
                total: results?.totalData,
                keyword: keyword,
              })}
            </div>
            <div className="space-y-12">
              <div className="-mx-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {results?.data &&
                  results?.data.length > 0 &&
                  results?.data.map((dish) => {
                    return <DishCard key={dish._id} dish={dish} />;
                  })}
              </div>
              <Pagination
                totalPages={results?.totalPages}
                currentPage={currentPage}
                onChangePage={handleChangePage}
              />
            </div>
          </>
        ) : (
          <div className="py-2">
            <div className="rounded-md bg-[#fff3cd] px-4 py-3 text-sm font-medium text-yellow-600">
              {t("SearchPage.notFound", { keyword: keyword })}
            </div>
          </div>
        )}
      </div>
    </BodyLayout>
  );
};

export default SearchPage;
