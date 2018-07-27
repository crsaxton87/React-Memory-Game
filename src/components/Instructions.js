import React, { Component } from 'react';
import './Instructions.css';

class Instructions extends Component {

    render() {
        return (
            <div className="container-fluid instructions">
                <p>Click on an image to earn points, but don't click on any more than once!</p>
            </div>
        );
    }
}

export default Instructions;