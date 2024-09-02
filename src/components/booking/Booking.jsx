import * as yup from "yup";
import Input from "../inputs/Input";
import InputDate from "../inputs/InputDate";
import { useAppForm } from "../../hooks";
import "./Booking.css";

const Booking = () => {
  const bookingFormSchema = yup
    .object({
      fullname: yup.string().required("Họ và tên không được để trống"),
      email: yup
        .string()
        .email("Email không hợp lệ")
        .required("Email không được để trống"),
      phone: yup
        .string()
        .matches(/^[0-9]{10}$/, "Số điện thoại không hợp lệ")
        .required("Số điện thoại không được để trống"),
      number: yup
        .number()
        .min(1, "Số lượng người tối thiểu là 1")
        .max(10, "Số lượng người tối đa là 10")
        .required("Số lượng người không được để trống"),
      arrivalDate: yup
        .string()
        .required("Ngày đến nhận bàn không được để trống"),
      arrivalTime: yup
        .string()
        .required("Thời gian nhận bàn không được để trống"),
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
      <div className="bg-image-main mx-auto flex max-w-screen-xl flex-col items-center justify-center rounded-2xl bg-booking px-8 py-6">
        <div className="main-booking w-full rounded-xl bg-bgPrimary p-4 md:max-h-[477px] md:overflow-y-auto lg:w-1/2">
          <div className="booking-title py-4 text-center font-dancingscript text-3xl text-primary md:text-5xl">
            <p>Liên hệ đặt bàn</p>
          </div>
          <form
            onSubmit={handleSubmit(handleBooking)}
            className="form-booking text-primary"
          >
            <div className="mt-2 flex flex-col gap-3 md:flex-row">
              <div className="w-full md:w-1/2">
                <label className="font-semibold">Họ và tên:</label>
                <Input
                  type="text"
                  placeholder={"Nhập họ và tên"}
                  label="fullname"
                  autoComplete="fullname"
                  className="mt-2 w-full rounded-md border border-tertiary px-4 py-2 text-secondary outline-none"
                  register={register}
                  errors={errors}
                  errorStyle={{ borderBottomColor: "red" }}
                  translation={true}
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="font-semibold">Email:</label>
                <Input
                  type="email"
                  placeholder={"Nhập email"}
                  label="email"
                  autoComplete="email"
                  className="mt-2 w-full rounded-md border border-tertiary px-4 py-2 text-secondary outline-none"
                  register={register}
                  errors={errors}
                  errorStyle={{ borderBottomColor: "red" }}
                  translation={true}
                />
              </div>
            </div>
            <div className="mt-2 flex flex-col gap-3 md:flex-row">
              <div className="w-full md:w-1/2">
                <label className="font-semibold">Số điện thoại:</label>
                <Input
                  type="text"
                  placeholder={"Nhập số điện thoại"}
                  label="phone"
                  autoComplete="phone"
                  className="mt-2 w-full rounded-md border border-tertiary px-4 py-2 text-secondary outline-none"
                  register={register}
                  errors={errors}
                  errorStyle={{ borderBottomColor: "red" }}
                  translation={true}
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="font-semibold">Số lượng người:</label>
                <Input
                  type="number"
                  placeholder={"Nhập số lượng"}
                  label="number"
                  autoComplete="number"
                  className="mt-2 w-full rounded-md border border-tertiary px-4 py-2 text-secondary outline-none"
                  register={register}
                  errors={errors}
                  errorStyle={{ borderBottomColor: "red" }}
                  translation={true}
                  min={1}
                  max={10}
                />
              </div>
            </div>
            <div className="mt-2 flex flex-col gap-3 md:flex-row">
              <div className="w-full md:w-1/2">
                <label className="font-semibold">Ngày đến nhận bàn:</label>
                <InputDate
                  label="arrivalDate"
                  control={control} // Đảm bảo rằng thuộc tính control được truyền vào đây
                  errors={errors}
                  translation={true}
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="font-semibold">Thời gian nhận bàn:</label>
                <Input
                  type="time"
                  placeholder=""
                  label="arrivalTime"
                  autoComplete="arrivalTime"
                  className="mt-2 w-full rounded-md border border-tertiary px-4 py-2 text-secondary outline-none"
                  register={register}
                  errors={errors}
                  errorStyle={{ borderBottomColor: "red" }}
                  translation={true}
                />
              </div>
            </div>
            <div className="mt-5 text-center font-medium">
              Hoặc liên hệ trực tiếp qua:{" "}
              <a className="text-tertiary" href="tel:0292 3831 530">
                0292 3831 530
              </a>
            </div>
            <div className="mb-3 mt-5 flex justify-center">
              <button className="btn-booking w-fit rounded-lg bg-tertiary px-3 py-2 font-semibold text-primary hover:bg-yellow-600">
                Đặt bàn ngay
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Booking;
