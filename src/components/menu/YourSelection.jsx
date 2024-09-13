import MenuLayout from "./MenuLayout";
import { HiMiniXMark } from "react-icons/hi2";
import { FaCircleXmark } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const YourSelection = ({
  choices = {},
  handleClearAll = () => {},
  handleRemoveChoice = () => {},
}) => {
  const { t } = useTranslation();

  return (
    <MenuLayout title={t("DishMenuSidebar.youChoose")}>
      <div className="bg-transparent px-4 py-3">
        <div
          className="mb-3 flex w-fit cursor-pointer select-none flex-nowrap items-center gap-2 text-base font-semibold text-tertiary hover:text-primary"
          onClick={() => handleClearAll()}
        >
          <span>{t("DishMenuSidebar.clearAll")}</span> <FaCircleXmark />
        </div>
        <ul className="space-y-3">
          {choices &&
            Object.entries(choices).length > 0 &&
            Object.entries(choices).map(([key, choice], index) => {
              return (
                <li
                  key={index}
                  className="flex w-fit flex-nowrap items-center justify-center gap-2 rounded-md bg-primary px-3 py-2"
                >
                  <span className="select-none text-sm font-medium text-tertiary">
                    {t(choice?.trans) === choice.trans
                      ? choice?.label
                      : t(choice?.trans)}
                  </span>
                  <span
                    className="cursor-pointer text-gray-500 hover:text-tertiary"
                    onClick={() => handleRemoveChoice(choice)}
                  >
                    <HiMiniXMark />
                  </span>
                </li>
              );
            })}
        </ul>
      </div>
    </MenuLayout>
  );
};

export default YourSelection;
