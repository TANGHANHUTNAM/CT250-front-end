import { useTranslation } from "react-i18next";
import { IoIosArrowForward } from "react-icons/io";

const DishDescription = ({}) => {
  const { t } = useTranslation();

  return (
    <div className="divide-y divide-solid divide-white/20 rounded-sm bg-bgTertiary">
      <div className="space-y-5 px-4 py-6 lg:px-6">
        <p className="text-base font-semibold lg:text-lg">
          {t("DishDetailPage.detailInformation")}
        </p>
        <div className="space-y-5 text-sm">
          <div className="flex gap-2">
            <span className="w-1/3 shrink-0 text-gray-100 lg:w-1/4 xl:w-1/5">
              {t("DishDetailPage.category")}
            </span>
            <span className="flex flex-wrap items-center gap-1.5 font-medium text-tertiary">
              <span> Món chính</span>
              <IoIosArrowForward />
              <span>Salad</span>
              <IoIosArrowForward />
              <span>Salad rau mùa sốt cam</span>
            </span>
          </div>
          <div className="flex gap-2">
            <span className="w-1/3 shrink-0 text-gray-100 lg:w-1/4 xl:w-1/5">
              {t("DishDetailPage.ingredients")}
            </span>
            <span className="font-medium">
              Xà lách carol, xà lách frise, xà lách lô lô tím, xà lách mỡ, xà
              lách radicchio tím, táo đỏ, táo xanh, cà chua bi, củ cải đường,
              rau mầm, cà rốt baby, trái olive đen, trái olive xanh.
            </span>
          </div>
          <div className="flex gap-2">
            <span className="w-1/3 shrink-0 text-gray-100 lg:w-1/4 xl:w-1/5">
              {t("DishDetailPage.servingSize")}
            </span>
            <span className="font-medium">1 - 2 người</span>
          </div>
          <div className="flex gap-2">
            <span className="w-1/3 shrink-0 text-gray-100 lg:w-1/4 xl:w-1/5">
              {t("DishDetailPage.completionTime")}
            </span>
            <span className="font-medium">6 - 8 phút</span>
          </div>
        </div>
      </div>
      <div className="space-y-5 px-4 py-6 lg:px-6">
        <p className="text-base font-semibold lg:text-lg">
          {t("DishDetailPage.dishDescription")}
        </p>
        <p className="text-sm">
          Salad rau mùa sốt cam là sự lựa chọn tuyệt vời cho các tín đồ yêu eat
          clean. Món ăn có đến 5 loại xà lách (carol, frise, lô lô tím, xà lách
          mỡ và radicchio tím) kết hợp cùng các loại trái cây như táo, cà chua,
          ô liu... mang lại nguồn vitamin tổng hợp dồi dào, hỗ trợ tăng cường đề
          kháng cho cơ thể. Điểm nhấn tạo nên nét chấm phá cho món nằm ở nước
          sốt cam độc đáo với vị chua ngọt tự nhiên dịu dàng. Salad rau mùa sốt
          cam thực sự là một bữa tiệc về màu sắc, xua tan cơn nóng mùa hè, đánh
          thức tối đa vị giác.
        </p>
      </div>
    </div>
  );
};

export default DishDescription;

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { IoIosArrowDown } from "react-icons/io";

// const DishDescription = ({}) => {
//   const [isMore, setIsMore] = useState(false);

//   const handleSeeMore = () => {
//     setIsMore((prev) => !prev);
//   };

//   return (
//     <motion.div
//       animate={
//         isMore
//           ? {
//               height: "auto",
//               duration: 0.5,
//             }
//           : {
//               height: "650px",
//               duration: 0.5,
//             }
//       }
//       className="relative divide-y divide-solid divide-white/20 overflow-hidden rounded-sm bg-bgTertiary will-change-auto"
//     >
//       <div className="space-y-5 px-4 lg:px-6 py-6 ">
//         <p className="text-base font-semibold">Thông tin chi tiết</p>
//         <div className="space-y-5 text-sm">
//           <div className="flex gap-2">
//             <span className="w-1/3 lg:w-1/ xl:w-1/54 shrink-0 text-gray-200">Danh mục</span>
//             <span className="inline-flex items-center gap-1.5 font-medium text-tertiary">
//              <span> Món chính Món chính</span>
//                 <IoIosArrowForward />
//                 <span>Salad</span>
//                 <IoIosArrowForward />
//                 <span>Salad rau mùa sốt cam</span>
//             </span>
//           </div>
//           <div className="flex gap-2">
//             <span className="w-1/3 lg:w-1/ xl:w-1/54 shrink-0 text-gray-200">Thành phần</span>
//             <span className="font-medium">
//               Xà lách carol, xà lách frise, xà lách lô lô tím, xà lách mỡ, xà
//               lách radicchio tím, táo đỏ, táo xanh, cà chua bi, củ cải đường,
//               rau mầm, cà rốt baby, trái olive đen, trái olive xanh.
//             </span>
//           </div>
//           <div className="flex gap-2">
//             <span className="w-1/3 lg:w-1/ xl:w-1/54 shrink-0 text-gray-200">Khẩu phần</span>
//             <span className="font-medium">1 - 2 người</span>
//           </div>
//           <div className="flex gap-2">
//             <span className="w-1/3 lg:w-1/ xl:w-1/54 shrink-0 text-gray-200">
//               Thời gian hoàn tất
//             </span>
//             <span className="font-medium">6 - 8 phút</span>
//           </div>
//         </div>
//       </div>
//       <div className="space-y-5 px-4 lg:px-6 py-6 ">
//         <p className="text-base font-semibold">Mô tả món ăn</p>
//         <p className="text-sm">
//           Salad rau mùa sốt cam là sự lựa chọn tuyệt vời cho các tín đồ yêu eat
//           clean. Món ăn có đến 5 loại xà lách (carol, frise, lô lô tím, xà lách
//           mỡ và radicchio tím) kết hợp cùng các loại trái cây như táo, cà chua,
//           ô liu... mang lại nguồn vitamin tổng hợp dồi dào, hỗ trợ tăng cường đề
//           kháng cho cơ thể. Điểm nhấn tạo nên nét chấm phá cho món nằm ở nước
//           sốt cam độc đáo với vị chua ngọt tự nhiên dịu dàng. Salad rau mùa sốt
//           cam thực sự là một bữa tiệc về màu sắc, xua tan cơn nóng mùa hè, đánh
//           thức tối đa vị giác.
//         </p>
//       </div>
//       <div
//         className={`sticky -bottom-0.5 !border-none bg-bgTertiary pb-6 pt-2 text-center text-sm text-tertiary sr-530:hidden ${isMore ? "" : "before:absolute before:bottom-full before:left-0 before:h-32 before:w-full before:bg-gradient-to-b before:from-transparent before:to-bgTertiary"}`}
//       >
//         <span
//           className="flex cursor-pointer items-center justify-center gap-1 font-medium hover:text-yellow-600"
//           onClick={handleSeeMore}
//         >
//           {isMore ? "Rút gọn" : "Xem thêm"}
//           <IoIosArrowDown className={`h-4 w-4 ${isMore ? "rotate-180" : ""}`} />
//         </span>
//       </div>
//     </motion.div>
//   );
// };

// export default DishDescription;
