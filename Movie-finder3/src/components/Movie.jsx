import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Movie = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=73740781`)
      .then((response) => response.json())
      .then((data) => {
        setMovieData(data);
        console.table(movieData);
      });
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">Name {movieData.Title} </div>
        <div className="col-12">Year {movieData.Year} </div>
        <div className="col-12">Genre {movieData.Genre} </div>
        <div className="col-12">Director {movieData.Director} </div>
        <div className="col-12">Actors {movieData.Actors} </div>
        <div className="col-12">Plot {movieData.Plot} </div>
        <div className="col-12">
          <img src={movieData.Poster} />{" "}
        </div>
        <div className="col-12">imdbRating {movieData.imdbRating} </div>
        <div className="col-12">imdbVotes {movieData.imdbVotes} </div>
        <div className="col-12">imdbID {movieData.imdbID} </div>
        <div className="col-12">Type {movieData.Type} </div>
        <div className="col-12">Response {movieData.Response} </div>
      </div>
    </div>
  );
};

export default Movie;
