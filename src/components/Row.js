import React, { useEffect, useState } from 'react'
import myAxios from '../api/axios';
import './Row.css';

export const Row = ({isLargeRow, title, id, fetchUrl}) => {

  const [movies, setMovies] = useState([]);
  
  useEffect(()=>{
    fetchMovieData();
  }, []);

  // 영화 정보 가져오기
  const fetchMovieData = async () => {
    const request = await myAxios.get(fetchUrl);
    console.log(request);
    setMovies(request.data.results);
  }

  return (
    <section className="row">
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider_arrow_left">
          <span className="arrow">{"<"}</span>
        </div>
      <div id={id} className="row_posters">
        {
          movies.map(movie => (
            <img
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            />
          ))
        }
      </div>
        <div className="slider_arrow_right">
          <span className="arrow">{">"}</span>
        </div>
      </div>
    </section>
  )
}
