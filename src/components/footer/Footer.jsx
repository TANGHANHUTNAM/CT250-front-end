import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Footer.css";
import Zalo from "../../assets/zalo.svg";
import Facebook from "../../assets/facebook.svg";
import Youtube from "../../assets/youtube.svg";
import Payment1 from "../../assets/payment1.webp";
import Payment2 from "../../assets/payment2.webp";
const Footer = () => {
  return (
    <footer className="bg-bgPrimary text-white border-t border-solid">
      <div className="py-12 max-w-screen-xl mx-auto w-full">
        <div className="flex flex-wrap text-[14px] font-medium px-3">
          <div className="w-full md:w-full lg:w-4/12 mb-8 lg:mb-0">
            <div className="mb-6">
              <NavLink
                to="/"
                className="w-[150px] flex items-center justify-between sm:w-[200px]"
              >
                <img src={logo} alt="logo" />
              </NavLink>
            </div>

            <div className="mb-6 font-medium">
              Nhà hàng chúng tôi luôn luôn đặt khách hàng lên hàng đầu, tận tâm
              phục vụ, mang lại cho khách hàng những trãi nghiệm tuyệt vời nhất.
              Các món ăn với công thức độc quyền sẽ mang lại hương vị mới mẻ cho
              thực khách. Hương Vị Việt xin chân thành cảm ơn.
            </div>
            <div>
              <div className="text-[16px] font-semibold">Cửa hàng chính</div>
              <ul className="mt-2 space-y-2">
                <li>
                  <b>Địa chỉ: </b>
                  <span>
                    Khu 2, Đ. 3/2, P. Xuân Khánh, Q. Ninh Kiều, TP. CT
                  </span>
                </li>
                <li>
                  <b>Điện thoại: </b>
                  <a
                    title="0292 3831 530"
                    href="tel:0292 3831 530"
                    className="hover:text-tertiary"
                  >
                    0292 3831 530
                  </a>
                </li>
                <li>
                  <b>Email: </b>
                  <a
                    title="dhct@ctu.edu.vn"
                    href="mailto:dhct@ctu.edu.vn"
                    className="hover:text-tertiary"
                  >
                    dhct@ctu.edu.vn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-4/12 lg:w-3/12 mb-8 lg:mb-0 lg:px-10">
            <h4 className=" mb-4 text-[16px] font-semibold">Hướng dẫn</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  className="hover:text-tertiary duration-300"
                  to="/buying-guide"
                >
                  Hướng dẫn mua hàng
                </Link>
              </li>

              <li>
                <Link
                  className="hover:text-tertiary duration-300"
                  to="/payment-instruction"
                >
                  Hướng dẫn thanh toán
                </Link>
              </li>

              <li>
                <Link
                  className="hover:text-tertiary duration-300"
                  to="/register"
                >
                  Đăng ký thành viên
                </Link>
              </li>

              <li>
                <Link
                  className="hover:text-tertiary duration-300"
                  to="/contact"
                >
                  Hỗ trợ khách hàng
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-4/12 lg:w-3/12 mb-8 lg:mb-0 lg:px-10">
            <h4 className=" mb-4 text-[16px] font-semibold">Chính sách</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  className="hover:text-tertiary duration-300"
                  to="/membership-policy"
                >
                  Chính sách thành viên
                </Link>
              </li>

              <li>
                <Link
                  className="hover:text-tertiary duration-300"
                  to="/payment-policy"
                >
                  Chính sách thanh toán
                </Link>
              </li>

              <li>
                <Link
                  className="hover:text-tertiary duration-300"
                  to="/buying-guide"
                >
                  Hướng dẫn mua hàng
                </Link>
              </li>

              <li>
                <Link
                  className="hover:text-tertiary duration-300"
                  to="/information-security"
                >
                  Bảo mật thông tin
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-4/12 lg:w-2/12 lg:ps-6">
            <h4 className=" mb-4 text-[16px] font-semibold">Mạng xã hội</h4>
            <ul className="flex space-x-4 mb-6">
              <li>
                <a href="#" title="Zalo">
                  <img
                    width="32"
                    height="32"
                    title="Zalo"
                    src={Zalo}
                    alt="Zalo"
                  />
                </a>
              </li>
              <li>
                <a href="#" title="Facebook">
                  <img
                    width="32"
                    height="32"
                    title="Facebook"
                    src={Facebook}
                    alt="Facebook"
                  />
                </a>
              </li>
              <li>
                <a href="#" title="Youtube">
                  <img
                    width="32"
                    height="32"
                    title="Youtube"
                    src={Youtube}
                    alt="Youtube"
                  />
                </a>
              </li>
            </ul>
            <h4 className=" mb-4 text-[16px] font-semibold">
              Hình thức thanh toán
            </h4>
            <ul className="flex space-x-4">
              <li>
                <img width="57" height="35" alt="Payment 1" src={Payment1} />
              </li>
              <li>
                <img width="57" height="35" alt="Payment 2" src={Payment2} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="copyright" className="bg-bgTertiary py-4">
        <div className="text-center text-sm">
          <span className="mr-1">
            Bản quyền thuộc về <b>CTU</b>.
          </span>
          <span>Cung cấp bởi nhóm 4 CT250</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
