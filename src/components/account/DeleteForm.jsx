import * as yup from "yup";
import PasswordInput from "../inputs/PassowordInput";
import { useAppForm } from "../../hooks";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ConfirmModal from "../modals/ConfirmModal";
import { useState } from "react";

const formSchema = yup
  .object({
    password: yup
      .string()
      .min(6, "ManageAccount.password_min")
      .max(25, "ManageAccount.password_max")
      .required("ManageAccount.required_password"),
  })
  .required();

const DeleteForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useAppForm(formSchema);

  const { t } = useTranslation();

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleDelete = (data) => {
    console.log(data);
    setShowConfirmModal(true);
  };

  return (
    <>
      <div className="w-full space-y-6">
        <p className="text-center font-semibold uppercase">
          {t("ManageAccount.deleteAccountPage.verify_identity")}
        </p>
        <form
          className="w-full space-y-4"
          onSubmit={handleSubmit(handleDelete)}
        >
          <input hidden autoComplete="username" />
          <PasswordInput
            placeholder={t("ManageAccount.deleteAccountPage.password")}
            className="w-full rounded border-b-2 border-tertiary bg-primary px-3 py-2 text-sm text-gray-900 outline-none"
            label="password"
            register={register}
            errors={errors}
            errorStyle={{ borderBottomColor: "red" }}
            showPwd={{
              iconClass:
                "absolute right-3 top-1/2 -translate-y-1/2 text-base text-gray-400 cursor-pointer hover:text-gray-500",
            }}
            translation={true}
          />
          <div className="flex justify-center gap-4">
            <Link
              to="/account"
              className="cursor-pointer rounded-md bg-gray-50 px-4 py-2 text-sm font-semibold text-black hover:bg-gray-200"
            >
              {t("ManageAccount.deleteAccountPage.cancel")}
            </Link>
            <button
              type="submit"
              className="cursor-pointer rounded-md bg-tertiary px-4 py-2 text-sm font-semibold hover:bg-yellow-600"
            >
              {t("ManageAccount.deleteAccountPage.continue")}
            </button>
          </div>
        </form>
      </div>

      <ConfirmModal
        show={showConfirmModal}
        handleOk={() => setShowConfirmModal(false)}
        handleCancel={() => setShowConfirmModal(false)}
        content={t("ManageAccount.deleteAccountPage.finishConfirm")}
      />
    </>
  );
};

export default DeleteForm;
