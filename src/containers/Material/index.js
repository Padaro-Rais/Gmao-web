import React, {Component} from 'react';
import Header from "../../componets/header";
import Seadbar from "../../componets/seadbar";
import {Redirect, Link ,useHistory} from 'react-router-dom';
import axios from 'axios';
import aa from '../../assets/Profiles/img/user2-160x160.jpg'





class  Material extends Component
{

    state = {
        users: [],
        Authorization : "",
        loading: true,
      };
    
        componentDidMount(){
         const config = {
          headers : {
              Authorization : 'Bearer '+localStorage.getItem('token')
          }
         };
    
         axios.get('http://127.0.0.1:8000/api/user', config).then(res =>{
           
         this.setState({
           users : res.data.user,
           loading: false,
         });
    
        }).catch(err=>{
    
           console.log(err)
        })
    
         
      }

 
 


render(){

    var Table = "";
    if(this.state.loading){
               Table = <tr><td><h2>Chargement...</h2></td></tr>
    }else{
               Table= 
               this.state.users.map((item) => {
                   return(
                    <tr key={item.id}>
                    <td><img width="80" height="80" src={item.img}/></td>
                    <td>{item.firstname} {item.lastname}</td>
                    <td>{item.email}</td>
                    <td><span className="tag tag-success">{item.label}</span></td>
                    <td>
                          <a class="btn btn-primary btn-sm" href="#">
                              <i class="fas fa-folder">
                              </i>
                              View
                          </a>
                          <a class="btn btn-info btn-sm" href="#">
                              <i class="fas fa-pencil-alt">
                              </i>
                              Edit
                          </a>
                          <a class="btn btn-danger btn-sm" href="#">
                              <i class="fas fa-trash">
                              </i>
                              Delete
                          </a></td>
                  </tr>

                   );
               })
        
    }


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
          <h1>Materiel</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Acceil</a></li>
            <li className="breadcrumb-item active">Materiel</li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Materiel</h3>
              <div className="card-tools">

              <div className="input-group input-group-sm" style={{width: 150}}>
                 <Link to='/Material/Add'><button type="button"  class="btn btn-block btn-outline-success">Nouveau + </button></Link>
              </div><br/>

                <div className="input-group input-group-sm" style={{width: 150}}>   

                  <input type="text" name="table_search" className="form-control float-right" placeholder="Recherche" />
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-default">
                      <i className="fas fa-search" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body table-responsive p-0">
              <table className="table table-hover text-nowrap">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Nom</th>
                    <th>Categorie</th>
                    <th>type</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {Table} 
                </tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
      </div>
      {/* /.row */}
      {/*
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Fixed Header Table</h3>
              <div className="card-tools">
                <div className="input-group input-group-sm" style={{width: 150}}>
                  <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-default">
                      <i className="fas fa-search" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body table-responsive p-0" style={{height: 300}}>
              <table className="table table-head-fixed text-nowrap">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>User</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Reason</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>183</td>
                    <td>John Doe</td>
                    <td>11-7-2014</td>
                    <td><span className="tag tag-success">Approved</span></td>
                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                  </tr>
                  <tr>
                    <td>219</td>
                    <td>Alexander Pierce</td>
                    <td>11-7-2014</td>
                    <td><span className="tag tag-warning">Pending</span></td>
                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                  </tr>
                  <tr>
                    <td>657</td>
                    <td>Bob Doe</td>
                    <td>11-7-2014</td>
                    <td><span className="tag tag-primary">Approved</span></td>
                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                  </tr>
                  <tr>
                    <td>175</td>
                    <td>Mike Doe</td>
                    <td>11-7-2014</td>
                    <td><span className="tag tag-danger">Denied</span></td>
                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                  </tr>
                  <tr>
                    <td>134</td>
                    <td>Jim Doe</td>
                    <td>11-7-2014</td>
                    <td><span className="tag tag-success">Approved</span></td>
                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                  </tr>
                  <tr>
                    <td>494</td>
                    <td>Victoria Doe</td>
                    <td>11-7-2014</td>
                    <td><span className="tag tag-warning">Pending</span></td>
                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                  </tr>
                  <tr>
                    <td>832</td>
                    <td>Michael Doe</td>
                    <td>11-7-2014</td>
                    <td><span className="tag tag-primary">Approved</span></td>
                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                  </tr>
                  <tr>
                    <td>982</td>
                    <td>Rocky Doe</td>
                    <td>11-7-2014</td>
                    <td><span className="tag tag-danger">Denied</span></td>
                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      */}
    </div>{/* /.container-fluid */}
  </section>
  {/* /.content */}
</div>
            
       </div>

    );
              
  }
}

export default Material;
