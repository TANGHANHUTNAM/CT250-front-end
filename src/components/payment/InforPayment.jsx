import { useEffect, useState } from "react";
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
  setFinalPrice,
  setListDishes,
  setNote,
  setReceiverAddress,
  setReceiverName,
  setReceiverPhone,
  setResetOrder,
  setShippingFee,
  setTotalPrice,
  setTotalQuantity,
} from "../../redux/reducer/orderSlice";
import { getMultipleDishes } from "../../services/dishService";
import { createOrder, createUrlPayment } from "../../services/orderService";
import StatusCodes from "../../utils/StatusCodes";
import Input from "../inputs/Input";
import SelectInput from "../inputs/SelectInput";
import Textarea from "../inputs/Textarea";
import { toast } from "react-toastify";

import ModalConfirmPayment from "./ModalConfirmPayment";
import { useNavigate } from "react-router-dom";
import { removeAll } from "../../redux/reducer/cartSlice";

const InforPayment = ({ setIsLoading }) => {
  const navigate = useNavigate();
  const [openModalConfirmPayment, setOpenModalConfirmPayment] = useState(false);
  const provincesShipping = [
    "An Giang",
    "Đồng Tháp",
    "Vĩnh Long",
    "Cần Thơ",
    "Hậu Giang",
    "Kiên Giang",
  ];
  const dispatch = useDispatch();
  // Define the validation schema
  const inforDiliveryForm = yup
    .object({
      receiverName: yup.string().required("Tên không được để trống"),
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

  // Handle the select province, district, and ward
  const handleSelectProvince = (value, props) => {
    setValue("receiverProvince", value);
    setValue("receiverDistrict", null);
    setValue("receiverWard", null);
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
    setValue("receiverDistrict", value);
    setValue("receiverWard", null);
    dispatch(setSelectedDistrict(value));
    dispatch(setDistrictName(props.label));
    dispatch(fetchWardsByDistrictId(value));
    dispatch(setSelectedWard(null));
    dispatch(setWardName(null));
    dispatch(setShippingFee(0));
  };
  const handleSelectWard = (value, props) => {
    setValue("receiverWard", value);
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
      const weight = totalQuantity * 600;
      const data = {
        service_type_id: 2,
        to_district_id: selectedDistrict,
        to_ward_code: selectedWard,
        weight: weight,
      };
      dispatch(fetchFeeShipping(data));
    }
  }, [selectedWard, selectedDistrict, totalQuantity, dispatch]);

  // Calculate the total fee
  const [dishesInfomation, setDishesInfomation] = useState({});
  useEffect(() => {
    if (carts && carts.length > 0) {
      const getDishesForCart = async () => {
        const ids = carts.map((cart) => cart.id);

        const res = await getMultipleDishes(ids);

        if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
          const data = {};
          res?.DT?.forEach((dish) => (data[dish?._id] = dish));
          setDishesInfomation(data);
        }
      };
      getDishesForCart();
    }
  }, [carts, dispatch]);
  useEffect(() => {
    if (carts && carts.length > 0) {
      const list = carts.map((cart) => {
        const information = dishesInfomation?.[cart.id] ?? {};
        const quantity = cart?.quantity ?? 1;
        const totalPrice = +quantity * +information?.discountedPrice;
        return { ...information, quantity, totalPrice };
      });
      dispatch(
        setTotalPrice(
          list?.reduce((total, item) => total + item.totalPrice, 0),
        ),
      );
      dispatch(setListDishes(list));
    }
  }, [carts, dishesInfomation, dispatch]);
  // calculate the Final Fee
  const { totalPrice, shippingFee, totalDiscount, totalDiscountId } =
    useSelector((state) => state.order);
  useEffect(() => {
    if (totalPrice && shippingFee && totalDiscount) {
      dispatch(setFinalPrice(totalPrice + shippingFee - totalDiscount));
    }
    dispatch(setFinalPrice(totalPrice + shippingFee - totalDiscount));
  }, [dispatch, totalPrice, shippingFee, totalDiscount]);

  // Use the useAppForm hook to handle the form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    setValue,
  } = useAppForm(inforDiliveryForm, {
    receiverProvince: selectedProvince,
    receiverDistrict: selectedDistrict,
    receiverWard: selectedWard,
  });
  // Handle the order
  const {
    finalPrice,
    recevierName,
    receiverPhone,
    receiverAddress,
    note,
    listDishes,
    paymentMethod,
  } = useSelector((state) => state.order);
  const { nameWard, nameDistrict, nameProvince } = useSelector(
    (state) => state.address,
  );
  const { id } = useSelector((state) => state.user.account);
  const order = {
    accountId: id,
    couponId: totalDiscountId,
    receiverName: recevierName,
    receiverPhone: receiverPhone,
    receiverAddress: {
      province: nameProvince,
      district: nameDistrict,
      ward: nameWard,
      details: receiverAddress,
    },
    note: note,
    paymentMethodId: paymentMethod?.value,
    shippingFee: shippingFee,
    orderTotal: finalPrice,
    dishes: listDishes?.map((dish) => ({
      id: dish._id,
      quantity: dish.quantity,
    })),
  };

  const [orderCompleted, setOrderCompleted] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  useEffect(() => {
    if (orderCompleted) {
      navigate("/account/purchase");
    }
  }, [orderCompleted, navigate]);
  useEffect(() => {
    if (carts.length === 0 && !orderSubmitted) {
      navigate("/dish");
    }
  }, [carts, navigate, orderSubmitted]);

  const [vnpayUrl, setVnpayUrl] = useState("");
  const handleCreateOrder = async () => {
    setIsLoading(true);
    setOrderSubmitted(true);
    try {
      const res = await createOrder(order);
      if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
        const orderResult = res.DT;
        if (!paymentMethod.isTransfer) {
          dispatch(removeAll());
          toast.success("Đặt hàng thành công");
          setOrderCompleted(true);
        }
        if (paymentMethod.isTransfer) {
          const res = await createUrlPayment({ orderId: orderResult?._id });
          if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
            setVnpayUrl(res.DT.vnpUrl);
            setOpenModalConfirmPayment(true);
          }
          if (res && res.EC !== StatusCodes.SUCCESS_DAFAULT) {
            toast.error(res.EM);
            return;
          }
        }
        dispatch(setResetOrder());
        reset();
      }
      if (res && res.EC !== StatusCodes.SUCCESS_DAFAULT) {
        toast.error(res.EM);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOrder = async (data) => {
    if (data) {
      if (paymentMethod.value === null) {
        toast.error("Vui lòng chọn phương thức thanh toán");
        return;
      }
      if (totalQuantity === 0) {
        toast.error("Vui lòng chọn món ăn");
        return;
      }
      // call api
      handleCreateOrder();
    } else {
      toast.error("Vui lòng nhập đầy đủ thông tin");
    }
  };
  const filteredProvinces = provinces?.filter((province) =>
    provincesShipping.includes(province.ProvinceName),
  );
  return (
    <div className="flex w-full flex-col gap-2 md:w-1/2">
      <div className="text-2xl font-semibold uppercase text-tertiary">
        Thông tin nhận hàng
      </div>
      <div className="form mt-2 h-full">
        <form
          id="form_order"
          onSubmit={handleSubmit(handleOrder)}
          className="flex min-h-full flex-col justify-around gap-3 font-medium text-black/65 md:gap-0"
        >
          <Input
            type="text"
            onChange={(e) => handleReceiverName(e.target.value)}
            placeholder={"Họ và tên*"}
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
            control={control}
            errors={errors}
            value={selectedProvince}
            onChange={handleSelectProvince}
            placeholder={`Tỉnh/Thành phố*`}
            options={filteredProvinces?.map((province) => ({
              value: province.ProvinceID,
              label: province.ProvinceName,
            }))}
          />
          <SelectInput
            className="w-full rounded-sm border bg-white text-sm"
            label="receiverDistrict"
            control={control}
            errors={errors}
            value={selectedDistrict}
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
            errors={errors}
            value={selectedWard}
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
      <ModalConfirmPayment
        vnpayUrl={vnpayUrl}
        setVnpayUrl={setVnpayUrl}
        openModalConfirmPayment={openModalConfirmPayment}
        setOpenModalConfirmPayment={setOpenModalConfirmPayment}
      />
    </div>
  );
};

export default InforPayment;
