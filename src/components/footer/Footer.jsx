import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Footer.css";
import Zalo from "../../assets/zalo.svg";
import Facebook from "../../assets/facebook.svg";
import Youtube from "../../assets/youtube.svg";
import Payment1 from "../../assets/payment1.webp";
import Payment2 from "../../assets/payment2.webp";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-solid bg-bgPrimary text-white">
      <div className="mx-auto w-full max-w-screen-xl py-12">
        <div className="flex flex-wrap px-3 text-[14px] font-medium">
          <div className="mb-8 w-full md:w-full lg:mb-0 lg:w-4/12">
            <div className="mb-6">
              <NavLink
                to="/"
                className="flex w-[150px] items-center justify-between sm:w-[200px]"
              >
                <img src={logo} alt="logo" />
              </NavLink>
            </div>

            <div className="mb-6 font-medium">{t("Footer.introduce")}</div>
            <div>
              <div className="text-[16px] font-semibold text-tertiary">
                {t("Footer.branch")}
              </div>
              <ul className="mt-2 space-y-2">
                <li>
                  <b>{t("Footer.address")}: </b>
                  <span>
                    Khu 2, Đ. 3/2, P. Xuân Khánh, Q. Ninh Kiều, TP. CT
                  </span>
                </li>
                <li>
                  <b> {t("Footer.phone")}: </b>
                  <a
                    title="0292 3831 530"
                    href="tel:0292 3831 530"
                    className="hover:text-tertiary"
                  >
                    0292 3831 530
                  </a>
                </li>
                <li>
                  <b> {t("Footer.email")}: </b>
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
          <div className="mb-8 w-full md:w-4/12 lg:mb-0 lg:w-3/12 lg:px-10">
            <h4 className="mb-4 text-[16px] font-semibold text-tertiary">
              {t("Footer.title_instruct")}
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  className="duration-300 hover:text-tertiary"
                  to="/buying-guide"
                >
                  {t("Footer.instruct_1")}
                </Link>
              </li>

              <li>
                <Link
                  className="duration-300 hover:text-tertiary"
                  to="/payment-instruction"
                >
                  {t("Footer.instruct_2")}
                </Link>
              </li>

              <li>
                <Link
                  className="duration-300 hover:text-tertiary"
                  to="/register"
                >
                  {t("Footer.instruct_3")}
                </Link>
              </li>

              <li>
                <Link
                  className="duration-300 hover:text-tertiary"
                  to="/contact"
                >
                  {t("Footer.instruct_4")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-8 w-full md:w-4/12 lg:mb-0 lg:w-3/12 lg:px-10">
            <h4 className="mb-4 text-[16px] font-semibold text-tertiary">
              {t("Footer.title_policy")}
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  className="duration-300 hover:text-tertiary"
                  to="/membership-policy"
                >
                  {t("Footer.policy_1")}
                </Link>
              </li>

              <li>
                <Link
                  className="duration-300 hover:text-tertiary"
                  to="/payment-policy"
                >
                  {t("Footer.policy_2")}
                </Link>
              </li>

              <li>
                <Link
                  className="duration-300 hover:text-tertiary"
                  to="/buying-guide"
                >
                  {t("Footer.policy_3")}
                </Link>
              </li>

              <li>
                <Link
                  className="duration-300 hover:text-tertiary"
                  to="/information-security"
                >
                  {t("Footer.policy_4")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-4/12 lg:w-2/12 lg:ps-6">
            <h4 className="mb-4 text-[16px] font-semibold text-tertiary">
              {t("Footer.social")}
            </h4>
            <ul className="mb-6 flex space-x-4">
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
            <h4 className="mb-4 text-[16px] font-semibold text-tertiary">
              {t("Footer.method_payment")}
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
          <span className="">{t("Footer.copy_right")}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
