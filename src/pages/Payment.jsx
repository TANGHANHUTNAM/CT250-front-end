import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";
import BodyLayout from "../layouts/BodyLayout";
import InforPayment from "../components/payment/InforPayment";
import BillDetetail from "../components/payment/BillDetail";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Coupon from "../components/payment/Coupon";
import StatusCodes from "../utils/StatusCodes";
import { getValidCouponByTotalOrder } from "../services/couponService";

const PaymentPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.payment"));
  useTopPage();

  const [isLoading, setIsLoading] = useState(false);
  const { totalPrice } = useSelector((state) => state.order);
  const [listCoupon, setListCoupon] = useState([]);
  const fetchCouponValidForOrder = async () => {
    try {
      const res = await getValidCouponByTotalOrder(totalPrice);
      if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
        setListCoupon(res.DT);
      }
      if (res && res.EC !== StatusCodes.SUCCESS_DAFAULT) {
        console.log(res.EM);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (totalPrice) fetchCouponValidForOrder();
  }, [totalPrice]);

  return (
    <BodyLayout other={""}>
      <div className="flex flex-col gap-5 py-10">
        <Coupon listCoupon={listCoupon} />
        <div className="flex flex-col justify-between gap-3 rounded-md border-2 border-solid border-tertiary p-5 text-primary md:flex-row md:gap-10">
          <InforPayment setIsLoading={setIsLoading} />
          <BillDetetail listCoupon={listCoupon} isLoading={isLoading} />
        </div>
      </div>
    </BodyLayout>
  );
};

export default PaymentPage;
