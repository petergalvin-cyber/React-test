import React, { Component } from 'react';
import TableHeader from './common/tableHeader';
import TableBody from './common/tableBody';
import Like from './common/like';


class MoviesTable extends Component {
    
    columns = [
        {path:'title', label:'Title'},
        {path:'genre.name', label:'Genre'},
        {path:'numberInStock', label:'Stock'},
        {path:'dailyRentalRate', label:'Rate'},
        {key: 'like', content:movie => <Like liked={movie.liked} 
                                        onChange={()=>this.props.onLike(movie)}/>},
        
        {key: 'delete', content:movie => <button onClick={()=>this.props.onDelete(movie)} 
                                        className="btn btn-sm btn-danger">Delete</button>}
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
    const {movies, onSort, sortColumn} = this.props;
    return (
        <table className="table table-striped">
            <TableHeader columns={this.columns} onSort={onSort} sortColumn={sortColumn}/>
            <TableBody columns={this.columns} data={movies}/>
            
        </table> 
    );
}
}

export default MoviesTable;