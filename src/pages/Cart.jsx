import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import CartList from "../components/cart/CartList";
import { useDynamicTitle, useTopPage } from "../hooks";
import BodyLayout from "../layouts/BodyLayout";
import { getMultipleDishes } from "../services/dishService";
import StatusCodes from "../utils/StatusCodes";

const CartPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useDynamicTitle(t("BreadcrumbsAndTitle.cart"));
  useTopPage();

  const [cartList, setCartList] = useState([]);
  const [dishesInfomation, setDishesInfomation] = useState({});

  const carts = useSelector((state) => state.cart);
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
    } else {
      setDishesInfomation({});
    }
  }, []);

  useEffect(() => {
    if (carts && carts.length > 0) {
      const list = carts.map((cart) => {
        const information = dishesInfomation?.[cart.id] ?? {};
        const quantity = cart?.quantity ?? 1;
        const totalPrice = +quantity * +information?.discountedPrice;
        return { ...information, quantity, totalPrice };
      });
      setCartList(list);
    } else {
      setCartList([]);
    }
  }, [carts, dishesInfomation]);

  return (
    <BodyLayout>
      <div className="py-6">
        <p className="text-lg font-bold uppercase text-tertiary">
          {t("CartPage.title")}
        </p>
        <div className="mt-6">
          <CartList carts={cartList} />
        </div>
      </div>
    </BodyLayout>
  );
};

export default CartPage;
