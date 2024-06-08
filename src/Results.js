/** @format */

import React, { useEffect, useState } from "react";
import "./Results.css";
import VideoCard from "./VideoCard.js";
import axios from "./axios.js";
import FlipMove from "react-flip-move";

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      setMovies(request.data);
      console.log(request,"request api");
      return request;
    }

    fetchData();
  }, [selectedOption]);

  return (
    <div className='results'>
      <FlipMove>
        {movies.results &&
          movies.results.map((movie) => (
            <VideoCard key={movie.id} movie={movie} />
          ))}
      </FlipMove>
    </div>
  );
}

export default Results;
