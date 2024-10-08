import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../../../public/assets/home/slide1.jpg";
import slide2 from "../../../public/assets/home/slide2.jpg";
import slide3 from "../../../public/assets/home/slide3.jpg";
import slide4 from "../../../public/assets/home/slide4.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
      subHeading={'From 11:00am to 10:00pm'}
      heading={'ORDER ONLINE'}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="text-3xl text-center text-white -mt-16">SALAD</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />{" "}
          <h3 className="text-3xl text-center uppercase text-white -mt-16">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />{" "}
          <h3 className="text-3xl text-center uppercase text-white -mt-16">
            pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />{" "}
          <h3 className="text-3xl text-center uppercase text-white -mt-16">
            desserts
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
