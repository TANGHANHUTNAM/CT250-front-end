import About from "../components/home/About";
import Carousel from "../components/home/Carousel";
import CategoryOutstanding from "../components/home/CategoryOutstanding";
import Comment from "../components/home/Comment";
import DishOutstanding from "../components/home/DishOutstanding";
import Menu from "../components/home/Menu";
import NewsComponent from "../components/home/NewsComponent";
import OpeningHours from "../components/home/OpeningHours";
import Quality from "../components/home/Quality";
import { useDynamicTitle } from "../hooks";

const HomePage = () => {
  useDynamicTitle("Tonatra Restaurant");

  return (
    <div className="home-container">
      <Carousel />
      <Quality />
      <About />
      <CategoryOutstanding />
      <Menu />
      <DishOutstanding />
      <OpeningHours />
      <NewsComponent />
      <Comment />
    </div>
  );
};

export default HomePage;
