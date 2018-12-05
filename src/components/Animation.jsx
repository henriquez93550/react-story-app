import React, { Component } from 'react';
import './Animation.css';


class Animation extends Component {
    render() {
        return (
            <div className="animation">
            <h3>Mad Libs!</h3>
            <div className="sky" ></div >
                <div className="grass"></div>
                <div className="road">
                    <div className="lines"></div>
                    <img className="mario" src="/images/mario.png" alt="" />
                    <img className="luigi" src="/images/luigi.png" alt="" />
                </div>
                </div>

        );
    }
}

export default Animation