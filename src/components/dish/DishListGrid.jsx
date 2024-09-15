import DishCard from "./DishCard";
import thucan from "../../assets/thucan.webp";
const DishListGrid = ({ dishes }) => {
  const List = [
    {
      id: 1,
      name: "Salad rau mùa sốt cam Salad rau mùa sốt cam Salad rau mùa sốt cam",
      price: 65000,
      oldPrice: 70000,
      rating: 4.2,
      sold: 100,
      isNew: true,
    },
    {
      id: 2,
      name: "Salad rau mùa sốt cam Salad rau mùa sốt cam Salad rau mùa sốt cam",
      price: 65000,
      oldPrice: 70000,
      rating: 4.1,
      sold: 1004,
    },
    {
      id: 3,
      name: "Salad rau mùa sốt cam Salad rau mùa sốt cam Salad rau mùa sốt cam",
      price: 65000,
      oldPrice: 70000,
      rating: 4.8,
      sold: 1030,
    },
    {
      id: 4,
      name: "Salad rau mùa sốt cam Salad rau mùa sốt cam Salad rau mùa sốt cam",
      price: 25000,
      oldPrice: 70000,
      rating: 4.5,
      sold: 1020,
      discount: "50%",
    },
    {
      id: 5,
      name: "Salad rau mùa sốt cam Salad rau mùa sốt cam Salad rau mùa sốt cam",
      price: 65000,
      oldPrice: 70000,
      rating: 4.5,
      sold: 100,
    },
    {
      id: 6,
      name: "Salad rau mùa sốt cam Salad rau mùa sốt cam Salad rau mùa sốt cam",
      price: 65000,
      oldPrice: 70000,
      rating: 4.5,
      sold: 150,
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-6 px-2 sm:grid-cols-3 lg:grid-cols-4">
      {List.map((dish) => {
        return <DishCard key={dish.id} dish={dish} />;
      })}
    </div>
  );
};

export default DishListGrid;
