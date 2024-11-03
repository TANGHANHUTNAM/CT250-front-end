import { Link, useNavigate } from "react-router-dom";
import { Fragment, useContext } from "react";
import { useTranslation } from "react-i18next";
import { formatCurrency } from "../../utils/format";
import { Empty } from "antd";
import { HeaderContext } from "../header/Header.jsx";

const Suggestion = ({ suggestions }) => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleSearch = (data) => {
    navigate(`/dish-detail/${data._id}`);
  };

  const { keyword } = useContext(HeaderContext);

  return (
    <>
      {suggestions && suggestions.length > 0 && (
        <div className="flex flex-col justify-center gap-2">
          {suggestions.map((suggestion, index) => {
            return (
              <Fragment key={index}>
                <div
                  className="group/suggestion flex cursor-pointer flex-nowrap items-center gap-2.5 hover:bg-gray-100"
                  onClick={() => handleSearch(suggestion)}
                >
                  <img
                    src={suggestion?.image}
                    alt="..."
                    loading="lazy"
                    className="w-16 object-contain"
                  />
                  <div className="space-y-0.5 overflow-hidden font-medium">
                    <p className="truncate text-[15px] group-hover/suggestion:text-tertiary">
                      {suggestion?.name}
                    </p>
                    <p className="text-13px">
                      <span className="text-red-500">
                        {formatCurrency(
                          suggestion.price -
                            (suggestion.price * suggestion.discount) / 100,
                        )}
                      </span>
                      <span className="ms-2 text-gray-400 line-through">
                        {formatCurrency(suggestion?.price)}
                      </span>
                    </p>
                  </div>
                </div>
                <hr />
              </Fragment>
            );
          })}
          <Link
            to={`/search?keyword=${keyword}`}
            className="group/all w-full text-center"
          >
            <span className="text-sm font-semibold group-hover/all:text-tertiary">
              {t("Header.Search.seeAll")}
            </span>
          </Link>
        </div>
      )}

      {suggestions && suggestions.length <= 0 && (
        <Empty
          imageStyle={{ height: "4rem" }}
          description={
            <span className="font-montserrat">{t("Header.Search.noData")}</span>
          }
        />
      )}
    </>
  );
};

export default Suggestion;
