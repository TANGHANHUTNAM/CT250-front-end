import { useState } from "react";
import Checkbox from "../inputs/Checkbox";
import { useTranslation } from "react-i18next";

const DeleteConfirmation = ({ setIsConfirmed }) => {
  const [agreement, setAgreement] = useState(false);

  const { t } = useTranslation();

  return (
    <div className="w-full space-y-8">
      <div className="space-y-3 text-sm">
        <div>{t("ManageAccount.deleteAccountPage.confirmation.confirm_0")}</div>
        <ul className="list-decimal space-y-3 pl-8">
          <li>{t("ManageAccount.deleteAccountPage.confirmation.confirm_1")}</li>
          <li>{t("ManageAccount.deleteAccountPage.confirmation.confirm_2")}</li>
          <li>{t("ManageAccount.deleteAccountPage.confirmation.confirm_3")}</li>
          <li>{t("ManageAccount.deleteAccountPage.confirmation.confirm_4")}</li>
        </ul>
      </div>
      <div className="flex items-center gap-2.5">
        <Checkbox
          id="confirm_delete_checkbox"
          checked={agreement}
          onChange={(e) => setAgreement(e.target.checked)}
        />
        <label
          htmlFor="confirm_delete_checkbox"
          className="text-sm font-semibold"
        >
          {t("ManageAccount.deleteAccountPage.confirmation.isAgreed")}
        </label>
      </div>
      <div className="flex justify-end lg:justify-start">
        <button
          className="cursor-pointer rounded-md bg-tertiary px-8 py-2.5 text-center text-sm font-medium hover:bg-yellow-600 disabled:cursor-not-allowed disabled:bg-tertiary disabled:opacity-75 disabled:hover:bg-tertiary"
          disabled={!agreement}
          onClick={() => setIsConfirmed(true)}
        >
          {t("ManageAccount.deleteAccountPage.confirmation.delete")}
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
