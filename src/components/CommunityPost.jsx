import React from "react";
import Star from "../assets/svgs/Star.svg";
import Like from "../assets/svgs/Like.svg";
import Share from "../assets/svgs/Share.svg";

function CommunityPost({
  recepyName,
  recepyDescription,
  recepyImage,
  likes,
  username,
  userImage,
  id,
}) {
  return (
    <div className=" w-[575px] h-[578px] py-10 px-8 flex flex-col justify-around rounded-3xl shadow-md mt-20" id={id}>
      <div className="profile flex gap-9">
        <img src={userImage} alt="" className="w-12  rounded-full" />
        <div>
          <h2 className="font-semibold text-[24px]">{recepyName}</h2>
          <p className="font-light text-[16px] text-[#7F7D7D]">{username}</p>
        </div>
      </div>

      <div className="recepy">
        <div className="stars">
          <img src={Star} alt="" />
        </div>
        <p className="font-light text-[16px] leading-6">
            {recepyDescription}
        </p>
        <img src={recepyImage} alt="" className="w-full h-[254px]" />
      </div>

      <div className="flex gap-6 ">
        <div className="likes flex gap-2 items-center p-1">
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
