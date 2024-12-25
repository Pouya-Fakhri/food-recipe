import React from "react";
import Button from "./Button";
import HeaderImage from "../assets/images/HeaderImage.png";

function Header() {
  return (
    <div className=" h-[60vh] flex items-center w-full px-24 " >
      <div className="rghtePart w-1/2 h-full flex flex-col justify-center gap-[8%]">
        <h1 className="text-[64px] font-bold leading-[80px] w-full">
          Cooking Made Fun and Easy: Unleash Your Inner Chef
        </h1>
        <p className="text-[16px] font-light leading-[24px] text-gray w-6/12">
          Discover more than <span className="text-Secondary" >10,000 recipes</span> in your hand with the best recipe.
          Help you to find the easiest way to cook.
        </p>
        <Button text="Explore Recipes" width={"250px"} height={"75px"} />
      </div>
      <div className="leftPart">
        <img src={HeaderImage} alt="food" />
      </div>
    </div>
  );
}

export default Header;
