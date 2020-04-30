import React, {Component} from 'react';
import Navbar from './components/navbar'
import Counters from './components/counters'
import './App.css';



class App extends Component {
    
    state = {
        counters:[
            {id:1, value:0},
            {id:2, value:4},
            {id:3, value:0},
            {id:4, value:0},
        ]
    }

    handleIncrement = (counter, UpDown) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter}
        
        if (UpDown=="plus") {
        counters[index].value++
        }
        else {
            counters[index].value=counters[index].value-1
            
        }
        
        this.setState({counters})
        
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c=> c.id !== counterId);
        this.setState({counters});
        
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value=0
            return c;
        })

        this.setState({counters})
    }

    render () {
        return (
        <React.Fragment>  
            <Navbar/>   
            <main className="container-fluid">
                <Counters 
                    counters = {this.state.counters}
                    onIncrement={this.handleIncrement}
                    onDelete = {this.handleDelete}
                    onReset = {this.handleReset}
                />  
            </main>
        </React.Fragment>  
        );
    }
}

export default App;
