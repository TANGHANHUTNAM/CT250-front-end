import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";
import BodyLayout from "../layouts/BodyLayout";
import CartList from "../components/cart/CartList";

const CartPage = () => {
  const { t } = useTranslation();

  useDynamicTitle(t("BreadcrumbsAndTitle.cart"));
  useTopPage();

  return (
    <BodyLayout>
      <div className="py-6">
        <p className="text-lg font-bold uppercase text-tertiary">
          Giỏ hàng của bạn
        </p>
        <div className="mt-6">
          <CartList />
        </div>
      </div>
    </BodyLayout>
  );
};

export default CartPage;
