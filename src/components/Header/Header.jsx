import HeaderNav from "./HeaderNav";
import BackTop from "./BackTop";
import Language from "./Language";
import { createContext, useState } from "react";

export const HeaderContext = createContext();

const Header = () => {
  const [keyword, setKeyword] = useState("");

  return (
    <HeaderContext.Provider value={{ keyword, setKeyword }}>
      <div className="header bg-bgPrimary">
        <HeaderNav />
        <BackTop />
        <Language />
      </div>
    </HeaderContext.Provider>
  );
};

export default Header;
