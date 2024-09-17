import * as yup from "yup";
import { useAppForm } from "../../hooks";
import Avatar from "../avatar/Avatar";
import Input from "../inputs/Input";
import Radio from "../inputs/Radio";
import InputDate from "../inputs/InputDate";
import TextArea from "../inputs/Textarea";
import { Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const formSchema = yup
  .object({
    username: yup
      .string()
      .required("ManageAccount.editProfilePage.required_username"),
    fullname: yup.string(),
    phoneNumber: yup.string(),
    gender: yup.string(),
    birthday: yup.string(),
    address: yup.string(),
  })
  .required();

const EditProfileForm = ({}) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useAppForm(formSchema, {
    username: "",
    fullname: "",
    phoneNumber: "",
    gender: "",
    birthday: "",
    address: "",
    avatar: null,
  });

  const avatar = watch("avatar");
  const [avtPreview, setAvtPreview] = useState();

  useEffect(() => {
    if (avatar) {
      setAvtPreview(URL.createObjectURL(avatar));
    }

    return () => {
      if (avatar) {
        URL.revokeObjectURL(avtPreview);
      }
    };
  }, [avatar]);

  const handleSaveProfile = (data) => {
    console.log(data);
  };

  const handleRemoveAvatar = () => {
    URL.revokeObjectURL(avtPreview);
    setAvtPreview(null);
    setValue("avatar", null);
  };

  const { t } = useTranslation();

  return (
    <div className="space-y-12">
      <form
        id="edit_profile"
        className="w-full text-sm"
        onSubmit={handleSubmit(handleSaveProfile)}
      >
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:gap-2 lg:divide-x lg:divide-solid lg:divide-white/10">
          <div className="space-y-6 sm-account:space-y-8 lg:col-span-8 lg:pr-6">
            <div className="flex flex-col gap-1.5 sm-account:flex-row sm-account:gap-6">
              <label className="font-medium after:ml-0.5 after:text-red-500 after:content-['*'] sm-account:w-2/5 sm-account:text-right sm:w-1/3">
                {t("ManageAccount.editProfilePage.username")}
              </label>
              <Input
                label="username"
                register={register}
                errors={errors}
                errorStyle={{ borderBottomColor: "red" }}
                className="w-full rounded border-b-2 border-tertiary bg-primary px-3 py-2 text-sm text-gray-900 outline-none"
                translation={true}
              />
            </div>
            <div className="flex flex-col gap-1.5 sm-account:flex-row sm-account:gap-6">
              <label className="font-medium sm-account:w-2/5 sm-account:text-right sm:w-1/3">
                {t("ManageAccount.editProfilePage.fullName")}
              </label>
              <Input
                label="fullname"
                register={register}
                className="w-full rounded border-b-2 border-tertiary bg-primary px-3 py-2 text-sm text-gray-900 outline-none"
              />
            </div>
            <div className="flex flex-col gap-1.5 sm-account:flex-row sm-account:gap-6">
              <label className="font-medium sm-account:w-2/5 sm-account:text-right sm:w-1/3">
                {t("ManageAccount.editProfilePage.phone")}
              </label>
              <Input
                label="phoneNumber"
                register={register}
                className="w-full rounded border-b-2 border-tertiary bg-primary px-3 py-2 text-sm text-gray-900 outline-none"
              />
            </div>
            <div className="flex flex-col gap-1.5 sm-account:flex-row sm-account:gap-6">
              <label className="font-medium sm-account:w-2/5 sm-account:text-right sm:w-1/3">
                {t("ManageAccount.editProfilePage.gender")}
              </label>
              <Radio
                label="gender"
                control={control}
                options={[
                  {
                    label: "ManageAccount.editProfilePage.male",
                    value: "male",
                  },
                  {
                    label: "ManageAccount.editProfilePage.female",
                    value: "female",
                  },
                  {
                    label: "ManageAccount.editProfilePage.other",
                    value: "other",
                  },
                ]}
                translation={true}
              />
            </div>
            <div className="flex flex-col gap-1.5 sm-account:flex-row sm-account:gap-6">
              <label className="font-medium sm-account:w-2/5 sm-account:text-right sm:w-1/3">
                {t("ManageAccount.editProfilePage.birthday")}
              </label>
              <InputDate
                label="birthday"
                control={control}
                className="w-full rounded-md border-0 !border-b-2 border-tertiary px-3 py-2 text-secondary outline-none hover:border-tertiary"
              />
            </div>
            <div className="flex flex-col gap-1.5 sm-account:flex-row sm-account:gap-6">
              <label className="font-medium sm-account:w-2/5 sm-account:text-right sm:w-1/3">
                {t("ManageAccount.editProfilePage.address")}
              </label>
              <TextArea
                label="address"
                register={register}
                spellCheck={false}
                className="w-full rounded-md border-0 !border-b-2 border-tertiary px-3 py-2 text-secondary outline-none hover:border-tertiary"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 lg:col-span-4 lg:py-6 lg:pl-6">
            <Avatar
              size={{
                xs: 95,
                sm: 120,
                md: 120,
                lg: 120,
                xl: 120,
                xxl: 120,
              }}
              src={avtPreview}
            />
            <div className="space-x-2.5">
              <Controller
                name="avatar"
                control={control}
                render={({ field }) => (
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    id="upload_avatar"
                    onChange={(e) => field.onChange(e.target.files[0])}
                  />
                )}
              />
              <label
                htmlFor="upload_avatar"
                className="cursor-pointer rounded-md bg-primary px-4 py-2.5 font-medium text-gray-700 hover:bg-gray-100"
              >
                {t("ManageAccount.editProfilePage.upload")}
              </label>
              <label
                className="cursor-pointer rounded-md bg-gray-100 px-4 py-2.5 font-medium text-gray-700 hover:bg-gray-200"
                onClick={() => handleRemoveAvatar()}
              >
                {t("ManageAccount.editProfilePage.noAvt")}
              </label>
            </div>
            <p>{t("ManageAccount.editProfilePage.format")}</p>
          </div>
        </div>
      </form>
      <div className="w-full sm-account:flex sm-account:justify-center">
        <button
          form="edit_profile"
          className="w-full rounded-md bg-tertiary px-4 py-2 text-sm font-semibold hover:bg-yellow-600 sm-account:w-1/2 lg:w-fit lg:px-8"
        >
          {t("ManageAccount.editProfilePage.save")}
        </button>
      </div>
    </div>
  );
};

export default EditProfileForm;
