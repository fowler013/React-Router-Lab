import React, { Component } from 'react'
import { Link } from 'react-router-dom'



class OneLocation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            objects: []
        }
    }

    componentDidMount() {
        let url = "http://ghibliapi.herokuapp.com/locations/" + this.props.match.params.id; //MAKE YOUR TO REVIEW THIS AND REMEMBER THIS//
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(aLocation => this.setState({ objects: aLocation }))
    }

    render() {
        return (
            <div className="col-12 col-sm-6 col-md-7 col-lg-4 my-4">
                <div className="card card-style">


                </div>        <div className="card-body">
                    <h5 className="card-header">{this.state.objects.name}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Climate: {this.state.objects.climate}</li>
                        <li className="list-group-item">Terrain: {this.state.objects.terrain}</li>
                        <li className="list-group-item">Surface Water: {this.state.objects.surface_water}</li>
                        <Link className="d-block btn btn-success  mt-2 " to={"/locations/"}>Show Location Info</Link>
                        <li className="list-group-item text-center"><a href={"http://ghibliapi.herokuapp.com/locations/" + this.state.objects.link} target="_blank" className="btn btn-secondary mt-2">Go to JSON</a></li>
                    </ul>
                </div>
            </div>
        );
    }

}

export default OneLocation