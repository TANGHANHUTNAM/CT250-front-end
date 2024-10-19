import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";
import BodyLayout from "../layouts/BodyLayout";
import InforPayment from "../components/payment/InforPayment";
import BillDetetail from "../components/payment/BillDetail";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Coupon from "../components/payment/Coupon";

const PaymentPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.payment"));
  useTopPage();
  const navigate = useNavigate();

  const carts = useSelector((state) => state.cart);
  useEffect(() => {
    if (carts.length === 0) {
      navigate("/dish");
    }
  }, [carts, navigate]);

  return (
    <BodyLayout other={""}>
      <div className="flex flex-col gap-5 py-10">
        <Coupon />
        <div className="flex flex-col justify-between gap-3 rounded-md border-2 border-solid border-tertiary p-5 text-primary md:flex-row md:gap-10">
          <InforPayment />
          <BillDetetail />
        </div>
      </div>
    </BodyLayout>
  );
};

export default PaymentPage;
