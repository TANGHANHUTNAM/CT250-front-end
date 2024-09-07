import "./Search.css";
import { useTranslation } from "react-i18next";
import { IoIosSearch } from "react-icons/io";
import Suggestions from "./Suggestions";
import { useState } from "react";
import { useDebounce } from "../../hooks";

const data = [
  {
    img: "https://bizweb.dktcdn.net/thumb/compact/100/469/097/products/165aab637a80546a7925ad3c1d059f.jpg?v=1667882344460",
    name: "Hủ tiếu áp chảo bò",
    price: 110000,
    discount: 10,
  },
  {
    img: "https://bizweb.dktcdn.net/thumb/compact/100/469/097/products/165aab637a80546a7925ad3c1d059f.jpg?v=1667882344460",
    name: "Sườn chua ngọt",
    price: 110000,
    discount: 10,
  },
  {
    img: "https://bizweb.dktcdn.net/thumb/compact/100/469/097/products/165aab637a80546a7925ad3c1d059f.jpg?v=1667882344460",
    name: "Gà xào xả ớt",
    price: 110000,
    discount: 10,
  },
  {
    img: "https://bizweb.dktcdn.net/thumb/compact/100/469/097/products/165aab637a80546a7925ad3c1d059f.jpg?v=1667882344460",
    name: "Lẩu mắm thập cẩm",
    price: 110000,
    discount: 10,
  },
];

const Search = () => {
  const { t } = useTranslation();

  const [keyword, setKeyword] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useDebounce(
    () => {
      if (keyword) {
        const suggestions = data.filter((item) => item.name.includes(keyword));
        setSuggestions(suggestions);
        setShowSuggestions(true);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    },
    [keyword],
    200,
  );

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearchAll = (e) => {
    e.preventDefault();
    console.log(keyword);
  };

  return (
    <div className="relative flex w-full flex-col rounded-md bg-bgPrimary sm:static sm:w-[26rem] sm:gap-3 sm:bg-primary sm:p-4">
      <p className="hidden text-base font-medium text-secondary sm:block">
        {t("Header.Search.search")}
      </p>
      <hr className="hidden sm:block" />
      <form className="relative w-full" onSubmit={(e) => handleSearchAll(e)}>
        {/* Input search */}
        <div className="relative">
          <input
            type="text"
            placeholder={t("Header.Navbar.inputSearch")}
            className="w-full rounded-md border border-tertiary px-2 py-2.5 text-sm outline-none placeholder:text-secondary"
            value={keyword}
            onChange={(e) => handleChange(e)}
          />
          <button className="absolute right-1.5 top-1/2 -translate-y-1/2 text-[26px] text-tertiary">
            <IoIosSearch />
          </button>
        </div>
      </form>
      {/* Result search */}
      {showSuggestions && (
        <div className="suggestions absolute top-[110%] w-full rounded-md bg-primary p-3 sm:static sm:rounded-none sm:border sm:border-solid sm:border-gray-200">
          <div className="text-[15px] font-medium text-secondary sm:font-normal">
            {t("Header.Search.resultSearch")}
          </div>
          <hr className="mb-2 mt-2 sm:mb-4" />
          <Suggestions suggestions={suggestions} />
        </div>
      )}
    </div>
  );
};

export default Search;
