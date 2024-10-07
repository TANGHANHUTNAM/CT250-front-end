import EditProfileForm from "../components/account/EditProfileForm";
import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserInformation } from "../services/accountService";
import StatusCodes from "../utils/StatusCodes";

const EditProfilePage = () => {
  const { t } = useTranslation();

  useDynamicTitle(t("BreadcrumbsAndTitle.my_account.edit_profile"));
  useTopPage();

  const [information, setInformation] = useState();

  const { id } = useSelector((state) => state.user.account);

  useEffect(() => {
    const getAccountInformation = async () => {
      const res = await getUserInformation(id);

      if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
        setInformation(res.DT);
      }
    };

    getAccountInformation();
  }, []);

  return (
    <div className="divide-y divide-solid divide-white/10 px-2 text-primary md:px-6">
      <div className="py-4">
        <p className="text-lg font-bold">
          {t("ManageAccount.editProfilePage.title")}
        </p>
      </div>
      <div className="py-6">
        {information && <EditProfileForm profile={information} />}
      </div>
    </div>
  );
};

export default EditProfilePage;
