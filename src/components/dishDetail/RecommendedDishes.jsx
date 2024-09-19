const RecommendedDishes = ({}) => {
  return (
    <div className="w-full rounded-sm bg-bgTertiary sm:w-48 md:w-56">
      <div className="divide-y divide-solid divide-white/20">
        <p className="p-4 text-base font-semibold">Tonatra giới thiệu</p>
        <div className="flex gap-4 p-4 sm:flex-col sm:gap-2">
          <img
            src="https://bizweb.dktcdn.net/thumb/medium/100/469/097/products/1c8da310231574e189b9012e3125a3.jpg?v=1667881665957"
            loading="lazy"
            className="w-20 rounded-sm object-contain sm:w-fit"
          />
          <div className="grow space-y-1 overflow-hidden text-sm">
            <p className="truncate font-semibold">Dương chi cam lộ</p>
            <p className="font-medium text-tertiary">55.000đ</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 sm:flex-col sm:gap-2">
          <img
            src="https://bizweb.dktcdn.net/thumb/medium/100/469/097/products/1c8da310231574e189b9012e3125a3.jpg?v=1667881665957"
            loading="lazy"
            className="w-20 rounded-sm object-contain sm:w-fit"
          />
          <div className="grow space-y-1 overflow-hidden text-sm">
            <p className="font-semibold">Dương chi cam lộ</p>
            <p className="font-medium text-tertiary">55.000đ</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 sm:flex-col sm:gap-2">
          <img
            src="https://bizweb.dktcdn.net/thumb/medium/100/469/097/products/1c8da310231574e189b9012e3125a3.jpg?v=1667881665957"
            loading="lazy"
            className="w-20 rounded-sm object-contain sm:w-fit"
          />
          <div className="grow space-y-1 overflow-hidden text-sm">
            <p className="font-semibold">Dương chi cam lộ</p>
            <p className="font-medium text-tertiary">55.000đ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedDishes;
