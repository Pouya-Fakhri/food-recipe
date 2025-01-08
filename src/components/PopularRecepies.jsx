import React from "react";
import Button from "./Button";
import RecepieCard from "./RecepieCard";
import useGetPopularRecepies from "../hooks/useGetPopularRecepies";

const foods = [
  {
      id: 1,
      name: "Spaghetti Carbonara",
      image: "https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cookingDuration: 30,
      cookingLevel: "medium",
      servingNumber: 4
  },
  {
      id: 2,
      name: "Grilled Chicken Salad",
      image: "https://images.unsplash.com/photo-1460306855393-0410f61241c7?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cookingDuration: 20,
      cookingLevel: "easy",
      servingNumber: 2
  },
  {
      id: 3,
      name: "Beef Wellington",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cookingDuration: 120,
      cookingLevel: "hard",
      servingNumber: 6
  },
  {
      id: 4,
      name: "Vegetable Stir Fry",
      image: "https://images.unsplash.com/photo-1485962307416-993e145b0d0d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cookingDuration: 15,
      cookingLevel: "easy",
      servingNumber: 3
  },
  {
      id: 5,
      name: "Chocolate Lava Cake",
      image: "https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cookingDuration: 25,
      cookingLevel: "medium",
      servingNumber: 4
  },
  {
      id: 6,
      name: "Tacos al Pastor",
      image: "https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cookingDuration: 45,
      cookingLevel: "medium",
      servingNumber: 4
  }
];

function PopularRecepies() {
  const recepei = useGetPopularRecepies()
    console.log(recepei)

  return (
    <div className=" mt-[200px] px-24">
      <div className="row flex w-full justify-between">
        <div className="title-box">
          <h2 className="text-[4.6rem] font-bold ">Discover, Create, Share</h2>
          <span className="text-[2.4rem]">Check our most popular recipes of this week</span>
        </div>
        <Button width={150} height={55} text="See All"/>
      </div>
      <div className="recepeis-container w-full h-[254px] pt-[70px] flex justify-between flex-wrap ">
        {recepei.map((food)=> <RecepieCard image={food.image} time={food.cookingDuration} serving={food.servingNumber} level={food.cookingLevel} name={food.name} id={food.id} />)}
      </div>
    </div>
  );
}

export default PopularRecepies;
