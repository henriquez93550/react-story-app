import React, { Component } from "react";
import "./Animation.css";

class Animation extends Component {
  render() {
    return (
      <div className="animation">
        <h3>Mad Libs!</h3>
        <div class="buttonHolder">
          <button className="buttonA">
            <a href="/">Begin</a>
          </button>
        </div>
        <div className="sky" />
        <img className="cloud" src="/images/cloud.png" alt="" />
        <img className="cloud2" src="/images/cloud.png" alt="" />
        <div className="grass" />
        <div className="road">
          <div className="lines" />
          <img className="mario" src="/images/mario.png" alt="" />
          <img className="luigi" src="/images/luigi.png" alt="" />
        </div>
      </div>
    );
  }
}

export default Animation;
