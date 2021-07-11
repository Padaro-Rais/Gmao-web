import React, {Component} from 'react';
import Header from "../../componets/header";
import Seadbar from "../../componets/seadbar";
import {Redirect, Link ,useHistory} from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast} from 'react-toastify';
import  'react-toastify/dist/ReactToastify.css';









class  add extends Component
{

    handleSubmit = (e) => {
        e.preventDefault();

        let formdata = new FormData()


        formdata.append('firstname',this.firstname)
        formdata.append('lastname',this.lastname)
        formdata.append('username',this.username)
        formdata.append('email',this.email)
        formdata.append('password',this.password)
        formdata.append('address',this.address)
        formdata.append('tel',this.tel)
        formdata.append('date_naiss',this.date_naiss)
        formdata.append('role_id',this.role_id)
        formdata.append('img',this.img)
    
        axios.post('http://127.0.0.1:8000/api/user',formdata).then(res =>{

            toast.success(res.data.message)
            setTimeout(() => {
              this.props.history.push('/User')
            }, 5000)               
        }).catch(err=>{


        })
    
      
    
    
      };

 
 


render(){

    

    return (
       <div>
           <Header />
           <Seadbar />


         <div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Nouvel Utilisateur</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Acceuil/utilisateur</a></li>
            <li className="breadcrumb-item active">Utilisateur</li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        {/* left column */}
        <div className="col-md-12">
          {/* general form elements */}
          <div className="card card-secondary">
            <div className="card-header">
              <h3 className="card-title">Utilisateur</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form onSubmit={this.handleSubmit}>
              <div className="card-body">

              <div className="row">
                  <div className="col-sm-6">
                    {/* text input */}
                    <div className="form-group">
                      <label>Prenoms</label>
                      <input type="text" className="form-control" placeholder="Enter ..." onChange={e=>this.firstname=e.target.value} />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Nom</label>
                      <input type="text" className="form-control" placeholder="Enter ..." onChange={e=>this.lastname=e.target.value} />
                    </div>
                  </div>
              </div>

              <div className="row">
                  <div className="col-sm-6">
                    {/* text input */}
                    <div className="form-group">
                      <label>Nom d'utilisateur</label>
                      <input type="text" className="form-control" placeholder="Enter ..." onChange={e=>this.username=e.target.value}/>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="form-control" placeholder="Enter ..." onChange={e=>this.email=e.target.value}/>
                    </div>
                  </div>
              </div>

              <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Mot de passe</label>
                  <input type="password" className="form-control"  placeholder="Password" onChange={e=>this.password=e.target.value} />
              </div>

              

              <div className="row">
                  <div className="col-sm-6">
                    {/* text input */}
                    <div className="form-group">
                      <label>adresse</label>
                      <input type="text" className="form-control" placeholder="Enter ..." onChange={e=>this.address=e.target.value}/>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Date de naissance</label>
                      <input type="date" className="form-control" placeholder="Enter ..." onChange={e=>this.date_naiss=e.target.value} />
                    </div>
                  </div>
              </div>

              <div className="row">
                  <div className="col-sm-6">
                    {/* text input */}
                    <div className="form-group">
                      <label>Telephone</label>
                      <input type="text" className="form-control" placeholder="Enter ..." onChange={e=>this.tel=e.target.value}/>
                    </div>
                  </div>

                  <div class="col-sm-6">
                      <div class="form-group">
                        <label>Custom Select</label>
                        <select class="custom-select" onChange={e=>this.role_id=e.target.value} >
                          <option value={0}></option>
                          <option value={1}>Admin</option>
                          <option value={2}>Manager</option>

                          
                        </select>
                      </div>
                    </div>
                </div>

                <div class="form-group">
                    <label for="customFile">Profile</label> 

                    <div class="custom-file">
                      <input type="file" class="custom-file-input" id="customFile" onChange={e=>this.img=e.target.files[0]}/>
                      <label class="custom-file-label" for="customFile">Choisir profile</label>
                    </div>
                </div>



               

                
               
              </div>
              {/* /.card-body */}
              <div className="card-footer">
                <button type="submit" className="btn btn-primary">valider</button>
              </div>
            </form>
          </div>
          {/* /.card */}
          {/* general form elements */}
          {/* /.card */}
          {/* Input addon */}
            {/* /.card-body */}
          {/* /.card */}
          {/* Horizontal Form */}
          {/* /.card */}
        {/*/.col (left) */}
        {/* right column */}
          {/* /.card */}
          {/* general form elements disabled */}
            {/* /.card-body */}
          
          
        {/*/.col (right) */}
      {/* /.row */}
      </div>
      </div>
      </div>


  </section>
  {/* /.content */}
</div>


<ToastContainer/>
   
          
</div>
            
    

    );
              
  }
}

export default add;
