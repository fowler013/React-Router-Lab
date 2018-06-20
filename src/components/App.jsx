import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import OneFilm from './OneFilm'
import HomePage from './HomePage'
import OnePeople from './OnePeople'
import Films from './Films'
import People from './People'
import Locations from './Locations'
import OneLocation from './OneLocation';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Router>
                    <Fragment>
                        <div className="button-container d-flex justify-content-around fixed-top bg-white pt-2 pb-2">
                            <Link to="/" className="btn-films btn-outline-primary btn button">Go Home</Link>
                            <Link to="/films" className="btn-films btn-outline-danger btn button">View Films</Link>
                            <Link to="/people" className="btn-films btn-outline-warning btn button">View People</Link>
                            <Link to = "/locations" className ="btn-films btn-outline-success btn button">View Location</Link>
                        </div>

                        <div className="container mt-5">
                            <Switch>
                                <Route exact path="/" component={HomePage} />
                                <Route exact path="/films" component={Films} />
                                <Route exact path="/people" component={People} />
                                <Route exact path ="/locations" component={Locations} />
                                <Route exact path="/films/:id" component={OneFilm} />
                                <Route exact path="/people/:id" component={OnePeople} />
                                <Route exact path="/locations/:id" component={OneLocation} />
                            </Switch>
                        </div>

                    </Fragment>
                </Router>
            </Fragment>
        );
    }
}








export default App;