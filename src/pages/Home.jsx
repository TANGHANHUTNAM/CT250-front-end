import About from "../components/home/About";
import Carousel from "../components/home/Carousel";
import CategoryOutstanding from "../components/home/CategoryOutstanding";
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
      <OpeningHours />
      <NewsComponent />
    </div>
  );
};

export default HomePage;
