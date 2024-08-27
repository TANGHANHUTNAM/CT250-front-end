import HeaderNav from "./HeaderNav";
import BackTop from "./BackTop";
import Language from "./Language";
const Header = () => {
  return (
    <div className="header sticky top-0 bg-bgPrimary">
      <HeaderNav />
      <BackTop />
      <Language />
    </div>
  );
};

export default Header;
