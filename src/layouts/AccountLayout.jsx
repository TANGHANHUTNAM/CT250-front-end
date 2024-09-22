import BodyLayout from "./BodyLayout";
import Avatar from "../components/avatar/Avatar";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { RiProfileLine } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { TiUserDelete } from "react-icons/ti";
import { useTranslation } from "react-i18next";

const AccountLayout = ({}) => {
  const { t } = useTranslation();

  return (
    <BodyLayout>
      <div className="flex flex-nowrap gap-6 py-2 md:py-6">
        <div className="hidden w-44 shrink-0 md:block lg:w-52">
          <div className="divide-y divide-solid divide-white/10 text-sm text-primary">
            <div className="flex flex-nowrap items-center gap-4 py-4">
              <Avatar size={50} />
              <div className="space-y-1">
                <p className="font-semibold">Thiên Vũ</p>
                <Link
                  to="/account/edit-profile"
                  className="flex flex-nowrap items-center gap-2 font-medium text-gray-200"
                >
                  <AiFillEdit className="h-4 w-4" />
                  <span>{t("ManageAccount.editProfile")}</span>
                </Link>
              </div>
            </div>
            <ul className="space-y-1 py-4">
              <li className="group py-2 font-medium">
                <NavLink
                  to="/account"
                  end
                  className="flex flex-nowrap items-center gap-4"
                >
                  <RiProfileLine className="h-5 w-5 text-rose-500" />
                  <span className="duration-300 group-hover:text-tertiary">
                    {t("ManageAccount.profile")}
                  </span>
                </NavLink>
              </li>
              <li className="group py-2 font-medium">
                <NavLink
                  to="/account/edit-profile"
                  className="flex flex-nowrap items-center gap-4"
                >
                  <FaUserEdit className="h-5 w-5 text-orange-400" />
                  <span className="duration-300 group-hover:text-tertiary">
                    {t("ManageAccount.editProfile")}
                  </span>
                </NavLink>
              </li>
              <li className="group py-2 font-medium">
                <NavLink
                  to="/account/change-password"
                  className="flex flex-nowrap items-center gap-4"
                >
                  <MdPassword className="h-5 w-5 text-blue-500" />
                  <span className="duration-300 group-hover:text-tertiary">
                    {t("ManageAccount.changePassword")}
                  </span>
                </NavLink>
              </li>
              <li className="group py-2 font-medium">
                <NavLink
                  to="/account/delete"
                  className="flex flex-nowrap items-center gap-4"
                >
                  <TiUserDelete className="h-5 w-5 text-red-500" />
                  <span className="duration-300 group-hover:text-tertiary">
                    {t("ManageAccount.deleteAccount")}
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="grow md:rounded-sm md:bg-bgTertiary">
          <Outlet />
        </div>
      </div>
    </BodyLayout>
  );
};

export default AccountLayout;
