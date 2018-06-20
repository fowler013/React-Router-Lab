//THIS IS WHERE I WILL CREATE THE ID FOR ONE FILM//
import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class OneFilm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            objects: []
        }
    }

    componentDidMount() {
        let url = "http://ghibliapi.herokuapp.com/films/" + this.props.match.params.id; //MAKE YOUR TO REVIEW THIS AND REMEMBER THIS//
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(aFilm => this.setState({ objects: aFilm }))
    }    
    
    render() {
        return (
                <div className="card card-style single">
                    <div className="card-body">
                        <h5 className="card-title card-header">{this.state.objects.title}</h5>
                        <p className="card-text text-muted desc p-2"> {this.state.objects.description}</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Director: {this.state.objects.director}</li>
                            <li className="list-group-item">Producer: {this.state.objects.producer}</li>
                            <li className="list-group-item text-muted score">{this.state.objects.release_date} | Rotten Tomatoes: {this.state.objects.rt_score}</li>
                            <Link className="d-block btn btn-danger mt-2" to={"/films/"}>View All Films</Link>
                            <li className="list-group-item text-center"><a href={"http://ghibliapi.herokuapp.com/films/" + this.state.objects.link} target="_blank" className="btn btn-secondary mt-2">Go to JSON</a></li>
                        </ul>
                    </div>
                </div>
          
        )
    }
}

export default OneFilm;