import React from "react";
import Banner from "../Banner/Banner";
import Category from "../../Category/Category";
import Bistro from "../../Bistro/Bistro";
import PopularManue from "../../PopularManue/PopularManue";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Bistro></Bistro>
      <PopularManue></PopularManue>
    </div>
  );
};

export default Home;
