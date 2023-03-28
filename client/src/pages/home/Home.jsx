import "./home.scss";
import Slider from "../../components/slider/Slider";
import Featured from "../../components/featured/Featured";
import Categories from "../../components/categories/Categories";
import Contact from "../../components/contact/Contact";

export default function Home() {
  return (
    <div className="home">
      <Slider />
      <Featured type={"featured"} />
      <Categories />
      <Featured type={"trending"} />
      <Contact />
    </div>
  );
}
