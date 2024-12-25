import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Button from "./Button";

function Footer() {
  return (
    <div className="w-full  px-24 py-24 flex justify-between ">
      <div className="uls w-1/2 flex flex-col justify-between ">
        <Logo />
        <div className="container font-medium text-[16px] flex justify-between  ">
          <ul className=" flex flex-col">
            <li className="font-semibold text-[24px]">Menu</li>
            <NavLink to="/">Home</NavLink>
            <NavLink to="Recipe">Recipe</NavLink>
            <NavLink to="Community">Community</NavLink>
            <NavLink to="About">About Us</NavLink>
          </ul>
          <ul>
            <li className="font-semibold text-[24px]">Categories</li>
            <li>Breakfast </li>
            <li>Lunch</li>
            <li>Dinner</li>
            <li>Dessert </li>
            <li>Drink</li>
          </ul>
          <ul>
            <li className="font-semibold text-[24px]">Instagram</li>
            <li>Twitter</li>
            <li>Twitter</li>
            <li>Youtube </li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>
      <div className="singUp   flex flex-col justify-around ">
        <h2 className="font-semibold text-[24px]">
          Sign up for our newsletter
        </h2>
        <form action="">
          <input
            type="email"
            name=""
            id=""
            placeholder="Your Email Address"
            className="w-[460px] border-b-2 border-[#7F7D7D] relative mb-4"
          />
          <Button text="Submit" width={"150px"} height={"55px"} />
        </form>
      </div>
    </div>
  );
}

export default Footer;
