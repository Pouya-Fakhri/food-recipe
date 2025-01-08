import axios from "axios";
import React, { useEffect, useState } from "react";

function useGetPost() {
  const [post, setpost] = useState([{}]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/comunityPost")
      .then((res) => {
        setpost(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return post;
}

export default useGetPost;
