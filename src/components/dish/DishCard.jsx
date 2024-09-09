import { FaEye } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import thucan from "../../assets/thucan.webp";
import { FaStar } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
const DishCard = () => {
  return (
    <div className="w-1/2 p-2 md:w-1/4 lg:w-1/5">
      {/* image */}
      <div className="group relative flex cursor-pointer flex-col overflow-hidden border-b-2 border-solid border-neutral-200/40 bg-primary p-2">
        <img src={thucan} alt="thucan" />
        <div className="absolute left-0 top-0 z-10 flex h-full w-0 items-center justify-end bg-black/30 opacity-0 transition-all duration-300 group-hover:w-1/2 group-hover:opacity-100">
          <div className="mr-2 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-solid border-tertiary bg-primary text-3xl text-tertiary hover:text-yellow-600">
            <FaEye />
          </div>
        </div>
        <div className="absolute right-0 top-0 flex h-full w-0 items-center justify-start bg-black/30 opacity-0 transition-all duration-300 group-hover:w-1/2 group-hover:opacity-100">
          <div className="ml-2 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-solid border-tertiary bg-primary text-3xl text-tertiary hover:text-yellow-600">
            <IoCartSharp />
          </div>
        </div>
        {/* label */}
        <div className="discount absolute right-2 z-20 w-fit bg-red-500 px-2 py-1 text-center text-xs font-semibold text-primary">
          -15%
        </div>
        <div className="discount absolute left-2 z-20 w-fit bg-yellow-500 px-2 py-1 text-center text-xs font-bold text-primary">
          New
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col gap-1 bg-primary p-2 pt-1 text-left sm:p-3">
        <div className="name cursor-pointer truncate text-lg font-bold text-tertiary duration-200 hover:text-yellow-600 sm:text-xl">
          Salad rau mùa sốt cam Salad rau mùa sốt cam Salad rau mùa sốt cam
        </div>
        <div className="price flex flex-row items-center gap-2 truncate">
          <span className="final text-base font-bold text-red-500 sm:text-lg">
            65.000đ
          </span>
          <span className="old truncate text-xs font-medium text-gray-500 line-through">
            70.000đ
          </span>
        </div>
        <div className="footer mt-1 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="rating flex items-center justify-center border-x-2 border-solid border-yellow-500 bg-yellow-200 p-1 text-yellow-600 sm:px-2">
              <FaStar />
              <span className="ml-1 text-xs font-bold">4.5</span>
            </span>
            <span className="sold text-[10px] font-bold sm:text-xs">
              <span>100</span>
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
  );
};
export default DishCard;
