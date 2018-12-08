import React, { Component } from 'react';
import './Container.css';

class Container extends Component {
    render() {
        return (
            <div className="grid">
          
                <div className="madlibwrap">
                <div className="css-typing">
                    <p>{this.props.madlib}</p>
                    </div>
                        <button type="submit"> Results</button>

                    

                </div>
            </div>
        );
    }

}

export default Container