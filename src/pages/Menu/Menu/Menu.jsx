import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../../public/assets/menu/banner3.jpg';

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>
   
    </div>
  );
};

export default Menu;
//fdf
//fefef