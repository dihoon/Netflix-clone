import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import myAxios from "../../api/axios";
import { useDebounce } from "../../hooks/useDebounce";
import "./SearchPage.css";

export const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const query = useQuery();
  const searchTerm = query.get("q");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const request = await myAxios.get(
        `search/multi?include_adult=false&query=${searchTerm}`
      );
      setSearchResults(request.data.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (debouncedSearchTerm) fetchSearchMovie(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  const renderSearchResults = () => {
    return searchResults.length > 0 ? (
      <section className="search_container">
        {searchResults.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieImageUrl =
              "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;

            return (
              <div key={movie.id} className="movie">
                <div className="movie_column_poster">
                  <img src={movieImageUrl} alt="" className="movie_poster" />
                </div>
              </div>
            );
          }
        })}
      </section>
    ) : (
      <section className="no_results">
        <div className="no_results_text">
          <p>Your search for "{debouncedSearchTerm}" did not have any matches.</p>
          <p>Suggestions:</p>
          <ul>
            <li>Try different keywords</li>
          </ul>
        </div>
      </section>
    );
  };

  return renderSearchResults();
};
