import { Tooltip } from "antd";
import SortSelect from "../components/menu/SortSelect";
import BodyLayout from "./BodyLayout";
import { FaFilter } from "react-icons/fa6";
import { RxDoubleArrowRight } from "react-icons/rx";
import { useState } from "react";
import _ from "lodash";
import { useTranslation } from "react-i18next";

const NewsLayout = ({
    children,
    title,
    sort = { seletedOption: {}, setSelectedOption: () => { } },
}) => {
    const [visibleFilter, setVisibleFilter] = useState(false);

    const { t } = useTranslation();

    return (
        <BodyLayout>
            <div className="flex gap-5 py-8 md:px-12 min-[950px]:px-0">
                <div className="w-full">
                    {/* header */}
                    <div className="px-2">
                        <div className="header-page mb-4 flex items-center justify-between border-b-2 border-solid border-tertiary pb-4 pt-2">
                            <p className="title font-bold uppercase text-tertiary">{title}</p>
                            <div className="flex flex-nowrap items-center gap-4">
                                <div className="hidden sm:block">
                                    <SortSelect
                                        selectedOption={sort.seletedOption}
                                        setSelectedOption={sort.setSelectedOption}
                                    />
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
                            <SortSelect
                                selectedOption={sort.seletedOption}
                                setSelectedOption={sort.setSelectedOption}
                            />
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
            </div>
        </BodyLayout>
    );
};

export default NewsLayout;
