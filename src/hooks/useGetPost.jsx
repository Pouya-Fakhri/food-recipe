import axios from "axios";
import React, { useEffect, useState } from "react";

function useGetPost() {
  const [post, setpost] = useState(null);
  const [errore, setErorre] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetch() {
      setLoading(true);
      axios
        .get("http://localhost:3000/comunityPost")
        .then((res) => {
          setpost(res.data);
        })
        .catch((err) => {
          setErorre(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    fetch();
  }, []);

  return { post, errore, loading };
}

export default useGetPost;

