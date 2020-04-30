import React, { Component } from 'react';
import TableHeader from './common/tableHeader';
import Like from './common/like';


class MoviesTable extends Component {
    
    columns = [
        {path:'title', label:'Title'},
        {path:'genre.name', label:'Genre'},
        {path:'numberInStock', label:'Stock'},
        {path:'dailyRentalRate', label:'Rate'},
        {key: 'like'},
        {key: 'delete'}
    ]

raiseSort = path => {
    const sortColumn = {...this.props.sortColumn}
    if (sortColumn.path === path)
        sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc'
    else {
        sortColumn.path = path
        sortColumn.order = 'asc'
    }  
    this.props.onSort(sortColumn)
};


render () {  
    const {onDelete, onLike, movies, onSort, sortColumn} = this.props;
    return (
        <table className="table table-striped">
            <TableHeader columns={this.columns} onSort={onSort} sortColumn={sortColumn}/>
            <tbody>
                {movies.map((movie) => (
                    <tr key={movie._id}>
                        <td>{movie.title}</td>  
                        <td>{movie.genre.name}</td> 
                        <td>{movie.numberInStock}</td> 
                        <td>{movie.dailyRentalRate}</td> 
                        <td><Like liked={movie.liked} onChange={() => onLike(movie)}/></td>
                        
                        <td><button onClick={()=>onDelete(movie)} 
                                    className="btn btn-sm btn-danger">Delete</button></td> 
                    </tr>  
                )) }
                
            </tbody>  
        </table> 
    );
}
}

export default MoviesTable;