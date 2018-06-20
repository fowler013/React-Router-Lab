// THIS IS MY FILMS PAGE//
import React,{Component} from 'react';
import {Link} from 'react-router-dom'




class FilmsPage extends Component {

    render() {
        return (
            
            <div className="col-md-4 mb-4">
                <div className="card card-style text-light">
                    <div className="card-body text-dark">
                        <h5 className="card-title card-header text-dark">{this.props.title}</h5>
                        <p className = "card-text text-muted desc p-2"> { this.props.desc }</p>
                        <ul className="list-group list-group-flush">
                        <li className="list-group-item">Director: { this.props.dir }</li>
                        <li className="list-group-item">Producer: { this.props.prod }</li>
                        <li className="list-group-item text-muted score">{ this.props.released } | Rotten Tomatoes: { this.props.rt_score }</li>
                        <Link className="d-block btn btn-danger mt-2" to={"/films/" + this.props.link}>Show This Film</Link>
                        <li className="list-group-item text-center"><a href={"http://ghibliapi.herokuapp.com/films/" + this.props.link} target="_blank" className="btn btn-secondary mt-2">Go to JSON</a></li>
                        </ul>
                    </div>
                </div>

            </div>
    )
    }    
        
    }

export default FilmsPage;