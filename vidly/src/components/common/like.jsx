import React from 'react';

const Like = props =>  {
   
    let classes = "fa fa-heart"
    if (!props.liked) classes+="-o";  // const d=this.state.like
    return ( 
        <i 
        onClick={props.onChange} 
        className={classes} 
        style = {{cursor:'pointer'}}
        aria-hidden="true">
        </i>
        
    );
    
}

export default Like;