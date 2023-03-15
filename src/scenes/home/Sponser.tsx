import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SponserRedBull from "../../assets/SponsorRedBull.png";
import SponserForbes from "../../assets/SponsorForbes.png";
import SponserFortune from "../../assets/SponsorFortune.png";
import { Autoplay } from "swiper";

export default function Sponser() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        speed={2000}
        freeMode={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <img src={SponserRedBull} alt="SponserRedBull" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={SponserForbes} alt="SponserForbes" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={SponserFortune} alt="SponserFortune" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={SponserRedBull} alt="SponserRedBull" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={SponserForbes} alt="SponserForbes" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={SponserFortune} alt="SponserFortune" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
