import React from "react";
import service from "../../../public/assets/home/chef-service.jpg";

const Bistro = () => {
  return (
    <div className="relative mb-24">
      <img src={service} alt="Chef Service" />
      <div className="absolute top-1/2 w-3/4 h-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-white  p-10 flex flex-col items-center justify-center">
        <h3 className="text-2xl font-bold">Bistro Boss</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
      </div>
    </div>
  );
};

export default Bistro;
