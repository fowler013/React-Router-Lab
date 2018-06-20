// THIS IS MY FILMS PAGE//
import React, { Component } from 'react';
import {Link} from 'react-router-dom'



class PeoplePage extends Component {

    render() {
        return (
            <div className="col-12 col-sm-6 col-md-7 col-lg-4 my-4">
                <div className="card card-style">


                </div>        <div className="card-body">
                    <h5 className="card-header">{this.props.name}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Age: {this.props.age}</li>
                        <li className="list-group-item">Gender: {this.props.gender}</li>
                        <li className="list-group-item">Hair Color: {this.props.hair_color}</li>
                        <li className="list-group-item">Eye Color: {this.props.eye_color}</li>
                        <Link className="d-block btn btn-warning mt-2" to={"/people/" + this.props.link}>Show Player Card</Link>
                        <li className="list-group-item text-center"><a href={"http://ghibliapi.herokuapp.com/people/" + this.props.link} target="_blank" className="btn btn-secondary mt-2">Go to JSON</a></li>
                    </ul>
                </div>
            </div>
        );
    }







}

export default PeoplePage;