import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { useAppForm } from "../../hooks";
import {
  fetchDistricsByProvinceId,
  fetchProvinces,
  fetchWardsByDistrictId,
  resetWard,
  setDistrictName,
  setProvinceName,
  setSelectedDistrict,
  setSelectedProvince,
  setSelectedWard,
  setWardName,
} from "../../redux/reducer/addressSlice";
import {
  fetchFeeShipping,
  setNote,
  setReceiverAddress,
  setReceiverName,
  setReceiverPhone,
  setShippingFee,
  setTotalQuantity,
} from "../../redux/reducer/orderSlice";
import Input from "../inputs/Input";
import SelectInput from "../inputs/SelectInput";
import Textarea from "../inputs/Textarea";

const InforPayment = () => {
  const dispatch = useDispatch();
  // Define the validation schema
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
  // Use the useAppForm hook to handle the form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useAppForm(inforDiliveryForm);

  // Fetch the provinces
  useEffect(() => {
    dispatch(fetchProvinces());
  }, [dispatch]);

  const {
    provinces,
    districts,
    wards,
    selectedProvince,
    selectedDistrict,
    selectedWard,
  } = useSelector((state) => state.address);
  const { fullname, phoneNumber, address } = useSelector(
    (state) => state.user.account,
  );
  // Handle the select province, district, and ward
  const handleSelectProvince = (value, props) => {
    dispatch(setSelectedProvince(value));
    dispatch(setProvinceName(props.label));
    dispatch(fetchDistricsByProvinceId(value));
    dispatch(setSelectedDistrict(null));
    dispatch(setDistrictName(null));
    dispatch(setSelectedWard(null));
    dispatch(setWardName(null));
    dispatch(resetWard());
    dispatch(setShippingFee(0));
  };
  const handleSelectDistrict = (value, props) => {
    dispatch(setSelectedDistrict(value));
    dispatch(setDistrictName(props.label));
    dispatch(fetchWardsByDistrictId(value));
    dispatch(setSelectedWard(null));
    dispatch(setWardName(null));
    dispatch(setShippingFee(0));
  };
  const handleSelectWard = (value, props) => {
    dispatch(setSelectedWard(value));
    dispatch(setWardName(props.label));
  };
  const handleReceiverName = (value) => {
    dispatch(setReceiverName(value));
  };
  const handleReceiverPhone = (value) => {
    dispatch(setReceiverPhone(value));
  };
  const handleReceiverAddress = (value) => {
    dispatch(setReceiverAddress(value));
  };
  const handleNote = (value) => {
    dispatch(setNote(value));
  };
  useEffect(() => {
    if (fullname) {
      handleReceiverName(fullname);
    }
    if (phoneNumber) {
      handleReceiverPhone(phoneNumber);
    }
    if (address) {
      handleReceiverAddress(address);
    }
  }, []);
  // Caclulate fee shipping
  const { totalQuantity } = useSelector((state) => state.order);
  const carts = useSelector((state) => state.cart);
  useEffect(() => {
    if (carts && carts.length > 0) {
      const totalQuantity = carts.reduce(
        (total, cart) => total + cart.quantity,
        0,
      );
      dispatch(setTotalQuantity(totalQuantity));
    }
  }, [carts, dispatch]);
  useEffect(() => {
    if (selectedWard && selectedDistrict && totalQuantity > 0) {
      const weight = totalQuantity * 500;
      const data = {
        service_type_id: 2,
        to_district_id: selectedDistrict,
        to_ward_code: selectedWard,
        weight: weight,
      };
      dispatch(fetchFeeShipping(data));
    }
  }, [selectedWard, selectedDistrict, totalQuantity, dispatch]);

  return (
    <div className="flex w-full flex-col gap-2 md:w-1/2">
      <div className="text-2xl font-semibold uppercase text-tertiary">
        Thông tin nhận hàng
      </div>
      <div className="form mt-2">
        <form className="flex flex-col gap-3 font-medium text-black/65">
          <Input
            type="text"
            onChange={(e) => handleReceiverName(e.target.value)}
            placeholder={"Họ và tên*"}
            defaultValue={fullname}
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
            placeholder={"Số điện thoại*"}
            onChange={(e) => handleReceiverPhone(e.target.value)}
            defaultValue={phoneNumber}
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
            onChange={(e) => handleReceiverAddress(e.target.value)}
            label="receiverAddressOption"
            defaultValue={address}
            autoComplete="receiverAddressOption"
            className="w-full rounded-sm border px-3 py-2 text-sm outline-none"
            register={register}
            errors={errors}
            errorStyle={{ borderBottomColor: "red" }}
            translation={true}
          />
          <SelectInput
            className="w-full rounded-sm border bg-white text-sm"
            label="receiverProvince"
            value={selectedProvince}
            control={control}
            errors={errors}
            onChange={handleSelectProvince}
            placeholder={`Tỉnh/Thành phố*`}
            options={provinces?.map((province) => ({
              value: province.ProvinceID,
              label: province.ProvinceName,
            }))}
          />
          <SelectInput
            className="w-full rounded-sm border bg-white text-sm"
            label="receiverDistrict"
            value={selectedDistrict}
            control={control}
            errors={errors}
            onChange={handleSelectDistrict}
            placeholder={"Quận/Huyện*"}
            options={districts?.map((district) => ({
              value: district.DistrictID,
              label: district.DistrictName,
            }))}
          />
          <SelectInput
            className="w-full rounded-sm border bg-white text-sm"
            label="receiverWard"
            control={control}
            value={selectedWard}
            errors={errors}
            onChange={handleSelectWard}
            placeholder={"Phường/Xã*"}
            options={wards?.map((ward) => ({
              value: ward.WardCode,
              label: ward.WardName,
            }))}
          />
          <Textarea
            type="text"
            placeholder={"Ghi chú..."}
            onChange={(e) => handleNote(e.target.value)}
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

export default InforPayment;
