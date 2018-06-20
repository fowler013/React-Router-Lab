import React, { Component } from 'react';
//import '../src/app.css';
import 'isomorphic-fetch';
import LocationsPage from './LocationsPage';
import 'es6-promise';

class Locations extends Component {
    constructor(props) {
        super(props);

        this.state = {
            locationBox: []
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/locations")
            .then(res => res.json())
            .then(object => {
                let locations= object.map((locations, id) => {
                    return (
                        <LocationsPage
                            key={id}
                            name={locations.name}
                            climate={locations.climate}
                            terrain={locations.terrain}
                            surface_water={locations.surface_water}
                            residents={locations.residents}
                            films={locations.films} 
                            link={locations.id} />
                    )
                })
                this.setState({ location: locations })
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <React.Fragment>
                <div className="container d-flex flex-column justify-content-center align-items-center p-3">
                    <h1 className="section-title text-success">Locations</h1>
                    <hr className="section-hr" />
                </div>
                <div className = "cards-container container">
                <div className="row">
                {this.state.location}
                </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Locations;