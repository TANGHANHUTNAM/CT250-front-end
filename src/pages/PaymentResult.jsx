import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";
import BodyLayout from "../layouts/BodyLayout";
import { removeAll } from "../redux/reducer/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { RxCrossCircled } from "react-icons/rx";
import { getOrderById } from "../services/orderService";
import StatusCodes from "../utils/StatusCodes";
import { formatCurrency } from "../utils/format";

const PaymentResult = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.paymentResult"));
  useTopPage();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    if (cart.length === 0) return;
    dispatch(removeAll());
  }, [cart]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("orderId");
  const code = searchParams.get("code");
  useEffect(() => {
    if (!orderId || !code) {
      navigate("/");
    }
  }, [orderId, code, navigate]);

  useEffect(() => {
    fetchOrderById();
  }, [orderId, code]);

  const [error, setError] = useState(0);
  useEffect(() => {
    console.log(error);
    if (error !== StatusCodes.SUCCESS_DAFAULT) {
      navigate("/");
    }
  }, [error]);
  const [order, setOrder] = useState({});
  const fetchOrderById = async () => {
    try {
      const res = await getOrderById(orderId);
      console.log(res);
      if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
        setOrder(res.DT);
      }
      if (res && res.EC !== StatusCodes.SUCCESS_DAFAULT) {
        setError(res.EC);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BodyLayout>
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <div className="my-8 w-full max-w-screen-md rounded-md bg-white p-10 shadow-md">
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <div className="text-3xl font-semibold">
              {code === "00" ? (
                <span className="text-green-500">Thanh toán thành công!</span>
              ) : (
                <span className="text-red-500">Thanh toán thất bại!</span>
              )}
            </div>
            <div className="text-5xl">
              {code === "00" ? (
                <FaRegCheckCircle className="text-green-500" />
              ) : (
                <RxCrossCircled className="text-red-500" />
              )}
            </div>
            <p className="mt-2 text-gray-600">
              {code === "00"
                ? "Thanh toán đã thực hiện thành công. Tonatra sẽ gửi liên hệ qua mail hoặc số điện thoại để xác nhận đơn hàng."
                : "Thanh toán thất bại. Vui lòng vào trang đơn hàng trong tài khoản để thực hiện lại thanh toán. Trong vòng 15 phút nếu đơn hàng không được thanh toán, đơn hàng sẽ bị hủy."}
            </p>
          </div>

          <div className="mt-4 grid gap-2.5 lg:grid-cols-2">
            <div>
              <p className="font-semibold text-gray-800">Mã đơn hàng</p>
              <p className="text-gray-600">{order?._id}</p>
            </div>

            <div>
              <p className="font-semibold text-gray-800">Trạng thái đơn hàng</p>
              <p className="text-gray-600">{order?.orderStatus}</p>
            </div>

            <div>
              <p className="font-semibold text-gray-800">Họ tên khách hàng</p>
              <p className="text-gray-600">{order?.receiverName}</p>
            </div>

            <div>
              <p className="font-semibold text-gray-800">Số điện thoại</p>
              <p className="text-gray-600">{order?.receiverPhone}</p>
            </div>

            <div>
              <p className="font-semibold text-gray-800">Địa chỉ nhận hàng</p>
              <p className="text-gray-600">{`${order?.receiverAddress?.details ? <>{order?.receiverAddress?.details},</> : ""} ${order?.receiverAddress?.ward}, ${order?.receiverAddress?.district}, ${order?.receiverAddress?.province}`}</p>
            </div>

            <div>
              <p className="font-semibold text-gray-800">
                Hình thức thanh toán
              </p>
              <p className="text-gray-600">{order?.paymentMethod}</p>
            </div>

            <div>
              <p className="font-semibold text-gray-800">Số tiền</p>
              <p className="text-gray-600">
                {formatCurrency(order?.orderTotal)}
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-800">
                Trạng thái thanh toán
              </p>
              <p className="text-gray-600">{order?.paymentStatus}</p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              className="mb-2 mr-2 rounded-md bg-red-500 px-3 py-2 text-white hover:bg-red-600"
              onClick={() => navigate("/dish")}
            >
              Mua món ăn
            </button>
            <button
              className="rounded-md bg-green-500 px-3 py-2 text-white hover:bg-green-600"
              onClick={() => navigate("/account/purchase")}
            >
              Trang đơn hàng
            </button>
          </div>
        </div>
      </div>
    </BodyLayout>
  );
};

export default PaymentResult;
