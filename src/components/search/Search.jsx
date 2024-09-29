import { useTranslation } from "react-i18next";
import { IoIosSearch } from "react-icons/io";
import Suggestions from "./Suggestions";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "../../hooks";
import { MdKeyboardVoice } from "react-icons/md";
import { BiSolidUserVoice } from "react-icons/bi";
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

  const inputRef = useRef();
  const suggestionsRef = useRef();

  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (
        inputRef.current &&
        suggestionsRef.current &&
        !inputRef.current.contains(e.target) &&
        !suggestionsRef.current.contains(e.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, []);

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

  const handleSearchAll = (e) => {
    e.preventDefault();
  };
  // Voice search
  const [isListening, setIsListening] = useState(false);
  const handleVoiceClick = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Your browser does not support voice recognition.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "vi-VN";

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      setKeyword(speechResult);
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
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
            ref={inputRef}
            type="text"
            placeholder={t("Header.Navbar.inputSearch")}
            className="w-full rounded-md border border-tertiary px-2 py-2.5 text-sm outline-none placeholder:text-secondary"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onFocus={() => setShowSuggestions(keyword ? true : false)}
          />
          <button className="absolute right-1.5 top-1/2 -translate-y-1/2 text-[26px] text-tertiary">
            <IoIosSearch />
          </button>
          <button
            onClick={handleVoiceClick}
            disabled={isListening}
            className="voice absolute right-9 top-1/2 -translate-y-1/2 text-[26px] text-tertiary"
          >
            {isListening ? <BiSolidUserVoice /> : <MdKeyboardVoice />}
          </button>
        </div>
      </form>
      {/* Result search */}
      {showSuggestions && (
        <div
          ref={suggestionsRef}
          className="absolute top-[110%] w-full rounded-md bg-primary p-3 sm:static sm:rounded-none sm:border sm:border-solid sm:border-gray-200"
        >
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
