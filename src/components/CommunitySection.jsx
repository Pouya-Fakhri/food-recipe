import React from "react";
import CommunityPost from "./CommunityPost";
import GhormehSabzi from "../assets/images/GhormehSabzi.jpg";
import AbbasGhaderi from "../assets/images/AbbasGhaderi.jpg";

function CommunitySection() {
  const data = [
    {
      recepyName: "gorme sabzi",
      recepyDescription:
        "this is a recepy of gorme sabzi Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quorepudiandae dolorem neque minus tenetur molestias vitae quisquam",
      recepyImage: GhormehSabzi,
      stars: 5,
      likes: 100,
      username: "abbas gadery ",
      userImage: AbbasGhaderi,
      id: 1,
    },
    {
      recepyName: "gorme sabzi",
      recepyDescription:
        "this is a recepy of gorme sabzi Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quorepudiandae dolorem neque minus tenetur molestias vitae quisquam",
      recepyImage: GhormehSabzi,
      stars: 5,
      likes: 100,
      username: "abbas gadery ",
      userImage: AbbasGhaderi,
      id: 2,
    },
    {
      recepyName: "gorme sabzi",
      recepyDescription:
        "this is a recepy of gorme sabzi Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quorepudiandae dolorem neque minus tenetur molestias vitae quisquam",
      recepyImage: GhormehSabzi,
      stars: 5,
      likes: 100,
      username: "abbas gadery ",
      userImage: AbbasGhaderi,
      id: 3,
    },
    {
      recepyName: "gorme sabzi",
      recepyDescription:
        "this is a recepy of gorme sabzi Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quorepudiandae dolorem neque minus tenetur molestias vitae quisquam",
      recepyImage: GhormehSabzi,
      stars: 5,
      likes: 100,
      username: "abbas gadery ",
      userImage: AbbasGhaderi,
      id: 4,
    },
  ];
  console.log(data);
  return (
    <div className="CommunitySection  px-24 flex flex-col items-center mt-24">
      <h2 className="font-semibold text-[4.6rem] ">From Our Community</h2>
      <div className="container flex flex-wrap justify-between w-full  ">
        {data.map((item) => (
          <CommunityPost
            recepyName={item.recepyName}
            recepyDescription={item.recepyDescription}
            recepyImage={item.recepyImage}
            likes={item.likes}
            username={item.username}
            userImage={item.userImage}
            id={item.id}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default CommunitySection;
