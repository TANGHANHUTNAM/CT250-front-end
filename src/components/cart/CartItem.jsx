import { HiMiniXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/format";
import QuantityInput from "../inputs/QuantityInput";
import { useDispatch } from "react-redux";
import { changeQuantity as changeQuantityInStore } from "../../redux/reducer/cartSlice";
import _ from "lodash";

const CartItem = ({ cartItem = {}, onDelete = (item) => {} }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    onDelete(cartItem);
  };

  const changeQuantity = (quantity) => {
    dispatch(changeQuantityInStore({ id: cartItem?._id, quantity }));
  };

  const changeQuantityByButton = _.debounce(changeQuantity, 300);

  return (
    <div className="relative flex flex-nowrap gap-4 rounded-sm bg-bgTertiary p-3.5 text-13px font-medium text-primary sm:grid sm:grid-cols-12 sm:items-center sm:gap-2 sm:px-6 sm:py-4 sm:text-sm">
      <div className="sm:col-span-5 sm:flex sm:flex-nowrap sm:items-center sm:gap-4">
        <div className="h-20 w-20 shrink-0 md:h-[5.5rem] md:w-[5.5rem] lg:h-24 lg:w-24">
          <Link to={`/dish-detail/${cartItem?._id}`}>
            <img
              src={cartItem?.image}
              alt="..."
              loading="lazy"
              className="w-auto object-cover"
            />
          </Link>
        </div>
        <span className="hidden truncate duration-300 hover:text-tertiary sm:inline">
          <Link to={`/dish-detail/${cartItem?._id}`}>{cartItem?.name}</Link>
        </span>
      </div>
      <div className="grid grow grid-cols-12 gap-2 sm:col-span-6">
        <div className="col-span-12 pr-3 sm:hidden">
          <span className="duration-300 hover:text-tertiary">
            <Link to={`/dish-detail/${cartItem?._id}`}>{cartItem?.name}</Link>
          </span>
        </div>
        <div className="col-span-12 flex flex-row-reverse justify-between sm:grid sm:grid-cols-12 sm:items-center sm:justify-center sm:gap-2">
          <div className="self-end text-left sm:col-span-6 sm:self-center sm:text-center md:space-x-2 lg:col-span-4">
            {cartItem?.discount > 0 && cartItem?.discountExpirationDate && (
              <span className="hidden font-normal text-gray-300 line-through md:inline">
                {formatCurrency(cartItem?.price)}
              </span>
            )}
            <span className="m-0 font-semibold text-tertiary">
              {formatCurrency(cartItem?.discountedPrice)}
            </span>
          </div>

          <div className="flex items-end justify-end sm:col-span-6 sm:items-center sm:justify-center lg:col-span-4">
            <QuantityInput
              value={cartItem?.quantity}
              onButtonClick={changeQuantityByButton}
              onInputBlur={changeQuantity}
              rootClass="!h-6 sm:!h-8"
              buttonClass="!w-6 sm:!w-8"
              inputClass="w-8 sm:w-12 text-xs sm:text-sm"
            />
          </div>
          <div className="col-span-4 hidden text-center font-semibold text-tertiary lg:block">
            {formatCurrency(cartItem.totalPrice)}
          </div>
        </div>
      </div>
      <div className="absolute right-2 top-2 flex justify-center sm:static sm:col-span-1">
        <span
          className="cursor-pointer text-gray-200 hover:text-tertiary"
          onClick={() => handleDelete()}
        >
          <HiMiniXMark className="h-5 w-5" />
        </span>
      </div>
    </div>
  );
};

export default CartItem;
