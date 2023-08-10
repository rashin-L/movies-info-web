import React, { useState, useEffect } from "react";
import style from "../styles/style.module.css";


function Movie(props) {
  const { title, year, director, poster,genre} = props;

  return (
    <div className={style["movie-card"]}>
      <img src={poster} alt={title} />
      <h3>{title}</h3>
      <div className={style["movie-info"]}>
        <p>{director}</p>
        <p>{year}</p>
      </div>
        <p>{genre}</p>
    </div>
  );
}

export default Movie;
