import React, { Component } from 'react';

class DogPosting extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {
        return (
            <div>
                <p>{this.props.name}{this.props.bread}</p>
                <img src={this.props.dogURL} alt='dog'/>
            </div>
        )
    }
}

export default DogPosting;