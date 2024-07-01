import { useNavigate } from "react-router-dom";
import Top1 from "../../../../assets/images/top1.jpg";
import Top2 from "../../../../assets/images/top2.jpg";
import winGoImg from "../../../../assets/images/wingo_enter.png";
import luckyHitImg from "../../../../assets/images/lucky_hit_enter.png";
import Header from "./components/Header";
import { Carousel } from "react-responsive-carousel";
import Dsb_Card from "./components/Dsb_Card";

// type Props = {
//   isAuth: boolean;
// };
const BannerData = [
  {
    url: Top1,
  },
  {
    url: Top2,
  },
];
const Dashboard = () => {
// const Dashboard = ({ isAuth }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="w-[95%] mx-auto">
      <Header title="Home" />
      <div className="mt-2 px-2">
        <Carousel
          autoPlay
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          emulateTouch
        >
          {BannerData.map((img) => (
            <div className="w-full">
              <img src={img?.url} className="object-contain" alt="banner" />
            </div>
          ))}
        </Carousel>
        <div className="w-[90%] mx-auto mt-2">
          <p className="font-bold text-base">Games</p>
          <div className="grid grid-cols-2 items-center justify-evenly gap-2 mt-2">
            <Dsb_Card
              title="Color Game"
              image={winGoImg}
              bgColor={"#E88246"}
              onClick={() => {}}
            />
            <Dsb_Card
              title="Card Game"
              image={luckyHitImg}
              bgColor={"#34A853"}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
