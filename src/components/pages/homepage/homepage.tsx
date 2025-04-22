import MarqueeBar from "@/components/common/marqueeBar/marqueeBar";
import AboutPage from "../aboutUs/aboutUs";
import BmiPage from "../bmi-page/bmiPage";
import Price from "../price/price";
import Videopage from "../videopage/videopage";
import Hero from "./hero/hero";
import Consultancy from "../consultancy/consultancy";
import BlogList from "../blogList/blogList";
const Homepage = () => {
  return (
    <div className="homepage_design">
      <Hero />
      <MarqueeBar />
      <BmiPage />
      <Price/>
      <AboutPage/>
      <Videopage/>
      <Consultancy/>
      <BlogList/>
    </div>
  );
};

export default Homepage;
