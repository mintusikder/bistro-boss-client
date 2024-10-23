import React from "react";
import Banner from "../Banner/Banner";
import Category from "../../Category/Category";
import Bistro from "../../Bistro/Bistro";
import PopularManue from "../../PopularManue/PopularManue";
import Featured from "../../Featured/Featured";
import Testimonials from "../../Testimonials/Testimonials";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Bistro></Bistro>
      <PopularManue></PopularManue>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
