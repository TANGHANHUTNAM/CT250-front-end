import DishCard from "./DishCard";

const DishListGrid = ({ dishes = [] }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
      {dishes &&
        dishes.length > 0 &&
        dishes.map((dish) => {
          return <DishCard key={dish._id} dish={dish} />;
        })}
    </div>
  );
};

export default DishListGrid;
