import DishCard from "../dish/DishCard";

const SimilarDishes = ({}) => {
  return (
    <div className="space-y-6 rounded-sm bg-bgTertiary py-6">
      <p className="border-b border-solid border-white/20 px-4 pb-4 text-base font-semibold lg:px-6 lg:text-lg">
        Món ăn cùng loại
      </p>
      <div className="sr-950:grid-cols-4 grid grid-cols-2 pl-2 pr-3 sr-530:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:pl-4 lg:pr-5 xl:grid-cols-5">
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
      </div>
    </div>
  );
};

export default SimilarDishes;
