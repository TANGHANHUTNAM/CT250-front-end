import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="py-10 lg:ml-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-full lg:w-3/12 mb-8 lg:mb-0 mr-5">
              <div className="mb-6">
                <NavLink
                  to="/"
                  className="w-[120px] flex items-center justify-between sm:w-[130px] lg:w-[140px]"
                >
                  <img src={logo} alt="logo" />
                </NavLink>
              </div>

              <div className="mb-6">
                Nhà hàng chúng tôi luôn luôn đặt khách hàng lên hàng đầu, tận
                tâm phục vụ, mang lại cho khách hàng những trãi nghiệm tuyệt vời
                nhất. Các món ăn với công thức độc quyền sẽ mang lại hương vị
                mới mẻ cho thực khách. Dola Restaurant xin chân thành cảm ơn.
              </div>
              <div>
                <div className="font-semibold">Cửa hàng chính</div>
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
                      className="hover:underline"
                    >
                      0292 3831 530
                    </a>
                  </li>
                  <li>
                    <b>Email: </b>
                    <a
                      title="dhct@ctu.edu.vn"
                      href="mailto:dhct@ctu.edu.vn"
                      className="hover:underline"
                    >
                      dhct@ctu.edu.vn
                    </a>
                  </li>
                </ul>

                <button className="mt-4 !bg-yellow-600 p-3 rounded-lg hover:!bg-yellow-700">
                  Hệ thống cửa hàng
                </button>
              </div>
            </div>
            <div className="w-full md:w-4/12 lg:w-3/12 mb-8 lg:mb-0">
              <h4 className="font-semibold mb-4">
                Hướng dẫn
                <span className="block h-1 w-24 bg-white mt-1"></span>
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/huong-dan-mua-hang"
                    title="Hướng dẫn mua hàng"
                    className="hover:underline"
                  >
                    Hướng dẫn mua hàng
                  </a>
                </li>

                <li>
                  <a
                    href="/huong-dan-thanh-toan"
                    title="Hướng dẫn thanh toán"
                    className="hover:underline"
                  >
                    Hướng dẫn thanh toán
                  </a>
                </li>

                <li>
                  <a
                    href="/account/register"
                    title="Đăng ký thành viên"
                    className="hover:underline"
                  >
                    Đăng ký thành viên
                  </a>
                </li>

                <li>
                  <a
                    href="/lien-he"
                    title="Hỗ trợ khách hàng"
                    className="hover:underline"
                  >
                    Hỗ trợ khách hàng
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-4/12 lg:w-3/12 mb-8 lg:mb-0">
              <h4 className="font-semibold mb-4">
                Chính sách
                <span className="block h-1 w-24 bg-white mt-1"></span>
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/chinh-sach-thanh-vien"
                    title="Chính sách thành viên"
                    className="hover:underline"
                  >
                    Chính sách thành viên
                  </a>
                </li>

                <li>
                  <a
                    href="/chinh-sach-thanh-toan"
                    title="Chính sách thanh toán"
                    className="hover:underline"
                  >
                    Chính sách thanh toán
                  </a>
                </li>

                <li>
                  <a
                    href="/huong-dan-mua-hang"
                    title="Hướng dẫn mua hàng"
                    className="hover:underline"
                  >
                    Hướng dẫn mua hàng
                  </a>
                </li>

                <li>
                  <a
                    href="/bao-mat-thong-tin-ca-nhan"
                    title="Bảo mật thông tin cá nhân"
                    className="hover:underline"
                  >
                    Bảo mật thông tin cá nhân
                  </a>
                </li>

                <li>
                  <a
                    href="/qua-tang-tri-an"
                    title="Quà tặng tri ân"
                    className="hover:underline"
                  >
                    Quà tặng tri ân
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-4/12 lg:w-2/12">
              <h4 className="font-semibold mb-4">Mạng xã hội</h4>
              <ul className="flex space-x-4 mb-6">
                <li>
                  <a href="#" title="Zalo">
                    <img
                      width="32"
                      height="32"
                      title="Zalo"
                      src="//bizweb.dktcdn.net/100/469/097/themes/882205/assets/zalo.svg?1705898809027"
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
                      src="//bizweb.dktcdn.net/100/469/097/themes/882205/assets/facebook.svg?1705898809027"
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
                      src="//bizweb.dktcdn.net/100/469/097/themes/882205/assets/youtube.svg?1705898809027"
                      alt="Youtube"
                    />
                  </a>
                </li>
              </ul>
              <h4 className="font-semibold mb-4">Hình thức thanh toán</h4>
              <ul className="flex space-x-4">
                <li>
                  <img
                    width="57"
                    height="35"
                    alt="Payment 1"
                    src="//bizweb.dktcdn.net/100/469/097/themes/882205/assets/payment_1.png?1705898809027"
                  />
                </li>
                <li>
                  <img
                    width="57"
                    height="35"
                    alt="Payment 2"
                    src="//bizweb.dktcdn.net/100/469/097/themes/882205/assets/payment_2.png?1705898809027"
                  />
                </li>
                <li>
                  <img
                    width="57"
                    height="35"
                    alt="Payment 3"
                    src="//bizweb.dktcdn.net/100/469/097/themes/882205/assets/payment_3.png?1705898809027"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="copyright" className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 text-center text-sm">
          <span className="mr-1">
            Bản quyền thuộc về <b>Dola theme</b>.
          </span>
          <span>
            Cung cấp bởi
            <a
              href="https://www.sapo.vn/?utm_campaign=cpn:kho_theme-plm:footer&utm_source=Tu_nhien&utm_medium=referral&utm_content=fm:text_link-km:-sz:&utm_term=&campaign=kho_theme-sapo"
              rel="noopener"
              title="Sapo"
              target="_blank"
              className="text-blue-400 hover:underline ml-1"
            >
              Sapo
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
