import * as yup from "yup";
import PasswordInput from "../inputs/PassowordInput";
import { useTranslation } from "react-i18next";
import { useAppForm } from "../../hooks";
import { Link, useNavigate } from "react-router-dom";
import { changePassword } from "../../services/accountService";
import { useDispatch, useSelector } from "react-redux";
import StatusCodes from "../../utils/StatusCodes";
import { logoutSuccess } from "../../redux/reducer/userSlice";
import { toast } from "react-toastify";

const formSchema = yup
  .object({
    currentPassword: yup
      .string()
      .min(6, "ManageAccount.password_min")
      .max(25, "ManageAccount.password_max")
      .required("ManageAccount.required_password"),
    newPassword: yup
      .string()
      .min(6, "ManageAccount.password_min")
      .max(25, "ManageAccount.password_max")
      .required("ManageAccount.required_password")
      .test(
        "different_current_password",
        "ManageAccount.different_current_password",
        function (value) {
          const { currentPassword } = this.parent;
          return value !== currentPassword;
        },
      ),
    confirmNewPassword: yup
      .string()
      .oneOf(
        [yup.ref("newPassword")],
        "ManageAccount.confirm_password_not_match",
      )
      .required("ManageAccount.required_confirm_password"),
  })
  .required();

const ChangePasswordForm = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useAppForm(formSchema);

  const {
    account: { id },
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangePassword = async (data) => {
    const res = await changePassword(id, data);

    if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
      dispatch(logoutSuccess());
      toast.success("Mật khẩu đã được thay đổi thành công!");
      navigate("/login");
    }

    if (res && res.EC === StatusCodes.ERROR_DEFAULT) {
      toast.error(res.EM);
    }
  };

  return (
    <div className="w-full">
      <form
        id="change_password"
        className="w-full space-y-5"
        onSubmit={handleSubmit(handleChangePassword)}
      >
        <input hidden autoComplete="username" />
        <div className="flex flex-col gap-1.5 font-medium sm:flex-row sm:items-start sm:gap-8">
          <label className="text-sm sm:w-2/5 sm:text-right md:w-1/2 lg:w-5/12">
            {t("ManageAccount.changePasswordPage.currentPassword")}
          </label>
          <PasswordInput
            className="w-full rounded border-b-2 border-tertiary bg-primary px-3 py-2 text-sm text-gray-900 outline-none"
            label="currentPassword"
            register={register}
            errors={errors}
            errorStyle={{ borderBottomColor: "red" }}
            showPwd={{
              iconClass:
                "absolute right-3 top-1/2 -translate-y-1/2 text-base text-gray-400 cursor-pointer hover:text-gray-500",
            }}
            translation={true}
          />
        </div>
        <div className="flex flex-col gap-1.5 font-medium sm:flex-row sm:items-start sm:gap-8">
          <label className="text-sm sm:w-2/5 sm:text-right md:w-1/2 lg:w-5/12">
            {t("ManageAccount.changePasswordPage.newPassword")}
          </label>
          <PasswordInput
            className="w-full rounded border-b-2 border-tertiary bg-primary px-3 py-2 text-sm text-gray-900 outline-none"
            label="newPassword"
            register={register}
            errors={errors}
            errorStyle={{ borderBottomColor: "red" }}
            showPwd={{
              iconClass:
                "absolute right-3 top-1/2 -translate-y-1/2 text-base text-gray-400 cursor-pointer hover:text-gray-500",
            }}
            translation={true}
          />
        </div>
        <div className="flex flex-col gap-1.5 font-medium sm:flex-row sm:items-start sm:gap-8">
          <label className="text-sm sm:w-2/5 sm:text-right md:w-1/2 lg:w-5/12">
            {t("ManageAccount.changePasswordPage.confirmPassword")}
          </label>
          <PasswordInput
            className="w-full rounded border-b-2 border-tertiary bg-primary px-3 py-2 text-sm text-gray-900 outline-none"
            label="confirmNewPassword"
            register={register}
            errors={errors}
            errorStyle={{ borderBottomColor: "red" }}
            showPwd={{
              iconClass:
                "absolute right-3 top-1/2 -translate-y-1/2 text-base text-gray-400 cursor-pointer hover:text-gray-500",
            }}
            translation={true}
          />
        </div>
      </form>
      <div className="mt-8 flex flex-col gap-3 sm:mx-auto sm:w-2/3 sm:flex-row sm:items-center sm:gap-4 md:w-full md:flex-row-reverse md:gap-8">
        <div className="w-full">
          <button
            type="submit"
            form="change_password"
            className="w-full rounded-md bg-tertiary px-4 py-2 text-sm font-semibold hover:bg-[#d6861f]"
          >
            {t("ManageAccount.changePasswordPage.updatePassword")}
          </button>
        </div>
        <div className="w-full text-center sm:text-left md:w-1/2 md:text-right lg:w-5/12">
          <Link to="/reset-password">
            <span className="text-sm font-medium text-gray-200 hover:text-tertiary">
              {t("ManageAccount.changePasswordPage.forgotPassword")}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
