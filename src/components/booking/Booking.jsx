import * as yup from "yup";
import Input from "../inputs/Input";
import InputDate from "../inputs/InputDate";
import { useAppForm } from "../../hooks";
import "./Booking.css";
import { useTranslation } from "react-i18next";
const Booking = () => {
  const { t } = useTranslation();
  const bookingFormSchema = yup
    .object({
      fullname: yup.string().required(t("Booking.required_fullName")),
      email: yup
        .string()
        .email(t("Booking.invalid_email"))
        .required(t("Booking.required_email")),
      phone: yup
        .string()
        .matches(/^[0-9]{10}$/, t("Booking.invalid_phoneNumber"))
        .required(t("Booking.required_phoneNumber")),
      number: yup
        .number()
        .transform((value, originalValue) =>
          originalValue === "" ? undefined : value,
        )
        .min(1, t("Booking.invalidMinNumber"))
        .max(10, t("Booking.invalidMaxNumber"))
        .required(t("Booking.required_numberOfPeople")),
      arrivalDate: yup.string().required(t("Booking.required_arrivalDate")),
      arrivalTime: yup.string().required(t("Booking.required_arrivalTime")),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useAppForm(bookingFormSchema);

  const handleBooking = async (data) => {
    console.log(data);
  };

  return (
    <div className="bg-bgPrimary p-6">
      <div className="bg-image-main mx-auto flex max-w-screen-xl flex-col items-center justify-center rounded-2xl bg-booking sm:px-8 sm:py-6">
        <div className="main-booking w-full rounded-xl bg-bgPrimary p-4 md:w-3/4 lg:w-[55%]">
          <div className="booking-title py-4 text-center font-dancingscript text-3xl text-primary md:text-5xl">
            <p>{t("Booking.title")}</p>
          </div>
          <form
            onSubmit={handleSubmit(handleBooking)}
            className="form-booking mt-3 space-y-4 text-sm text-primary"
          >
            <div className="flex flex-col gap-4 md:flex-row md:gap-3">
              <div className="w-full md:w-1/2">
                <label className="font-semibold">
                  {t("Booking.label_fullName")}
                </label>
                <Input
                  type="text"
                  placeholder={t("Booking.input_fullName")}
                  label="fullname"
                  autoComplete="fullname"
                  className="mt-1 w-full rounded-md border-b-2 border-tertiary px-4 py-2.5 text-secondary outline-none"
                  register={register}
                  errors={errors}
                  errorStyle={{ borderBottomColor: "red" }}
                  translation={true}
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="font-semibold">
                  {t("Booking.label_email")}
                </label>
                <Input
                  type="email"
                  placeholder={t("Booking.input_email")}
                  label="email"
                  autoComplete="email"
                  className="mt-1 w-full rounded-md border-b-2 border-tertiary px-4 py-2.5 text-secondary outline-none"
                  register={register}
                  errors={errors}
                  errorStyle={{ borderBottomColor: "red" }}
                  translation={true}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:gap-3">
              <div className="w-full md:w-1/2">
                <label className="font-semibold">
                  {t("Booking.label_phoneNumber")}
                </label>
                <Input
                  type="text"
                  placeholder={t("Booking.input_phoneNumber")}
                  label="phone"
                  autoComplete="phone"
                  className="mt-1 w-full rounded-md border-b-2 border-tertiary px-4 py-2.5 text-secondary outline-none"
                  register={register}
                  errors={errors}
                  errorStyle={{ borderBottomColor: "red" }}
                  translation={true}
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="font-semibold">
                  {t("Booking.label_number")}
                </label>
                <Input
                  type="number"
                  placeholder={t("Booking.input_number")}
                  label="number"
                  autoComplete="number"
                  className="mt-1 w-full rounded-md border-b-2 border-tertiary px-4 py-2.5 text-secondary outline-none"
                  register={register}
                  errors={errors}
                  errorStyle={{ borderBottomColor: "red" }}
                  translation={true}
                  min={1}
                  max={10}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:gap-3">
              <div className="w-full md:w-1/2">
                <label className="font-semibold">
                  {t("Booking.label_arrivalDate")}
                </label>
                <InputDate
                  label="arrivalDate"
                  className="mt-1 w-full rounded-md border-0 !border-b-2 border-tertiary px-4 py-2.5 text-secondary outline-none hover:border-tertiary"
                  control={control} // Đảm bảo rằng thuộc tính control được truyền vào đây
                  errors={errors}
                  errorStyle={{ borderBottomColor: "red" }}
                  translation={true}
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="font-semibold">
                  {t("Booking.label_arrivalTime")}
                </label>
                <Input
                  type="time"
                  placeholder=""
                  label="arrivalTime"
                  autoComplete="arrivalTime"
                  className="mt-1 w-full rounded-md border-b-2 border-tertiary px-4 py-2.5 text-secondary outline-none"
                  register={register}
                  errors={errors}
                  errorStyle={{ borderBottomColor: "red" }}
                  translation={true}
                />
              </div>
            </div>
            <div className="!mt-6 text-center font-medium">
              {t("Booking.content_1")}
              <a className="text-tertiary" href="tel:0292 3831 530">
                0292 3831 530
              </a>
            </div>
            <div className="!mb-3 !mt-4 flex justify-center">
              <button className="btn-booking w-fit rounded-lg bg-tertiary px-3 py-2.5 font-semibold text-primary hover:bg-yellow-600">
                {t("Booking.button")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Booking;
