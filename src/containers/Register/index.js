import React, {Component} from 'react';
import {BrowserRouter, Switch,Link,  Route} from 'react-router-dom';
import {register} from '../../context/actions/register';
import api from '../../helpers/api';
import axios from 'axios';



class  Register extends Component
{


state = {
  name: '',
  email: '',
  password: '',
}

handleInput = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  });
}

saveUser = async (e) =>{
  e.preventDefault();

  const res = await axios.post('http://127.0.0.1:8000/api/register', this.state);

  if(res.data.status === 200){

  console.log(res.data.message);
  this.setState({

    name: '',
    email: '',
    password: '',

  });

  }

}

 


render(){
    return (
        <div align="center">
        <div className="login-box" >
          <div className="login-logo">
            <b>L</b>GMAO
          </div>
  
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Register</p>
              <form onSubmit={this.saveUser}>

              <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="name" name="name" onChange={this.handleInput} value={this.state.name}  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
  
                <div className="input-group mb-3">
                  <input type="email" className="form-control" placeholder="Email"  name="email" onChange={this.handleInput} value={this.state.email} />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
  
  
                <div className="input-group mb-3">
                  <input type="password" className="form-control" placeholder="Password"  name="password" onChange={this.handleInput} value={this.state.password}  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
  
  
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">
                        Remember Me
                      </label>
                    </div>
                  </div>
                  {/* /.col */}
                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">S'inscrirer</button>
                  </div>
                  {/* /.col */}
                </div>
              </form>
              {/*<div className="social-auth-links text-center mb-3">
                <p>- OR -</p>
                <a href="#" className="btn btn-block btn-primary">
                  <i className="fab fa-facebook mr-2" /> Sign in using Facebook
                </a>
                <a href="#" className="btn btn-block btn-danger">
                  <i className="fab fa-google-plus mr-2" /> Sign in using Google+
                </a>
                </div>*/}
              {/* /.social-auth-links */}
              <p className="mb-1">
              </p>
              <p className="mb-0">
                <Link to='/auth/login' className="text-center">Se connecter</Link>
              </p>
            </div>
            {/* /.login-card-body */}
          </div>
        </div>
      </div>

    );
              
  }
}

export default Register;
