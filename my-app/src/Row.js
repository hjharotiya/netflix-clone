// import axios from "axios";
import React, { useEffect, useState } from "react";
import axios from "./axios";
import row from "./row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl ,isLargerow }) {
  const [movies, setMovies ] = useState([]);
  const [trailerURL, settrailerURL] = useState("");
  // a snippet code that runs under the specific condition

  const handleClick = (movie) => {
    if (trailerURL)
      settrailerURL("");
    else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          settrailerURL(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
    
  };
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);
	
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {//http://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
	
  // console.table(movies);
  
return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
     
        {movies.map(movie => (
          <
            img
            key={movie.id}
            onClick={()=>handleClick(movie)}
            className={`row__poster ${isLargerow && "row__posterLarge"}`}
            src={`${base_url}${ isLargerow? movie.poster_path:movie.backdrop_path }`}
            alt={movie.name} />
        ))}
    </div>
    {trailerURL && <Youtube videoId={trailerURL} opts={opts} ></Youtube>}
    </div>
  );
}

export default Row;
