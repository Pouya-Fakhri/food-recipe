import axios from "axios";
import React, { useEffect, useState } from "react";

function useGetPopularRecepies() {
  const [recepies, setrecepies] = useState(null);
  const [errore, setErorre] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetch() {
      setLoading(true);
         axios
        .get("http://localhost:3000/popularRecepies")
        .then((res) => {
          setrecepies(res.data);
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

  return { recepies, errore, loading };
}

export default useGetPopularRecepies;
