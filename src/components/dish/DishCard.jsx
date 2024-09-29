import { FaEye } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { formatCurrency } from "../../utils/format";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/reducer/cartSlice";
import { toast } from "react-toastify";

const DishCard = ({ dish }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id: dish?._id, quantity: 1 }));
    toast.success("Add to cart successfully.");
  };

  return (
    <div className="p-2">
      <div className="w-full shadow-[4px_4px_#acacac]">
        {/* image */}
        <div className="group relative flex cursor-pointer flex-col overflow-hidden bg-primary p-2">
          <img src={dish?.image} alt="..." loading="lazy" />
          <div className="absolute left-0 top-0 z-10 flex h-full w-0 items-center justify-end bg-black/30 opacity-0 transition-all duration-300 group-hover:w-1/2 group-hover:opacity-100">
            <Link
              to={`/dish-detail/${dish?._id}`}
              className="mr-2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-solid border-tertiary bg-primary text-2xl text-tertiary hover:text-yellow-600"
            >
              <FaEye />
            </Link>
          </div>
          <div className="absolute right-0 top-0 flex h-full w-0 items-center justify-start bg-black/30 opacity-0 transition-all duration-300 group-hover:w-1/2 group-hover:opacity-100">
            <div
              className="ml-2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-solid border-tertiary bg-primary text-2xl text-tertiary hover:text-yellow-600"
              onClick={() => handleAddToCart()}
            >
              <IoCartSharp />
            </div>
          </div>
          {/* label */}
          {dish?.discount && (
            <div className="discount absolute right-2 z-20 w-fit bg-red-500 px-2 py-1 text-center text-xs font-semibold text-primary">
              {dish?.discount}%
            </div>
          )}
          {dish?.isNewDish && (
            <div className="discount absolute left-2 z-20 w-fit bg-yellow-500 px-2 py-1 text-center text-xs font-bold text-primary">
              New
            </div>
          )}
        </div>
        {/* content */}
        <div className="flex flex-col gap-1 bg-primary p-2 pt-1 text-left sm:p-3">
          <Link
            to={`/dish-detail/${dish?._id}`}
            className="name cursor-pointer truncate text-base font-bold text-tertiary duration-200 hover:text-yellow-600 sm:text-lg"
          >
            {dish?.name}
          </Link>
          <div className="price flex flex-row items-center gap-2 truncate">
            <span className="final text-sm font-bold text-red-500 sm:text-base">
              {formatCurrency(dish?.discountedPrice)}
            </span>
            <span className="old truncate text-xs font-medium text-gray-500 line-through">
              {formatCurrency(dish?.price)}
            </span>
          </div>
          <div className="footer mt-1 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="rating flex items-center justify-center border-x-2 border-solid border-yellow-500 bg-yellow-200 p-1 text-yellow-600 sm:px-2">
                <FaStar />
                <span className="ml-1 text-xs font-bold">
                  {dish?.averageRating ?? 0}
                </span>
              </span>
              <span className="sold text-[10px] font-bold text-black sm:text-xs">
                <span>{dish?.totalSold}</span>
                <span className="ml-0.5">đã bán</span>
              </span>
            </div>
            <div className="favorite flex cursor-pointer text-2xl text-red-500">
              <span className="">
                <IoIosHeartEmpty />
              </span>
              <span hidden className="">
                <IoMdHeart />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DishCard;
