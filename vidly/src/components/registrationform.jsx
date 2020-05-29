
import React, {Component} from 'react';
import Form from './common/form';
import Joi from 'joi-browser';

class RegistrationForm extends Form {
    state ={
        data:{username:"", password:"", firstname:""},
        errors:{}
    }

    schema = {
        username: Joi.string().email().required().label("Username"),
        password: Joi.string().min(5).required().label("Password"),
        firstname: Joi.string().required()
    }


    doSubmit = ()=> {
        console.log("submitted")
    }


    render () {
        
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username","Username")}
                    {this.renderInput("password","Password","password")}
                    {this.renderInput("firstname","Name")}
                    {this.submitButton('Register')}
                </form>
            </div>
        );
    }

}

export default RegistrationForm;