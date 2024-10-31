import { LuCopy } from "react-icons/lu";
import { formatCurrency } from "../../utils/format";
import { useTranslation } from "react-i18next";

const Voucher = ({ coupon }) => {
  const { t } = useTranslation();
  const handleCopy = () => {
    if (coupon?.code) {
      navigator.clipboard.writeText(coupon.code);
    }
  };
  return (
    <div className="flex flex-1 flex-col gap-1 rounded-md border-2 border-dashed border-tertiary p-3">
      <div className="flex items-center justify-between">
        <span className="font-medium text-tertiary">Voucher:</span>
        <span
          onClick={handleCopy}
          className="coppy cursor-copy text-xl text-tertiary"
        >
          <LuCopy />
        </span>
      </div>
      <div className="text-sm">
        {coupon?.type ? (
          <span>{t("Voucher.discount")}{coupon?.value}%</span>
        ) : (
          <span>{t("Voucher.discount")}{formatCurrency(coupon?.value)}</span>
        )}
      </div>
      <div className="text-sm font-medium text-gray-50">{coupon?.code}</div>
    </div>
  );
};

export default Voucher;
