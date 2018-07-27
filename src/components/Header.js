import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    render() {
        return (
            <div className="container-fluid header">
            <div className="row navbar">
                <div className="col-md-4 col-sm-12 col-xs-12 nav-item" id="navLeft">
                    <span><img src="./assets/images/brand.png" alt="brand-img" className="brand" />
                    Steven Universe<br />Clicky Game</span>
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12 nav-item" id="navCenter">
                    <span>{this.props.middle}</span>
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12 nav-item" id="navRight">
                    <span>Score: {this.props.score} | Top Score: {this.props.topScore}</span>
                </div>    
            </div>
            </div>
        );
    }
}

export default Header;