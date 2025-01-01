import React from "react";
import CTAImage from "../assets/images/CTAImage.png";
import Button from "./Button";

function CTA() {
  return (
    <div className="w-full px-24 mt-28">
      <div className="bg-Primary h-[420px] text-white flex flex-col justify-between relative p-20 rounded-3xl ">
        <p className="font-semibold text-[4.6rem] w-9/12">
          Embrace the joy of cooking with get it on your iPhone or Android Your
          kitchen adventure begins now!
        </p>

        <div className="flex gap-10">
          <Button text="App Store" width={"150px"} height={"55px"} />
          <Button text="Google Play" width={"150px"} height={"55px"} />
        </div>
        <img src={CTAImage} alt="" className=" absolute bottom-0 right-0" />
      </div>
    </div>
  );
}

export default CTA;
