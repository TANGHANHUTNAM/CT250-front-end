import * as yup from "yup";
import PasswordInput from "../inputs/PassowordInput";
import { useAppForm } from "../../hooks";

const formSchema = yup
  .object({
    password: yup
      .string()
      .min(6, "ManageAccount.deleteAccountPage.password_min")
      .max(25, "ManageAccount.deleteAccountPage.password_max")
      .required("ManageAccount.deleteAccountPage.required_password"),
  })
  .required();

const DeleteForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useAppForm(formSchema);

  return (
    <div className="w-full space-y-6">
      <p className="text-center font-semibold uppercase">Xác minh danh tính</p>
      <form className="w-full space-y-6">
        <input hidden autoComplete="username" />
        <PasswordInput
          placeholder="Password"
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
          <button
            type="button"
            className="cursor-pointer rounded-md bg-gray-50 px-4 py-2 text-sm font-semibold text-black hover:bg-gray-200"
          >
            Hủy
          </button>
          <button
            type="submit"
            className="cursor-pointer rounded-md bg-tertiary px-4 py-2 text-sm font-semibold hover:bg-yellow-600"
          >
            Tiếp tục
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeleteForm;
