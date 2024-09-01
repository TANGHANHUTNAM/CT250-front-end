import Carousel from "../components/home/Carousel";
import { useDynamicTitle } from "../hooks";

const HomePage = () => {
  useDynamicTitle("Tonatra Restaurant");

  return (
    <div className="home-container">
      <Carousel />
    </div>
  );
};

export default HomePage;
