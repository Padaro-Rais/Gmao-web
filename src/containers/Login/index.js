import React, {Component, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast} from 'react-toastify';
import  'react-toastify/dist/ReactToastify.css';

import './login.css';






class  Login extends Component
{


  handleSubmit = (e) => {
    e.preventDefault();
    
    const data = {
      email: this.email,
      password: this.password
    }

    axios.post('http://127.0.0.1:8000/api/login', data).then(res =>{

       localStorage.setItem('token',res.data.token);
       toast.success(res.data.message)
        setTimeout(() => {
          this.props.history.push('/app')
        }, 5000)             
    }).catch(err=>{
      toast.error(err)
    })

  


  };
 
 


render(){

    return (
      <div className="parent clearfix">
  <div className="bg-illustration">
    <img src="https://i.ibb.co/Pcg0Pk1/logo.png" alt="logo" />
    <div className="burger-btn">
      <span />
      <span />
      <span />
    </div>
  </div>
  <div className="login">
    <div className="container">
      <h1>Login to access to<br />your account</h1>
      <div className="login-form">
        <form  onSubmit={this.handleSubmit} >
          <input type="email" placeholder="E-mail Address" onChange={e=>this.email=e.target.value} />
          <input type="password" placeholder="Password" onChange={e=>this.password=e.target.value} />
          <div className="remember-form">
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
          <div className="forget-pass">
            <a href="#">Forgot Password ?</a>
          </div>
          <button type="submit">LOG-IN</button>
        </form>
      </div>
    </div>
  </div>
  <ToastContainer/>
</div>


    );
              
  }
}

export default Login;
