import { RxDoubleArrowRight } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const SideBar = ({ visable, setVisible }) => {
  return (
    <>
      <div
        className={`fixed text-primary top-0 right-0 bottom-0 font-bold overflow-hidden bg-bgOpacity transition-all ease-in-out duration-500 ${
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

export default SideBar;
