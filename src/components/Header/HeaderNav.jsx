import logo from "../../assets/logo.png";
import "./HeaderNav.css";
import { Link, NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { CgMenuRightAlt } from "react-icons/cg";
import { useState } from "react";
import { RxDoubleArrowRight } from "react-icons/rx";
const HeaderNav = () => {
  const [visable, setVisible] = useState(false);
  const [visableSearch, setVisibleSearch] = useState(false);
  const handleCloseSearch = () => {
    setVisibleSearch((show) => !show);
  };
  return (
    <>
      {/* Navbar */}
      <div className="relative headernav-container flex items-center justify-between py-3 bg-bgPrimary px-2 xl:px-[80px] lg:px-[20px] sm:px-[10px]">
        {/* Logo */}
        <div>
          <NavLink
            to="/"
            className="w-[120px] flex items-center justify-between sm:w-[130px] lg:w-[140px]"
          >
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        {/* Menu */}
        <ul className="hidden md:flex lg:gap-6 font-semibold text-[15px] text-primary gap-2">
          <NavLink
            to="/"
            className="nav-link-name flex flex-col items-center gap-1 hover:text-tertiary duration-500"
          >
            <p>Trang chủ</p>
          </NavLink>
          <NavLink
            to="/introduce"
            className="nav-link-name flex flex-col items-center gap-1 hover:text-tertiary duration-500"
          >
            <p>Giới thiệu</p>
          </NavLink>
          <NavLink
            to="/dish"
            className="nav-link-name flex flex-col items-center gap-1 hover:text-tertiary duration-500"
          >
            <p>Menu</p>
          </NavLink>
          <NavLink
            to="/best-dish"
            className="nav-link-name flex flex-col items-center gap-1 hover:text-tertiary duration-500"
          >
            <p>Món nổi bật</p>
          </NavLink>
          <NavLink
            to="/delicious-dish"
            className="nav-link-name flex flex-col items-center gap-1 hover:text-tertiary duration-500"
          >
            <p>Món ngon mỗi ngày</p>
          </NavLink>
          <NavLink
            to="/news"
            className="nav-link-name flex flex-col items-center gap-1 hover:text-tertiary duration-500"
          >
            <p>Tin tức</p>
          </NavLink>
          <NavLink
            to="/contact"
            className="nav-link-name flex flex-col items-center gap-1 hover:text-tertiary duration-500"
          >
            <p>Liên hệ</p>
          </NavLink>
        </ul>
        {/* Search Cart User */}
        <div className="flex items-center gap-2.5 lg:gap-4">
          {/* Search-icons */}
          <div className="group relative">
            <span
              onClick={() => {
                handleCloseSearch();
              }}
            >
              <IoIosSearch className="text-3xl text-primary cursor-pointer hover:text-tertiary duration-500" />
            </span>
            <div className="hidden sm:block absolute dropdown-menu right-0 pt-4 transition-all duration-300 will-change-transform scale-90 opacity-0 sm:invisible sm:group-hover:visible sm:group-hover:scale-100 sm:group-hover:opacity-100">
              <div className="flex flex-col gap-3 w-96 p-4 bg-primary rounded-md">
                <p className="text-md text-secondar font-medium">
                  TÌM KIẾM MÓN ĂN CỦA BẠN:
                </p>
                <hr />
                <form className="w-full relative">
                  {/* Input search */}
                  <div className="relative mb-3">
                    <input
                      type="text"
                      placeholder="Nhập món ăn bạn muốn tìm..."
                      className="w-full border rounded-md border-tertiary placeholder:text-secondary px-2 py-2.5 text-sm outline-none"
                    />
                    <button className="absolute right-1.5 top-1/2 -translate-y-1/2 text-tertiary text-[26px]">
                      <IoIosSearch />
                    </button>
                  </div>
                  <hr />
                  {/* Result search */}
                  <div className="mt-3 p-3 flex flex-col gap-3 w-full bg-zinc-100 rounded-lg">
                    <h2 className="text-md text-secondar font-normal">
                      KẾT QUẢ TÌM KIẾM:
                    </h2>
                    <div className="flex flex-col justify-center gap-3">
                      <span>ABC</span>
                      <span>DBD</span>
                      <span>12</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Cart-icons */}
          <Link to="/cart/12" className="relative">
            <BsCart3 className="text-2xl text-primary cursor-pointer" />
            <p className="absolute flex justify-center items-center rounded-full bg-tertiary text-sm text-primary aspect-square w-[20px] h-[20px] text-[10px] -top-2 -right-2.5">
              9
            </p>
          </Link>
          <div className="group relative">
            {/* User-icons */}
            <span>
              <FaRegUser className="text-2xl text-primary cursor-pointer hover:text-tertiary duration-500" />
            </span>
            <div className="absolute dropdown-menu right-0 pt-4 cursor-pointer transition-all duration-300 will-change-transform scale-90 opacity-0 invisible group-hover:visible group-hover:scale-100 group-hover:opacity-100">
              <div className="flex flex-col gap-3 w-60 p-3 bg-primary rounded-md">
                <Link
                  to="/login"
                  className="bg-tertiary p-2.5 rounded-md text-center text-sm font-medium text-primary hover:bg-yellow-600 duration-500"
                >
                  Đăng nhập
                </Link>
                <Link
                  to="/register"
                  className="bg-tertiary p-2.5 rounded-md text-center text-sm font-medium text-primary hover:bg-yellow-600 duration-500"
                >
                  Đăng ký
                </Link>
                <Link className="bg-tertiary p-2.5 rounded-md text-center text-sm font-medium text-primary hover:bg-yellow-600 duration-500">
                  Món ăn yêu thích
                </Link>
              </div>
            </div>
          </div>
          {/* Booking */}
          <Link className="hidden booking-table md:flex" to="/booking">
            <button className="bg-tertiary text-primary text-sm rounded-md font-bold hover:bg-yellow-600 duration-500 py-2.5 px-2 lg:px-4">
              Đặt bàn
            </button>
          </Link>
          {/* Menu-icons */}
          <span
            onClick={() => {
              setVisible(true);
            }}
            className="cursor-pointer text-[36px] text-primary md:hidden duration-500 hover:text-tertiary"
          >
            <CgMenuRightAlt />
          </span>
        </div>
      </div>

      {/* Search for screen small */}
      {visableSearch ? (
        <div className="p-2 bg-bgPrimary sm:hidden w-full">
          <form className="">
            {/* Input search */}
            <div className="relative ">
              <input
                type="text"
                placeholder="Nhập món ăn bạn muốn tìm..."
                className="w-full border rounded-md border-tertiary placeholder:text-secondary p-2 text-sm outline-none "
              />
              <button className="absolute right-1 top-1 text-tertiary text-3xl">
                <IoIosSearch />
              </button>
              {/* Result search */}
              <div className="absolute p-2 flex flex-col gap-3 bg-white rounded w-full">
                <h2 className="text-md text-secondar font-normal mt-2">
                  KẾT QUẢ TÌM KIẾM:
                </h2>
                <div className="flex flex-col justify-center gap-3 ">
                  <span>ABC</span>
                  <span>DBD</span>
                  <span>12</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}

      {/* Sidebar menu for screen small*/}
      <div
        className={`absolute z-100 text-primary top-0 right-0 bottom-0 font-bold overflow-hidden bg-bgOpacity transition-all ease-in-out duration-500 ${
          visable ? "w-full " : "w-0"
        } `}
      >
        <div
          onClick={() => {
            setVisible(false);
          }}
          className="flex flex-col cursor-pointer py-5 px-1"
        >
          <div className="flex item-center gap-1 p-3 hover:text-tertiary">
            <RxDoubleArrowRight className="text-center text-[24px]" />
            ĐÓNG
          </div>
        </div>

        <NavLink
          onClick={() => {
            setVisible(false);
          }}
          to="/"
          className="flex flex-col items-center gap-1 hover:text-tertiary duration-500 py-2 border "
        >
          <p>TRANG CHỦ</p>
        </NavLink>
        <NavLink
          onClick={() => {
            setVisible(false);
          }}
          to="/introduce"
          className="flex flex-col items-center gap-1 hover:text-tertiary duration-500 py-2"
        >
          <p>GIỚI THIỆU</p>
        </NavLink>
        <NavLink
          onClick={() => {
            setVisible(false);
          }}
          to="/dish"
          className="flex flex-col items-center gap-1 hover:text-tertiary duration-500 py-2"
        >
          <p>MENU</p>
        </NavLink>
        <NavLink
          onClick={() => {
            setVisible(false);
          }}
          to="/best-dish"
          className="flex flex-col items-center gap-1 hover:text-tertiary duration-500 py-2"
        >
          <p>MÓN NỔI BẬT</p>
        </NavLink>
        <NavLink
          onClick={() => {
            setVisible(false);
          }}
          to="/delicious-dish"
          className="flex flex-col items-center gap-1 hover:text-tertiary duration-500 py-2"
        >
          <p>MÓN NGON MỖI NGÀY</p>
        </NavLink>
        <NavLink
          onClick={() => {
            setVisible(false);
          }}
          to="/news"
          className="flex flex-col items-center gap-1 hover:text-tertiary duration-500 py-2"
        >
          <p>TIN TỨC</p>
        </NavLink>
        <NavLink
          onClick={() => {
            setVisible(false);
          }}
          to="/contact"
          className="flex flex-col items-center gap-1 hover:text-tertiary duration-500 py-2"
        >
          <p>LIÊN HỆ</p>
        </NavLink>
        <NavLink
          onClick={() => {
            setVisible(false);
          }}
          className="flex flex-col items-center gap-1 px-4"
          to="/booking"
        >
          <button className="bg-tertiary text-primary text-lg rounded-md hover:bg-yellow-600 duration-500 w-full h-10">
            Đặt bàn
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default HeaderNav;
