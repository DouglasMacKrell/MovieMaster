import React, { Component } from 'react';
import './App.css'
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap'
// import Profile from './Profile';
import Gallery from './Gallery';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            movies: null
        }
    }

    search() {
        console.log('this.state', this.state);
        const BASE_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=8a413592&';
        const FETCH_URL = `${BASE_URL}s=${this.state.query}&type=movie`;
        console.log('FETCH_URL', FETCH_URL);
        fetch(FETCH_URL, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            const movies = json;
            console.log('movies', movies)
            this.setState({
                movies
            });
        })
    }

    render() {
        return (
            <div className="App">
                <div className="App-title">
                    Movie Master
                </div>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="Search for an Artist"
                            query={this.state.query}
                            onChange={event => {this.setState({query: event.target.value})}}
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    this.search()
                                }
                            }}
                        />
                    <Button onClick={() => this.search()}>
                        SEARCH
                    </Button>
                    </InputGroup>
                </FormGroup>
                {/* <Profile
                    movies={this.state.movies}
                /> */}
                <Gallery
                    movies={this.state.movies}
                />
            </div>
        )
    }
}

export default App;