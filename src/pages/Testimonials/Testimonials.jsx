import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "swiper/css";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <SectionTitle
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="my-16 mx-24 flex flex-col space-y-3 items-center">
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <p>{review.details}</p>
              <h3 className="text-3xl text-[#CD9003]">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
