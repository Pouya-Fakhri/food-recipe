import React from "react";
import CommunityPost from "./CommunityPost";
import CommunityContext, {
  useCommunityContext,
} from "../context/CommunityContext";
import { ThreeDot } from "react-loading-indicators";

function CommunitySection() {
  const { post, error, loading } = useCommunityContext();
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
  console.log(post);
  const render = post.slice(0, 4);

  return (
    <div className="CommunitySection  px-24 flex flex-col items-center mt-24">
      <h2 className="font-semibold text-[4.6rem] ">From Our Community</h2>
      <div className="container flex flex-wrap justify-between w-full  ">
        {render.map((item) => (
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
