import React from "react";
import Movie from "./Movie";
import movies from "./movies";

function App() {
  return (
    <div>
      <h1>Мій улюблений фільм</h1>

      {movies.map(movie => (
        <Movie
          key={movie.id}
          title={movie.title}
          director={movie.director}
          year={movie.year}
          studio={movie.studio}
          poster={movie.poster}
        />
      ))}

    </div>
  );
}

export default App;