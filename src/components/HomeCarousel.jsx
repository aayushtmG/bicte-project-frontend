import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BASE_URL } from "../redux/constants";

const HomeCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const slider_images = [
    '/public/images/banner.jpg',
    '/public/images/banner2.jpg',
    '/public/images/banner4.jpg',
    '/public/images/banner1.png'
  ]

  return (
    <div className="mb-4 w-screen">
        <Slider
          {...settings}
          className="w-full "
        >
          {slider_images.map(
            (image,index) => (
              <div key={index}>
                <img
                  src={BASE_URL+image}
                  alt={'Banner Image'}
                  className="w-full rounded-lg object-cover h-[30rem]"
                />
              </div>
            )
          )}
        </Slider>
    </div>
  );
};

export default HomeCarousel;
