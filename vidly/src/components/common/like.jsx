import React from 'react';

const Like = ({liked, onChange}) =>  {
   
    let classes = "fa fa-heart"
    if (!liked) classes+="-o";  // const d=this.state.like
    return ( 
        <i 
        onClick={onChange} 
        className={classes} 
        style = {{cursor:'pointer'}}
        aria-hidden="true">
        </i>
        
    );
    
}

export default Like;