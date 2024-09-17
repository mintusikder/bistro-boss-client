import React from "react";
import Banner from "../Banner/Banner";
import Category from "../../Category/Category";
import Bistro from "../../Bistro/Bistro";
import PopularManue from "../../PopularManue/PopularManue";
import Featured from "../../Featured/Featured";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Bistro></Bistro>
      <PopularManue></PopularManue>
      <Featured></Featured>
    </div>
  );
};

export default Home;
