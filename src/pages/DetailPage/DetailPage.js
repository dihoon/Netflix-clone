import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import myAxios from "../../api/axios";

export const DetailPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await myAxios.get(`/movie/${movieId}`);
      setMovie(request.data);
    }

    fetchData();
  }, [movieId]);

  if (Object.keys(movie).length === 0) return <div>Not Found</div>

  return <section>
    <img
    className="modal_poster_img"
    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
    alt="poster"/>
  </section>;
};
