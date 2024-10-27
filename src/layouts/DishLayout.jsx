import { Tooltip } from "antd";
import SortSelect from "../components/menu/SortSelect";
import BodyLayout from "./BodyLayout";
import { FaFilter } from "react-icons/fa6";
import { RxDoubleArrowRight } from "react-icons/rx";
import { useEffect, useState } from "react";
import DishCategories from "../components/menu/DishCategories";
import YourSelection from "../components/menu/YourSelection";
import CostMenu from "../components/menu/CostMenu";
import _ from "lodash";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

const DishLayout = ({ children, title, path = "" }) => {
  const [visibleFilter, setVisibleFilter] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState({});

  const handleSelectCost = (checked = false, value) => {
    if (checked) {
      setSelectedFilter((prev) => ({ ...prev, [value.id]: value }));
    } else {
      setSelectedFilter((prev) => {
        const cloneFilter = _.cloneDeep(prev);
        delete cloneFilter[value.id];
        return cloneFilter;
      });
    }
  };

  const handleClearAll = () => {
    setSelectedFilter({});
  };

  const handleRemoveChoice = (choice) => {
    setSelectedFilter((prev) => {
      const cloneFilter = _.cloneDeep(prev);
      delete cloneFilter[choice.id];
      return cloneFilter;
    });
  };

  const { t } = useTranslation();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!_.isEmpty(selectedFilter)) {
      const values = Object.values(selectedFilter).map(
        (choice) => choice?.value,
      );

      const queryParams = new URLSearchParams(location.search);
      queryParams.set("price", values.join(","));
      queryParams.sort();

      const path = `${location.pathname}${queryParams.size > 0 ? `?${queryParams.toString()}` : ""}`;
      if (path !== `${location.pathname}${location.search}`) {
        navigate(path);
      }
    } else {
      const queryParams = new URLSearchParams(location.search);
      queryParams.delete("price");
      queryParams.sort();

      const path = `${location.pathname}${queryParams.size > 0 ? `?${queryParams.toString()}` : ""}`;
      if (path !== `${location.pathname}${location.search}`) {
        navigate(path);
      }
    }
  }, [selectedFilter]);

  useEffect(() => {
    if (!location.search) {
      handleClearAll();
    }
  }, [location.search]);

  return (
    <BodyLayout>
      <div className="flex gap-5 py-8 md:px-12 min-[950px]:px-0">
        <div className="hidden min-w-64 shrink-0 min-[950px]:block">
          <div className="space-y-6">
            <DishCategories path={path} />
            {_.isEmpty(selectedFilter) === false && (
              <YourSelection
                choices={selectedFilter}
                handleClearAll={handleClearAll}
                handleRemoveChoice={handleRemoveChoice}
              />
            )}
            <CostMenu
              selectedCosts={selectedFilter}
              handleSelectCost={handleSelectCost}
            />
          </div>
        </div>
        <div className="w-full">
          {/* header */}
          <div className="px-2">
            <div className="header-page mb-4 flex items-center justify-between border-b-2 border-solid border-tertiary pb-4 pt-2">
              <p className="title font-bold uppercase text-tertiary">{title}</p>
              <div className="flex flex-nowrap items-center gap-4">
                <div className="hidden sm:block">
                  <SortSelect />
                </div>
                <Tooltip title={t("DishMenuSidebar.filter")}>
                  <button
                    className="cursor-pointer rounded-md bg-tertiary p-2 text-xl text-primary hover:bg-yellow-600 min-[950px]:hidden"
                    onClick={() => setVisibleFilter(true)}
                  >
                    <FaFilter />
                  </button>
                </Tooltip>
              </div>
            </div>
          </div>
          {/* grid items */}
          <div className="space-y-4">
            <div className="px-2 sm:hidden">
              <SortSelect />
            </div>
            {children}
          </div>
        </div>
      </div>
      <div
        className={`fixed bottom-0 right-0 top-0 z-50 overflow-y-auto overflow-x-hidden bg-[#0c2b27e6] transition-all duration-500 ease-in-out sm:flex sm:items-start sm:justify-between sm:bg-bgOpacity ${visibleFilter ? "w-full" : "w-0"}`}
      >
        <div
          className="mb-6 flex cursor-pointer flex-nowrap items-center gap-2 px-4 pt-6 text-primary hover:text-tertiary"
          onClick={() => setVisibleFilter(false)}
        >
          <RxDoubleArrowRight className="text-center text-2xl" />
          <span className="font-bold uppercase">
            {t("DishMenuSidebar.close")}
          </span>
        </div>
        <div className="h-full w-full px-4 pb-6 sm:w-80 sm:bg-bgPrimary sm:py-6">
          <div className="space-y-6">
            <DishCategories path={path} />
            {_.isEmpty(selectedFilter) === false && (
              <YourSelection
                choices={selectedFilter}
                handleClearAll={handleClearAll}
                handleRemoveChoice={handleRemoveChoice}
              />
            )}
            <CostMenu
              selectedCosts={selectedFilter}
              handleSelectCost={handleSelectCost}
            />
          </div>
        </div>
      </div>
    </BodyLayout>
  );
};

export default DishLayout;
