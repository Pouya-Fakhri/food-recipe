import React from "react";
import AboutUsImage from "../assets/images/AboutUs.jpg";
import Button from "./Button";

function AboutUs() {
  const style = {
    backgroundImage: `url("${AboutUsImage}")`,
  };
  return (
    <div className=" h-[567px] relative " style={style}>
      <div className="bg-[#ffffff] w-[578px] h-[430px] rounded-3xl py-12 px-11 absolute right-[10%] top-[15%] flex flex-col justify-around ">
        <h2 className="font-semibold text-[46px]">About Us</h2>
        <p className="font-normal text-[20px] leading-8">
          Our recipes are the heart and soul of our culinary community, and they
          reflect our commitment to providing you with memorable and delightful
          dining experiences.
        </p>
        <Button text="Learn More" width={"200px"} height={"55px"} />
      </div>
      <div className="text-[15px] font-medium text-Primary bg-[#ffffff] w-56 h-20 p-6 rounded-lg absolute bottom-[10%] left-[10%]" >50+ Quick Food Recipes That Easy To Do!</div>
    </div>
  );
}

export default AboutUs;
