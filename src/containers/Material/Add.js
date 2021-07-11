import React, { Component, useState } from 'react';
import Header from "../../componets/header";
import Seadbar from "../../componets/seadbar";
import { Redirect, Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';







class Add extends Component {

    state = {
        MType: [],
        MCat: [],
        MSup: [],
        Loc: []
    };

    componentDidMount() {

        axios.get('http://127.0.0.1:8000/api/MaterialTypes').then(res => {

            this.setState({
                MType: res.data
            });

        });

        axios.get('http://127.0.0.1:8000/api/MaterialCategory').then(res => {

            this.setState({
                MCat: res.data
            });

        });

        axios.get('http://127.0.0.1:8000/api/MaterialSuppliers').then(res => {

            this.setState({
                MSup: res.data
            });

        });

        axios.get('http://127.0.0.1:8000/api/Locations').then(res => {

            this.setState({
                Loc: res.data
            });

        });
    }






    handleSubmit = (e) => {
        e.preventDefault();

        let formdata = new FormData()


        formdata.append('firstname', this.firstname)
        formdata.append('lastname', this.lastname)
        formdata.append('username', this.username)
        formdata.append('email', this.email)
        formdata.append('password', this.password)
        formdata.append('address', this.address)
        formdata.append('tel', this.tel)
        formdata.append('date_naiss', this.date_naiss)
        formdata.append('role_id', this.role_id)
        formdata.append('img', this.img)

        axios.post('http://127.0.0.1:8000/api/user', formdata).then(res => {

            toast.success(res.data.message)
            setTimeout(() => {
                this.props.history.push('/User')
            }, 5000)
        }).catch(err => {


        })




    };





    render() {


        var OptionT = "";
        OptionT = this.state.MType.map((item) => {
            return (
                <option>{item.label}</option>

            );
        });

        var OptionC = "";
        OptionC = this.state.MCat.map((item) => {
            return (
                <option>{item.label}</option>

            );
        });

        var OptionF = "";
        OptionF = this.state.MSup.map((item) => {
            return (
                <option>{item.social_reason}</option>

            );
        });

        var OptionL = "";
        OptionL = this.state.Loc.map((item) => {
            return (
                <option>{item.physical_address} {item.location_label}</option>

            );
        });


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
                                        <li className="breadcrumb-item"><a href="#">Acceuil</a></li>
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
                                {/* left column */}
                                <div className="col-md-10">
                                    {/* general form elements */}
                                    <div className="card card-secondary">
                                        <div className="card-header">
                                            <h3 className="card-title">Materiel</h3>
                                        </div>
                                        {/* /.card-header */}
                                        {/* form start */}
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="card-body">

                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        {/* text input */}
                                                        <div className="form-group">
                                                            <label>Libelle</label>
                                                            <input type="text" className="form-control" placeholder="Enter ..." onChange={e => this.firstname = e.target.value} />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <label>Description</label>
                                                            <textarea type="text" className="form-control" placeholder="Enter ..." onChange={e => this.lastname = e.target.value} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-4">
                                                        <label>prix</label>
                                                        <input type="text" class="form-control" placeholder="prix" />
                                                    </div>
                                                    <div class="col-4">
                                                        <label>date d'acquisition</label>
                                                        <input type="date" class="form-control" placeholder="date" />
                                                    </div>
                                                    <div class="col-4">
                                                        <label>Duree de vie</label>
                                                        <input type="text" class="form-control" placeholder="duree de vie" />
                                                    </div>
                                                </div>


                                                <div className="row">
                                                    <div class="col-sm-6">
                                                        <div class="form-group">
                                                            <label>Type</label>
                                                            <select class="custom-select" onChange={e => this.role_id = e.target.value} >
                                                                {OptionT}

                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-6">
                                                        <div class="form-group">
                                                            <label>Categorie</label>
                                                            <select class="custom-select" onChange={e => this.role_id = e.target.value} >
                                                                {OptionC}

                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div class="col-sm-6">
                                                        <div class="form-group">
                                                            <label>Adresse</label>
                                                            <select class="custom-select" onChange={e => this.role_id = e.target.value} >
                                                              {OptionL}

                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-6">
                                                        <div class="form-group">
                                                            <label>Fournisseur</label>
                                                            <select class="custom-select" onChange={e => this.role_id = e.target.value} >
                                                                {OptionF}

                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div class="form-group">
                                                    <label for="customFile">Image</label>

                                                    <div class="custom-file">
                                                        <input type="file" class="custom-file-input" id="customFile" onChange={e => this.img = e.target.files[0]} />
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
                                    
                                </div>
                            </div>
                        </div>


                    </section>
                </div>


                <ToastContainer />


            </div>



        );



    }
}

export default Add;
