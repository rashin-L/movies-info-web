import React, { Component } from "react";
import style from "../styles/style.module.css";
import axios from "axios";
import Movie from "./Movie";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allMovies: [],
      movies: [],
      genres: [],
      genreFilter: [],
      searchTitle: "",
    };
  }
  ///////////////////////////////////////////////////////////////////
  componentDidMount() {
    axios.get("./movies.json").then((response) => {
      this.setState(
        {
          allMovies: response.data,
          movies: response.data,
        },
        () => {
          var temp = [];
          this.state.movies.map((movie) => {
            const array = movie.Genre.split(", ");
            array.map((g) => {
              if (temp.indexOf(g) === -1) {
                temp.push(g);
              }
            });
          });
          this.setState({ genres: temp });
        }
      );
    });
  }
  /////////////////////////////////////////////////////////////////
  addOrRemoveGenre(genre) {
    var index = this.state.genreFilter.indexOf(genre);
    if (index === -1) {
      this.state.genreFilter.push(genre);
    } else {
      this.state.genreFilter.splice(index, 1);
    }
    console.log(this.state.genreFilter);
  }
  ////////////////////////////////////////////////////////////////
  filterByGenreHandler = (genre) => {
    this.addOrRemoveGenre(genre);

    let temp = [];
    this.state.genreFilter.map((genre) => {
      const selMovies = this.state.allMovies.filter((movie) =>
        movie.Genre.includes(genre)
      );
      
      selMovies.map((movie) => {
        if (temp.indexOf(movie) === -1) {
          temp.push(movie);
        }
      });
    });

    this.setState({
      movies: temp,
    });
  };
  ////////////////////////////////////////////////////////////////
  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      
      movies: this.state.allMovies.filter((movie) =>
        movie.Title.toLowerCase().includes(event.target.value.toLowerCase())
      ),
    });
  };

  ////////////////////////////////////////////////////////////////
  render() {
    return (
      <div className={style["container"]}>
        <div className={style["movies-container"]}>
          {this.state.movies.map((movie) => (
            <Movie
              key={movie.Id}
              title={movie.Title}
              year={movie.Year}
              director={movie.Director}
              poster={movie.Poster}
              genre={movie.Genre}
            />
          ))}
        </div>
        
        <div className={style["sidbar"]}>
          <input
            placeholder="search by movie title..."
            className={style["search-input"]}
            type="text"
            name="searchTitle"
            value={this.state.searchTitle}
            onChange={this.changeHandler}
          />

         
          {this.state.genres.map((genre, index) => (
            <button
              key={index}
              className={style["btn-filter"]}
              onClick={() => this.filterByGenreHandler(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Movies;
