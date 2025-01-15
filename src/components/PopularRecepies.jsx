import React from "react";
import Button from "./Button";
import RecepieCard from "./RecepieCard";
import PopularContext, { usePopularContext } from "../context/PopularContext";
import { ThreeDot } from "react-loading-indicators";

function PopularRecepies() {
  const { recepies, error, loading } = usePopularContext();

  if (loading)
    return (
      <ThreeDot
        variant="pulsate"
        color="#046E1B"
        size="large"
        text="Loading"
        textColor="#046E1B"
      />
    );
  if (error) return <p>Error: {error.message}</p>;

  const render = recepies[0].slice(0, 6);

  return (
    <div className=" mt-[200px] px-24">
      <div className="row flex w-full justify-between">
        <div className="title-box">
          <h2 className="text-[4.6rem] font-bold ">Discover, Create, Share</h2>
          <span className="text-[2.4rem]">
            Check our most popular recipes of this week
          </span>
        </div>
        <Button width={150} height={55} text="See All" />
      </div>
      <div className="recepeis-container w-full h-[254px] pt-[70px] flex justify-between flex-wrap ">
        {render.map((item) => (
          <RecepieCard
            image={item.image}
            time={item.cookingDuration}
            serving={item.servingNumber}
            level={item.cookingLevel}
            name={item.name}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularRecepies;
