import React, {Component} from 'react';
import { connect } from 'react-redux';


class MainPortfolio extends Component {
    render() {
        const projectsList = this.props.projects.map(project => {
            return (
                
                <div className="section">
                    <div key={project.id} className="col s12 m7">  
                        <div className="card hoverable">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src={project.picture} alt="website screan"/>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4v">{project.name}<i className="material-icons left">more_vert</i></span>
                            </div>
                            <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">{project.name}<i className="material-icons right">close</i></span>
                                <p className="flow-text">{project.description}</p>
                                <div className="divider"></div>
                                <h3 className="card-title grey-text text-darken-4">Established skill set:</h3>
                                {project.skills.map(skill => {
                                    return (
                                        <ol>
                                            <li className="flow-text">{skill}</li>
                                        </ol>
                                    )
                                })}
                                <div className="card-action">
                                    <h5><a href={project.adress} target="_blank" rel="noopener noreferrer">GITHUB</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            )
        })
        return(
            <div className="container home">
                <h4 class="black-text">Contact:</h4>
                {projectsList}
            </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects
    }
}

export default connect(mapStateToProps)(MainPortfolio)