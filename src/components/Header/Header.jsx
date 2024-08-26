import HeaderNav from "./HeaderNav";
import BackTop from "./BackTop";
const Header = () => {
  return (
    <div className="header sticky top-0 bg-bgPrimary">
      <HeaderNav />
      <BackTop />
    </div>
  );
};

export default Header;
