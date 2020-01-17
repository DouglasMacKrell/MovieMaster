import React, { Component } from 'react';
import './App.css';

class Profile extends Component {
    render() {
        let movie = {
            title : '',
            year: '',
            poster: ''
        }
        if (this.props.movies !== null) {
            movie = this.props.movies.Search[0]
        }

        return (
            <div>
                <img
                    alt="poster image"
                    src={movie.Poster}
                />
                <div>
                    {movie.Title}
                </div>
                <div>
                    {movie.Year}
                </div>
            </div>
        )
    }
}

export default Profile