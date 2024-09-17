import React from "react";
import service from "../../../public/assets/home/chef-service.jpg";

const Bistro = () => {
  return (
    <div className="relative mb-24">
      <img src={service} alt="Chef Service" className="w-full h-auto" />
      <div className="absolute top-1/2 w-11/12 md:w-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-white p-4 md:p-10 flex flex-col items-center justify-center">
        <h3 className="text-lg md:text-2xl font-bold">Bistro Boss</h3>
        <p className="text-xs md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default Bistro;
