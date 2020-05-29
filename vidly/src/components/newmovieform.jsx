
import React, {Component} from 'react';
import Form from './common/form';
import { getGenres } from '../services/fakeGenreService';
import { getMovie, saveMovie} from '../services/fakeMovieService';
import Joi from 'joi-browser';

class NewMovieForm extends Form {

 state ={
        data:{title:"", genreId:"", stock:"", rate:""},
        genres:[],
        errors:{}
    }

schema = {
    _id: Joi.string(),
    title:Joi.string().required(),
    genreId:Joi.string().required(),
    stock: Joi.number().integer().min(1).max(100).required(),
    rate: Joi.number().integer().min(1).max(10).required()
    // FirstName: Joi.string().required()
}


componentDidMount () {
    const genres = getGenres();
    this.setState({genres});

    const movieId = this.props.match.params.id;
    if (movieId === "new") return;

    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(movie) });
}

mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      stock: movie.numberInStock,
      rate: movie.dailyRentalRate
    };
}

    
doSubmit = () => {
    saveMovie(this.state.data);

    this.props.history.push("/movies");
};
    


    render () {
        
        return (
            <div>
                <h1>Movie Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title","Title")}
                    {/* {console.log(this.state.genres)} */}
                    {this.renderSelect("genreId","Genre",this.state.genres)}
                    {this.renderInput("stock","Number in Stock")}
                    {this.renderInput("rate","Rate")}
                    {this.submitButton('Save')}
                </form>
            </div>
        );
    }

}

export default NewMovieForm;