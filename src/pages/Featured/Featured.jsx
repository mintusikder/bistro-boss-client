import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../public/assets/home/featured.jpg";
import "./Featured.css"
const Featured = () => {
  return (
    <div className="featured-bg-img pt-8 my-10 bg-fixed">
      <SectionTitle
        subHeading={"From 11:00am to 10:00pm"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center md:py-20 md:px-36 py-8 px-16 bg-slate-600 bg-opacity-40">
        <div >
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10 text-white">
          <h2>March 20, 2023 <br /> WHERE CAN I GET SOME?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
