import React, { Component } from 'react';
import AuthService from './AuthService';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';


class Login extends Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new AuthService();
    }

    componentWillMount(){
    if(this.Auth.loggedIn())
        this.props.history.replace('/');
    }

    handleSignup(){
        this.props.history.replace('/signup');
     }
    handleForgotPassword(){
        this.props.history.replace('/signup');
     }
    render() {
        return (
            <div className="center">
                <div className="card">
                    <h1>Login</h1>
                    <form>
                        <input
                            className="form-item"
                            placeholder="Email goes here..."
                            name="email"
                            type="text"
                            onChange={this.handleChange}
                        />
                        <input
                            className="form-item"
                            placeholder="Password goes here..."
                            name="password"
                            type="password"
                            onChange={this.handleChange}
                        />
                        <input
                            className="form-submit"
                            value="Login"
                            type="submit"
                            onClick={this.handleFormSubmit}

                        />
                    </form>
                    <h1></h1>
                    <div className='row'>
                      <div className='col-md-3'>
                        <button type="button" className="form-submit" onClick={this.handleSignup.bind(this)}>Signup</button>
                      </div>
                      <div className='col-md-1'>
                      </div>
                      <div className='col-md-8'>
                        <button type="button" className="form-submit" onClick={this.handleForgotPassword.bind(this)}>Forgot Password</button>
                      </div>
                    </div>
                </div>
            </div>
        );
    }

    handleChange(e){
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    handleFormSubmit(e){
           e.preventDefault();
           this.Auth.login(this.state.email,this.state.password)
               .then(res =>{
                  this.props.history.replace('/');
               })
               .catch(err =>{
                 console.log('err')
                   alert(err);
               })
       }
}

export default Login;
