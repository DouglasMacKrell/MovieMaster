import React, { Component } from 'react';
import './App.css';

class Gallery extends Component {
    openImdb(imdbId) {
        let linkToImdb = 'https://www.imdb.com/title/' + imdbId
        window.open(linkToImdb)
    }

    render() {
        let movies = [{
            title : '',
            year: '',
            poster: ''
        }]
        if (this.props.movies !== null) {
            movies = this.props.movies.Search
        }
        return (
            <div>
                {movies.map((film, k) => {
                    console.log('film', film)
                    const posterImg = film.Poster;
                    return (
                        <div
                            key={k}
                            className="film"
                            onClick={() => this.openImdb(film.imdbID)}
                        >
                            <img 
                                src={posterImg}
                                className="poster"
                                alt="poster"
                            />
                            <p className="title">
                                {film.Title}
                            </p>
                            <p className="year">
                                {film.Year}
                            </p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Gallery;