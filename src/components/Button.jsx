import React from "react";

function Button({text,width,height}) {
    const style = {
        width: width,
        height:height
    }
  return (
  <button className={`text-[2rem] text-white bg-Secondary rounded-2xl  flex items-center justify-center`} style={style} >{text}</button>
  )
}

export default Button;
