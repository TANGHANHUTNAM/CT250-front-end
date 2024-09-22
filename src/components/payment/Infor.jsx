import Input from "../inputs/Input";
import * as yup from "yup";
import { useAppForm } from "../../hooks";
import Textarea from "../inputs/Textarea";
const Infor = () => {
  const inforDiliveryForm = yup
    .object({
      receiverName: yup.string().required("Invalid Name"),
      receiverPhone: yup
        .string()
        .matches(/^[0-9]{10}$/, "Invalid Phone Number")
        .required("Invalid Phone Number"),
      receiverAddressOption: yup.string().max(255, "Invalid Address"),
      receiverProvince: yup.string().required("Invalid Province"),
      receiverDistrict: yup.string().required("Invalid District"),
      receiverWard: yup.string().required("Invalid Ward"),
      Note: yup.string(),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useAppForm(inforDiliveryForm);

  return (
    <div className="flex w-full flex-col gap-2 md:w-1/2">
      <div className="text-2xl font-semibold uppercase text-tertiary">
        Thông tin nhận hàng
      </div>
      <div className="form mt-2">
        <form className="flex flex-col gap-3 font-medium text-black/65">
          <Input
            type="text"
            placeholder={"Họ và tên"}
            label="receiverName"
            autoComplete="receiverName"
            className="w-full rounded-sm border px-3 py-2 text-sm outline-none"
            register={register}
            errors={errors}
            errorStyle={{ borderBottomColor: "red" }}
            translation={true}
          />
          <Input
            type="text"
            placeholder={"Số điện thoại"}
            label="receiverPhone"
            autoComplete="receiverPhone"
            className="w-full rounded-sm border px-3 py-2 text-sm outline-none"
            register={register}
            errors={errors}
            errorStyle={{ borderBottomColor: "red" }}
            translation={true}
          />
          <Input
            type="text"
            placeholder={"Địa chỉ cụ thể (số nhà, tên đường)"}
            label="receiverAddressOption"
            autoComplete="receiverAddressOption"
            className="w-full rounded-sm border px-3 py-2 text-sm outline-none"
            register={register}
            errors={errors}
            errorStyle={{ borderBottomColor: "red" }}
            translation={true}
          />
          <Input
            type="text"
            placeholder={"Tỉnh/Thành phố"}
            label="receiverProvince"
            autoComplete="receiverProvince"
            className="w-full rounded-sm border px-3 py-2 text-sm outline-none"
            register={register}
            errors={errors}
            errorStyle={{ borderBottomColor: "red" }}
            translation={true}
          />
          <Input
            type="text"
            placeholder={"Quận/Huyện"}
            label="receiverDistrict"
            autoComplete="receiverDistrict"
            className="w-full rounded-sm border px-3 py-2 text-sm outline-none"
            register={register}
            errors={errors}
            errorStyle={{ borderBottomColor: "red" }}
            translation={true}
          />
          <Input
            type="text"
            placeholder={"Phường/Xã"}
            label="receiverWard"
            autoComplete="receiverWard"
            className="w-full rounded-sm border px-3 py-2 text-sm outline-none"
            register={register}
            errors={errors}
            errorStyle={{ borderBottomColor: "red" }}
            translation={true}
          />
          <Textarea
            type="text"
            placeholder={"Ghi chú..."}
            label="Note"
            autoComplete="Note"
            className="w-full rounded-sm border px-3 py-2 text-sm outline-none"
            register={register}
            errors={errors}
            errorStyle={{ borderBottomColor: "red" }}
            translation={true}
            rows={4}
          />
        </form>
      </div>
    </div>
  );
};

export default Infor;
