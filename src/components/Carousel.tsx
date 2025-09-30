import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  const CAROUSEL_IMAGES = [
    "https://images.unsplash.com/photo-1519337364444-c5eeec430101?q=80&w=1264&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1716809919210-474286f397ce?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1519944950314-64a254cb3ae5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const settings = {
    infinite: true,
    fade: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    arrows: true,
    autoplaySpeed: 2000,
    autoplay: true,
    adaptiveHeight: true,
    cssEase: "linear",
  };

  return (
    <div className='slider-container'>
      <Slider {...settings}>
        {CAROUSEL_IMAGES.map((image, i) => (
          <div className='carousel__imgs' key={i}>
            <img src={image} alt={`slide-${i}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
