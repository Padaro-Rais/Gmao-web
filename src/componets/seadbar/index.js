import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import axios from 'axios';


class seadbar extends Component {

  state = {
    userInfo: [],
    Authorization : "",
  };

    componentDidMount(){
     const config = {
      headers : {
          Authorization : 'Bearer '+localStorage.getItem('token')
      }
     };

     axios.get('http://127.0.0.1:8000/api/userInfo', config).then(res =>{
       
     this.setState({
       userInfo : res.data.user
     });

    }).catch(err=>{

       console.log(err)
    })

     
  }



  render(){

    return(
    <div>
       
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
 {/* Brand Logo */}
 <a href="index3.html" className="brand-link">
   <img src={require('../../assets/Profiles/img/AdminLTELogo.png').default} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
   <span className="brand-text font-weight-light">LGMAO</span>
 </a>
 {/* Sidebar */}
 <div className="sidebar">
   {/* Sidebar user panel (optional) */}
   <div className="user-panel mt-3 pb-3 mb-3 d-flex">
     <div className="image">
       <img src={require('../../assets/Profiles/img/user2-160x160.jpg').default} className="img-circle elevation-2" alt="User Image" />
     </div>
     <div className="info">
       <a href="#" className="d-block">{this.state.userInfo.firstname} {this.state.userInfo.lastname} </a> <br/>
       <Link to={'/login'} onClick={() => localStorage.clear} className="d-block">Logout</Link>
     </div>
   </div>
   {/* SidebarSearch Form */}
   <div className="form-inline">
     <div className="input-group" data-widget="sidebar-search">
       <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
       <div className="input-group-append">
         <button className="btn btn-sidebar">
           <i className="fas fa-search fa-fw" />
         </button>
       </div>
     </div>
   </div>
   {/* Sidebar Menu */}
   <nav className="mt-2">
     <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
       {/* Add icons to the links using the .nav-icon class
        with font-awesome or any other icon font library */}
       

       <br/>
       <li className="nav-item">
         <Link to="/" className="nav-link">
           <i className="nav-icon fas fa-th" />
           <p>
             Actualité
             <span className="right badge badge-danger">nouveau</span>
           </p>
         </Link>
       </li><br/>

       <li className="nav-item">
         <Link to="/Material" className="nav-link">
           <i className="nav-icon fas fa-book" />
           <p>
             Equipments
           </p>
         </Link>
       </li><br/>


       <li className="nav-item">
         <a href="#" className="nav-link">
           <i className="nav-icon fas fa-tree" />
           <p>
             Fournisseur
           </p>
         </a>
       </li><br/><br/>

       <li className="nav-header"></li>

       
       <li className="nav-item">
         <a href="#" className="nav-link">
           <i className="nav-icon fas fa-copy" />
           <p>
             Activité
             <span className="badge badge-info right">6</span>
           </p>
         </a>
       </li><br/>

       <li className="nav-item">
         <a href="#" className="nav-link">
           <i className="nav-icon fas fa-chart-pie" />
           <p>
             Taches
           </p>
         </a>
       </li><br/>

       <li className="nav-item">
         <a href="pages/calendar.html" className="nav-link">
           <i className="nav-icon far fa-calendar-alt" />
           <p>
             Planning
             <span className="badge badge-info right">2</span>
           </p>
         </a>
       </li>

       <br/>

       <li className="nav-item">
         <Link to="/User" className="nav-link">
           <i className="nav-icon fas fa-table" />
           <p>
             Equipe
           </p>
         </Link>
       </li>

       <li className="nav-item menu-open">
         <a href="#" className="nav-link active">
           <i className="nav-icon fas fa-tachometer-alt" />
           <p>
             Tableau de bord
           </p>
         </a>
       </li>
     </ul>

   </nav>
   {/* /.sidebar-menu */}
 </div>
 {/* /.sidebar */}
</aside>





   </div>
   ) ;

 }

}



export default seadbar;