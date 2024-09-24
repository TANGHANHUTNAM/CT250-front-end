import { useTranslation } from "react-i18next";
import "./Tabs.css";

const Tabs = ({
  tabs = [],
  tabClass = "",
  onChange = (key) => {},
  activeTab,
  activeStyle = { borderColor: "rgb(202 138 4)", color: "rgb(202 138 4)" },
  translation = false,
}) => {
  const handleChangeTab = (key) => {
    onChange(key);
  };

  const { t } = useTranslation();

  return (
    <ul className="tabs flex w-full items-center overflow-x-auto overflow-y-hidden">
      {tabs.map((tab, i) => {
        return (
          <li
            key={`${tab.key}_${i}`}
            className={`flex-1 cursor-pointer text-nowrap border-b-2 border-solid border-white/15 px-3 py-4 text-center text-sm font-medium transition-colors duration-200 ${tabClass}`}
            style={activeTab === tab.key ? activeStyle : {}}
            onClick={() => handleChangeTab(tab.key)}
          >
            {translation ? t(tab.trans) : tab.label}
          </li>
        );
      })}
    </ul>
  );
};

export default Tabs;
