import React, {Component} from 'react'

export default class Counter extends Component {
    

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value
    }

    render () { 

        let classes = "badge badge-"
        classes += this.props.counter.value === 0 ? "warning" : "primary";

        return (
           <div className="row">
                <div className="col-1">
                    <span className={classes}>{this.formatCount()}</span>
                </div>
                
                <div className="col">
                    <button 
                        onClick={() => this.props.onIncrement(this.props.counter,'plus')} 
                        className="btn btn-secondary btn-sm">+
                    </button>
                    <button 
                        onClick={() => this.props.onIncrement(this.props.counter,'minus')} 
                        className="btn btn-secondary btn-sm m-2"
                        disabled={this.props.counter.value === 0 ? "disabled" :''}
                        >-
                        
                    </button>
                    <button 
                        onClick={()=>this.props.onDelete(this.props.counter.id)} 
                        className="btn btn-danger btn-sm m-2">X
                    </button>
                </div>
                
          </div>  
        );
    }

}