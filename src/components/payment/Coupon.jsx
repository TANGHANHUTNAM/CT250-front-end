import voucher from "../../assets/voucher.webp";
import Voucher from "./Voucher";
import { useTranslation } from "react-i18next";

const Coupon = ({ listCoupon }) => {
  const { t } = useTranslation();
  return (
    <>
      {listCoupon && listCoupon?.length > 0 ? (
        <div className="relative rounded-md border-2 border-dotted border-tertiary p-5 pt-9 text-primary">
          <div className="absolute -top-8 z-10 flex min-w-fit items-center justify-center gap-2.5 rounded-2xl border-2 border-solid border-tertiary bg-bgPrimary p-3 py-2">
            <img src={voucher} alt="voucher" className="w-[30px]" />
            <span className="text-lg font-semibold text-tertiary">
              {t("Coupon.valid")}
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
