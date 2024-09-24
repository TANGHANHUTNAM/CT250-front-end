import emptyOrder from "../../assets/empty_order.png";

const EmptyPurchase = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 rounded-sm bg-bgTertiary p-8">
      <img
        src={emptyOrder}
        loading="lazy"
        className="h-20 w-20 object-contain md:h-28 md:w-28"
      />
      <div className="text-sm font-medium text-primary">Chưa có đơn hàng</div>
    </div>
  );
};

export default EmptyPurchase;
