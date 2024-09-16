import {
  FaUser,
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaUserEdit,
} from "react-icons/fa";
import { PiUserFill } from "react-icons/pi";
import { MdAttachEmail, MdPassword } from "react-icons/md";
import { BiMaleFemale } from "react-icons/bi";
import { FaPhone } from "react-icons/fa6";
import Avatar from "../components/avatar/Avatar";
import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { TiUserDelete } from "react-icons/ti";

const PersonalPage = () => {
  const { t } = useTranslation();

  useDynamicTitle(t("BreadcrumbsAndTitle.my_account.account"));
  useTopPage();

  return (
    <div className="divide-y divide-solid divide-white/10 px-2 text-primary md:px-6">
      <div className="space-y-0.5 py-4">
        <p className="text-lg font-bold">
          {t("ManageAccount.profilePage.title_1")}
        </p>
        <p className="text-sm">{t("ManageAccount.profilePage.title_2")}</p>
      </div>
      <div className="flex flex-col-reverse gap-8 py-6 lg:grid lg:grid-cols-12 lg:gap-2 lg:divide-x lg:divide-solid lg:divide-white/10">
        <div className="space-y-8 lg:col-span-8">
          <div className="space-y-4">
            <p className="text-base font-semibold">
              {t("ManageAccount.profilePage.personalInfor")}
            </p>
            <div className="space-y-4 pl-8 text-sm">
              <div className="sm-account:grid sm-account:grid-cols-12 sm-account:gap-2 flex items-center gap-2.5">
                <div className="sm-account:col-span-5 flex items-center gap-2.5">
                  <FaUser className="h-4 w-4" />
                  <span className="sm-account:inline hidden">
                    {t("ManageAccount.profilePage.username")}
                  </span>
                </div>
                <span className="sm-account:font-medium sm-account:col-span-7">
                  Thiên Vũ
                </span>
              </div>
              <div className="sm-account:grid sm-account:grid-cols-12 sm-account:gap-2 flex items-center gap-2.5">
                <div className="sm-account:col-span-5 flex items-center gap-2.5">
                  <PiUserFill className="h-4 w-4" />
                  <span className="sm-account:inline hidden">
                    {t("ManageAccount.profilePage.fullName")}
                  </span>
                </div>
                <span className="sm-account:font-medium sm-account:col-span-7">
                  Nguyễn Thiên Vũ
                </span>
              </div>
              <div className="sm-account:grid sm-account:grid-cols-12 sm-account:gap-2 flex items-center gap-2.5">
                <div className="sm-account:col-span-5 flex items-center gap-2.5">
                  <FaBirthdayCake className="h-4 w-4" />
                  <span className="sm-account:inline hidden">
                    {t("ManageAccount.profilePage.birthday")}
                  </span>
                </div>
                <span className="sm-account:font-medium sm-account:col-span-7">
                  27/09/2024
                </span>
              </div>
              <div className="sm-account:grid sm-account:grid-cols-12 sm-account:gap-2 flex items-center gap-2.5">
                <div className="sm-account:col-span-5 flex items-center gap-2.5">
                  <BiMaleFemale className="h-4 w-4" />
                  <span className="sm-account:inline hidden">
                    {t("ManageAccount.profilePage.gender")}
                  </span>
                </div>
                <span className="sm-account:font-medium sm-account:col-span-7">
                  Nam
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-base font-semibold">
              {t("ManageAccount.profilePage.contactInfor")}
            </p>
            <div className="space-y-4 pl-8 text-sm">
              <div className="sm-account:grid sm-account:grid-cols-12 sm-account:gap-2 flex items-center gap-2.5">
                <div className="sm-account:col-span-5 flex items-center gap-2.5">
                  <MdAttachEmail className="h-4 w-4" />
                  <span className="sm-account:inline hidden">Email</span>
                </div>
                <span className="sm-account:font-medium sm-account:col-span-7">
                  thienvu@gmail.com
                </span>
              </div>
              <div className="sm-account:grid sm-account:grid-cols-12 sm-account:gap-2 flex items-center gap-2.5">
                <div className="sm-account:col-span-5 flex items-center gap-2.5">
                  <FaPhone className="h-4 w-4" />
                  <span className="sm-account:inline hidden">
                    {t("ManageAccount.profilePage.phone")}
                  </span>
                </div>
                <span className="sm-account:font-medium sm-account:col-span-7">
                  0123456789
                </span>
              </div>
              <div className="sm-account:grid sm-account:grid-cols-12 sm-account:gap-2 flex items-center gap-2.5">
                <div className="sm-account:col-span-5 flex items-center gap-2.5">
                  <FaMapMarkerAlt className="h-4 w-4" />
                  <span className="sm-account:inline hidden">
                    {t("ManageAccount.profilePage.address")}
                  </span>
                </div>
                <span className="sm-account:font-medium sm-account:col-span-7">
                  Đường 3/2, Ninh Kiều, Cần Thơ
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:col-span-4 lg:py-6">
          <Avatar
            size={{
              xs: 100,
              sm: 120,
              md: 120,
              lg: 150,
              xl: 150,
              xxl: 150,
            }}
          />
        </div>
      </div>
      <div className="sm-account:flex-row flex flex-col gap-3 py-6 md:hidden">
        <div className="grow rounded-md bg-orange-400 p-2 text-sm font-medium hover:bg-orange-500">
          <NavLink
            to="/account/edit-profile"
            className="flex w-full flex-nowrap items-center justify-center gap-2.5"
          >
            <FaUserEdit className="h-5 w-5" />
            <span>{t("ManageAccount.editProfile")}</span>
          </NavLink>
        </div>
        <div className="grow rounded-md bg-blue-500 p-2 text-sm font-medium hover:bg-blue-600">
          <NavLink
            to="/account/change-password"
            className="flex w-full flex-nowrap items-center justify-center gap-2.5"
          >
            <MdPassword className="h-5 w-5" />
            <span>{t("ManageAccount.changePassword")}</span>
          </NavLink>
        </div>
        <div className="grow rounded-md bg-red-500 p-2 text-sm font-medium hover:bg-red-600">
          <NavLink
            to="/account/delete"
            className="flex w-full flex-nowrap items-center justify-center gap-2.5"
          >
            <TiUserDelete className="h-5 w-5" />
            <span>{t("ManageAccount.deleteAccount")}</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PersonalPage;
