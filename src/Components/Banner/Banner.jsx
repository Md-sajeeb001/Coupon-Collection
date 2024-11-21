import { useContext } from "react";
import imgOne from "../../assets/SliderImg/Screenshot_13.png";
import imgTwo from "../../assets/SliderImg/Screenshot_14.png";
import imgThree from "../../assets/SliderImg/Screenshot_15.png";
import imgFour from "../../assets/SliderImg/winter-big-sale-facebook-cover-banner-design_691550-95.avif";
import { AuthContext } from "../../Providers/AuthProviders";
const Banner = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {user && (
        <div className="pt-10 text-center text-xl font-bold">
          {user && <h2 className="underline ">Hi, Welcome {user.displayName}</h2>}
        </div>
      )}
      <div className="carousel w-full h-[400px] object-cover rounded-lg my-8">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={imgOne} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={imgTwo} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={imgThree} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={imgFour} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
