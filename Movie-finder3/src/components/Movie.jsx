import React from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  const { id } = useParams();

  React.useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=73740781`)
      .then((response) => response.json())
      .then((data) => {
        console.table(data);
      });
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">Name</div>
      </div>
    </div>
  );
};

export default Movie;
