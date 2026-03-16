import React from "react";

function Movie({ title, director, year, studio, poster }) {
  return (
    <div style={{
      border: "1px solid gray",
      padding: "20px",
      margin: "20px",
      width: "300px"
    }}>
      
      <img src={poster} alt={title} width="250" />

      <h2>{title}</h2>

      <p><b>Director:</b> {director}</p>
      <p><b>Year:</b> {year}</p>
      <p><b>Studio:</b> {studio}</p>

    </div>
  );
}

export default Movie;