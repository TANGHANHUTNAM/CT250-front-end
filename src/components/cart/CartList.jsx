import thucan from "../../assets/thucan.webp";
import { formatCurrency } from "../../utils/format";
import CartItem from "./CartItem";
import emptyCart from "../../assets/empty_cart.png";
import { Link } from "react-router-dom";

const carts = [
  {
    name: "Salad rau mùa sốt cam",
    image: thucan,
    price: 80000,
    discount: 5,
    quantity: 1,
  },
  {
    name: "Salad rau mùa sốt cam",
    image: thucan,
    price: 80000,
    discount: 5,
    quantity: 5,
  },
  {
    name: "Salad rau mùa sốt cam",
    image: thucan,
    price: 80000,
    discount: 5,
    quantity: 3,
  },
  {
    name: "Salad rau mùa sốt cam",
    image: thucan,
    price: 80000,
    discount: 5,
    quantity: 2,
  },
];

const CartList = () => {
  const handleDeleteCartItem = (item) => {
    console.log(item);
  };

  const handleDeleteAll = () => {
    console.log("delete all cart");
  };

  const handleOrder = () => {
    console.log("order");
  };

  return carts && carts.length > 0 ? (
    <div className="space-y-2 sm:space-y-3">
      <div className="hidden grid-cols-12 items-center gap-2 rounded-sm bg-bgTertiary px-6 py-4 text-sm font-semibold text-primary sm:grid">
        <span className="col-span-5">Món ăn</span>
        <span className="col-span-3 text-center lg:col-span-2">Giá</span>
        <span className="col-span-3 text-center lg:col-span-2">Số lượng</span>
        <span className="col-span-2 hidden text-center lg:block">Tạm tính</span>
        <span className="col-span-1 text-center">#</span>
      </div>

      {carts &&
        carts.length > 0 &&
        carts.map((cartItem, index) => {
          return (
            <CartItem
              key={index}
              cartItem={cartItem}
              onDelete={handleDeleteCartItem}
            />
          );
        })}

      <div className="sticky bottom-0 divide-y divide-dashed divide-gray-600 rounded-sm bg-bgTertiary text-sm font-medium text-primary before:absolute before:-top-4 before:left-0 before:h-4 before:w-full before:bg-gradient-to-b before:from-transparent before:to-[#19443e]/80 md:text-base">
        <div className="flex flex-nowrap items-center justify-end p-3.5 sm:justify-between sm:px-6 sm:py-5">
          <span
            className="hidden cursor-pointer hover:text-red-500 sm:inline"
            onClick={() => handleDeleteAll()}
          >
            Xóa tất cả
          </span>
          <div className="space-x-0.5 sm:space-x-2">
            <span>
              Tổng thanh toán{" "}
              <span className="hidden sm:inline">({carts.length} món ăn):</span>
            </span>
            <span className="text-base font-bold text-yellow-600 md:text-lg">
              {(() => {
                const totalPrice = carts.reduce((total, cartItem) => {
                  return (
                    total +
                    (cartItem?.price -
                      (cartItem?.price * cartItem?.discount) / 100) *
                      cartItem?.quantity
                  );
                }, 0);

                return formatCurrency(totalPrice);
              })()}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between p-3.5 sm:justify-end sm:px-6 sm:py-5">
          <span
            className="cursor-pointer hover:text-red-500 sm:hidden"
            onClick={() => handleDeleteAll()}
          >
            Xóa tất cả
          </span>
          <button
            className="rounded-md bg-tertiary px-4 py-2 font-semibold hover:bg-yellow-600 sm:px-10 sm:py-2.5"
            onClick={() => handleOrder()}
          >
            Đặt hàng
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex w-full flex-col items-center justify-center gap-4 pb-6">
      <img
        src={emptyCart}
        alt="Empty cart..."
        loading="lazy"
        className="w-36 object-contain sm:w-52"
      />
      <div className="text-primary">
        <span className="hidden sm:inline">
          Không có món ăn nào trong giỏ hàng của bạn.{" "}
        </span>
        <Link
          to="/dish"
          className="rounded-md bg-tertiary px-3 py-2.5 text-sm font-medium hover:bg-yellow-600 sm:bg-transparent sm:p-0 sm:text-base sm:font-semibold sm:text-tertiary sm:hover:bg-transparent sm:hover:text-yellow-600"
        >
          Thêm món ngay
        </Link>
      </div>
    </div>
  );
};

export default CartList;
