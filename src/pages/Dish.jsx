import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";
import BodyLayout from "../layouts/BodyLayout";
import MenuSideBar from "../components/menu/MenuSideBar";
import DishListGrid from "../components/dish/DishListGrid";
import { FaFilter } from "react-icons/fa6";
import { Tooltip } from "antd";
import { RxDoubleArrowRight } from "react-icons/rx";
import { useState } from "react";
import SortSelect from "../components/menu/SortSelect";

const DishPage = () => {
  const { t } = useTranslation();

  useDynamicTitle(t("BreadcrumbsAndTitle.all_dishes"));
  useTopPage();

  const [visibleFilter, setVisibleFilter] = useState(false);
  const [selectedSort, setSelectedSort] = useState({});

  return (
    <BodyLayout>
      <div className="flex gap-5 py-8 md:px-12 min-[950px]:px-0">
        <div className="hidden w-64 shrink-0 min-[950px]:block">
          <MenuSideBar />
        </div>
        <div className="w-full">
          {/* header */}
          <div className="px-2">
            <div className="header-page mb-4 flex items-center justify-between border-b-2 border-solid border-tertiary pb-4 pt-2">
              <p className="title font-bold uppercase text-tertiary">
                Tất cả món ăn
              </p>
              <div className="flex flex-nowrap items-center gap-4">
                <div className="hidden sm:block">
                  <SortSelect
                    selectedSort={selectedSort}
                    setSelectedSort={setSelectedSort}
                  />
                </div>
                <Tooltip title="Filter">
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
              <SortSelect
                selectedSort={selectedSort}
                setSelectedSort={setSelectedSort}
              />
            </div>
            <DishListGrid />
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
          <span className="font-bold uppercase">Close</span>
        </div>
        <div className="h-full w-full px-4 pb-6 sm:w-80 sm:bg-bgPrimary sm:py-6">
          <MenuSideBar />
        </div>
      </div>
    </BodyLayout>
  );
};

export default DishPage;
