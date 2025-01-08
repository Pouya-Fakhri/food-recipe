import React from "react";
import Star from "../assets/svgs/Star.svg";
import Like from "../assets/svgs/Like.svg";
import Share from "../assets/svgs/Share.svg";
import usGetPost from "../hooks/useGetPost";

function CommunityPost({
  recepyName,
  recepyDescription,
  recepyImage,
  likes,
  username,
  userImage,
  id,
}) {
  const style = [
    { backgroundImage: `url("${userImage}")`, backgroundSize: "cover" },
    { backgroundImage: `url("${recepyImage}")`, backgroundSize: "cover" },
  ];

  return (
    <div
      className=" w-[575px] h-[578px] py-10 px-8 flex flex-col justify-around rounded-3xl shadow-md mt-20"
      id={id}
    >
      <div className="profile flex items-center gap-9">
        {/* <img src={userImage} alt="" className="w-12  rounded-full" /> */}
        <div className="w-20 h-20 rounded-full" style={style[0]}></div>
        <div>
          <h2 className="font-semibold text-[2.4rem]">{recepyName}</h2>
          <p className="font-light text-[1.6rem] text-[#7F7D7D]">{username}</p>
        </div>
      </div>

      <div className="recepy">
        <div className="stars">
          <img src={Star} alt="" />
        </div>
        <p className="font-light text-[1.6rem] leading-6">
          {recepyDescription}
        </p>
        <div
          className="w-full h-[254px] mt-5 rounded-xl"
          style={style[1]}
        ></div>
      </div>

      <div className="flex gap-6 text-[2.4rem]">
        <div className="likes flex gap-2 items-center p-1 ">
          <img src={Like} alt="" /> {likes}
        </div>

        <div className="share  flex gap-2 items-center p-1">
          <img src={Share} alt="" /> Share
        </div>
      </div>
    </div>
  );
}

export default CommunityPost;
