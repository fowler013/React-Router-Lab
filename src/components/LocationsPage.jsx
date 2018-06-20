// THIS IS MY FILMS PAGE//
import React, { Component } from 'react';
import {Link} from 'react-router-dom'



class LocationsPage extends Component {

    render() {
        return (
            <div className="col-12 col-sm-6 col-md-7 col-lg-4 my-4">
                <div className="card card-style">


                </div>        <div className="card-body">
                    <h5 className="card-header">{this.props.name}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Climate: {this.props.climate}</li>
                        <li className="list-group-item">Terrain: {this.props.terrain}</li>
                        <li className="list-group-item">Surface Water: {this.props.surface_water}</li>
                        <Link className="d-block btn btn-success mt-2" to={"/locations/" + this.props.link}>Show Location Info</Link>
                        <li className="list-group-item text-center"><a href={"http://ghibliapi.herokuapp.com/locations/" + this.props.link} target="_blank" className="btn btn-secondary mt-2">Go to JSON</a></li>
                    </ul>
                </div>
            </div>
        );
    }







}

export default LocationsPage;