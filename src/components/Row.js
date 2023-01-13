import React, { useEffect, useState } from 'react'
import myAxios from '../api/axios';
import MovieModal from './MovieModal/MovieModal';
import './Row.css';

export const Row = ({isLargeRow, title, id, fetchUrl}) => {

  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});
  
  useEffect(()=>{
    fetchMovieData();
  }, []);

  // 영화 정보 가져오기
  const fetchMovieData = async () => {
    const request = await myAxios.get(fetchUrl);
    setMovies(request.data.results);
  }

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  }

  return (
    <section className="row">
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider_arrow_left">
          <span className="arrow" onClick={()=>{
            document.getElementById(id).scrollLeft -= window.innerWidth;
          }}>{"<"}</span>
        </div>
      <div id={id} className="row_posters">
        {
          movies.map(movie => (
            <img
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            onClick={()=> handleClick(movie)}
            />
          ))
        }
      </div>
        <div className="slider_arrow_right">
          <span className="arrow" onClick={()=>{
            document.getElementById(id).scrollLeft += window.innerWidth;
          }}>{">"}</span>
        </div>
      </div>
      {
        modalOpen && (
          <MovieModal {... movieSelected} setModalOpen={setModalOpen}/>
        )
      }
    </section>
  )
}
