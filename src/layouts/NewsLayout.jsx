import SortSelect from "../components/news/SortSelect";
import BodyLayout from "./BodyLayout";
import _ from "lodash";

const NewsLayout = ({ children, title }) => {
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
                  <SortSelect />
                </div>
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
    </BodyLayout>
  );
};

export default NewsLayout;
