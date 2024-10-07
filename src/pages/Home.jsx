import About from "../components/home/About";
import Carousel from "../components/home/Carousel";
import CategoryOutstanding from "../components/home/CategoryOutstanding";
import Comment from "../components/home/Comment";
import DishOutstanding from "../components/home/DishOutstanding";
import Menu from "../components/home/Menu";
import OpeningHours from "../components/home/OpeningHours";
import Quality from "../components/home/Quality";
import { useDynamicTitle } from "../hooks";
import HomeNews from "../components/home/HomeNews";

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
      <HomeNews />
      <Comment />
    </div>
  );
};

export default HomePage;
