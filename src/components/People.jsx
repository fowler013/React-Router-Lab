import React, { Component } from 'react';
//import '../src/app.css';
import 'isomorphic-fetch';
import PeoplePage from './PeoplePage';
import 'es6-promise';

class People extends Component {
    constructor(props) {
        super(props);

        this.state = {
            peopleBox: []
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(object => {
                let peopleCollected = object.map((peopleCollected, id) => {
                    return (
                        <PeoplePage
                            key={id}
                            name={peopleCollected.name}
                            gender={peopleCollected.gender}
                            age={peopleCollected.age}
                            hair_color={peopleCollected.hair_color}
                            eye_color={peopleCollected.eye_color} 
                            link={peopleCollected.id} />
                    )
                })
                this.setState({ people: peopleCollected })
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <React.Fragment>
                <div className="container d-flex flex-column justify-content-center align-items-center p-3">
                    <h1 className="section-title text-warning">People List</h1>
                    <hr className="section-hr" />
                </div>
                <div className = "cards-container container">
                <div className="row">
                {this.state.people}
                </div>
                </div>
            </React.Fragment>
        )
    }
}

export default People