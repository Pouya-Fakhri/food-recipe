import axios from 'axios';
import React, { useEffect, useState } from 'react'

function useGetPopularRecepies() {
    const [recepies, setrecepies] = useState([{}]);
    useEffect(() => {
      axios
        .get("http://localhost:3000/popularRecepies")
        .then((res) => {
            setrecepies(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, []);
  
    return recepies;
}

export default useGetPopularRecepies
