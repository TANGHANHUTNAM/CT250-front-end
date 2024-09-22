import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";
import BodyLayout from "../layouts/BodyLayout";
import Infor from "../components/payment/Infor";
import BillDetetail from "../components/payment/BillDetail";

const PaymentPage = () => {
  const { t } = useTranslation();
  useDynamicTitle(t("BreadcrumbsAndTitle.payment"));
  useTopPage();
  return (
    <BodyLayout other={""}>
      <div className="py-10">
        <div className="flex flex-col justify-between gap-3 rounded-md border-2 border-solid border-tertiary p-5 text-primary md:flex-row md:gap-10">
          <Infor />
          <BillDetetail />
        </div>
      </div>
    </BodyLayout>
  );
};

export default PaymentPage;
