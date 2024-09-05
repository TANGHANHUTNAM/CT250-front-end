import About from "../components/home/About";
import Carousel from "../components/home/Carousel";
import OpeningHours from "../components/home/OpeningHours";
import { useDynamicTitle } from "../hooks";

const HomePage = () => {
  useDynamicTitle("Tonatra Restaurant");

  return (
    <div className="home-container">
      <Carousel />
      <About />
      <OpeningHours />
    </div>
  );
};

export default HomePage;
