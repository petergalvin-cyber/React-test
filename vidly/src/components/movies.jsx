import React, {Component} from 'react';
import {getMovies} from '../services/fakeMovieService';
import {paginate} from '../utils/paginate'
import Pagination from './common/pagination'
import ListGroup from './common/listgroup'
import MovieTable from './moviesTable'
import { getGenres } from '../services/fakeGenreService';
import _ from 'lodash'
 

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        currentPage : 1,
        pageSize : 4,
        sortColumn : {path:'title', order:'asc'}
    };

componentDidMount () {
    const genres = [{_id:"", name:"All Genres"},...getGenres()]
    this.setState({movies:getMovies(), genres})
}

handleDelete = (movie) => {
    let movies = this.state.movies.filter(m => m._id !== movie._id)
    this.setState({movies})
}

handleGenreSelect = genre => {
    this.setState({selectedGenre : genre, currentPage : 1})
    
}

handlePageChange = (page) => {
    this.setState({currentPage : page})
}

handleSort = sortColumn => {
    //let sortColumn = {...path}
    this.setState({sortColumn})
}


toggleLike = (movie) => {
    const movies = [...this.state.movies]
    const index = movies.indexOf(movie)
    //movies[index] = {...movie}
    movies[index].liked = !movies[index].liked
    this.setState({movies}) 
    //console.log('clicked',movie)
}

renderTable()  {
    const {length:count} = this.state.movies;
    const {pageSize, currentPage, selectedGenre, sortColumn, movies: allmovies} = this.state;

    if (count === 0) return <p>There are no movies in the database</p> 
    
    const filtered = selectedGenre && selectedGenre._id 
                    ? allmovies.filter(m => m.genre._id === selectedGenre._id) 
                    : allmovies;

    const sorted = _.orderBy(filtered,[sortColumn.path],[sortColumn.order])                
    const movies = paginate (sorted, currentPage, pageSize)

    return (  
     <div className="row">
        <div className="col-3">   
            <ListGroup 
                items={this.state.genres} 
                selectedItem = {this.state.selectedGenre}
                onItemSelect = {this.handleGenreSelect}/>
            
        </div>
        <div className="col">
            {<p>Showing {filtered.length} movies in the database</p>}
            <MovieTable onDelete={this.handleDelete}
                        onLike={this.handleLike}
                        onSort={this.handleSort}
                        sortColumn={sortColumn}
                        movies={movies}/>

            <Pagination 
                itemsCount={filtered.length} 
                pageSize={pageSize} 
                currentPage = {currentPage}
                onPageChange={this.handlePageChange}/>
        </div>
     </div>    
 )
}    
    
       
render () {
    return (
        <main className="container">
            {this.renderTable()}
            
        </main>
    );
}


}

export default Movies;