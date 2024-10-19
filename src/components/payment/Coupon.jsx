import voucher from "../../assets/voucher.webp";
import { getValidCouponByTotalOrder } from "../../services/couponService";
import { useSelector } from "react-redux";
import StatusCodes from "../../utils/StatusCodes";
import { useEffect, useState } from "react";
import Voucher from "./Voucher";

const Coupon = () => {
  const { totalPrice } = useSelector((state) => state.order);
  const [listCoupon, setListCoupon] = useState([]);

  useEffect(() => {
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
    fetchCouponValidForOrder();
  }, [totalPrice]);

  return (
    <>
      {listCoupon && listCoupon?.length > 0 ? (
        <div className="relative rounded-md border-2 border-dotted border-tertiary p-5 pt-9 text-primary">
          <div className="absolute -top-8 z-10 flex min-w-fit items-center justify-center gap-2.5 rounded-2xl border-2 border-solid border-tertiary bg-bgPrimary p-3 py-2">
            <img src={voucher} alt="voucher" className="w-[30px]" />
            <span className="text-lg font-semibold text-tertiary">
              Voucher khả dụng !!!
            </span>
          </div>
          {/* voucher */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {listCoupon?.map((coupon) => (
              <Voucher key={coupon._id} coupon={coupon} />
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Coupon;
