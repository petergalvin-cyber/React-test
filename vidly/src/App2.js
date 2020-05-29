import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Movies from './components/movies';
import MovieForm from './components/movieform';
import NewMovieForm from './components/newmovieform';
import Navbar from './components/navbar';
import Customers from './components/customers';
import Rentals from './components/rentals';
import LoginForm from './components/loginform';
import RegistrationForm from './components/registrationform';
import Notfound from './components/notfound';

class App2 extends Component {

render () {
    return (
        <main className="container">
            <Navbar/>
            <Switch>
                <Route path="/loginform" component={LoginForm}/>
                <Route path="/registrationform" component={RegistrationForm}/>
                <Route path="/movies/:id" component={NewMovieForm}></Route>
                <Route path="/movies" component={Movies}></Route>
                <Route path="/customers" component={Customers}></Route>
                <Route path="/rentals" component={Rentals}></Route>
                <Route path="/not-found" component={Notfound}></Route>
                <Redirect from="/" exact to="/movies"/> 
                <Redirect to="/not-found"/>  
            </Switch>
        </main>
    );
}

}

export default App2;
