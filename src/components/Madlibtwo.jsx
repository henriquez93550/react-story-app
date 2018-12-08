import React, { Component } from 'react';
import './Container.css';

class Madlibtwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noun: '',
            adjective: '',
            adverb: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // const data = this.data
        // console.log("This was sent to backend", data);
    }

    handleInputChange = (event) => {
        event.preventDefault()
        // console.log(event);
        // console.log(event.target.name);
        // console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })

    }
    render() {
        const {noun} = this.state
        const {adjective} = this.state
        const {adverb} = this.state

        return (
            <div className="grid">
                <div className="madlibwrap">
                    <p>Dogs are man’s {adjective} friend.  Every {noun} should have one, 
                        unless they already have a {noun}, then they should have 2. 
                        The best dogs to have are really {adjective}.  They are the best {noun}. 
                        They love to go to the {noun} and play at the {noun}. 
                        And if you give them {adjective} [plural noun] they {adverb} love you, the rest of your {noun}!
</p>
                    <form onSubmit={this.handleSubmit}>
                        <p><input type='text' placeholder='noun' name='noun' onChange={this.handleInputChange} /></p>
                        <p><input type='text' placeholder='adjective' name='adjective' onChange={this.handleInputChange} /></p>
                        <p><input type='text' placeholder='adverb' name='adverb' onChange={this.handleInputChange} /></p>
                    
                    </form>
                    {/* <button type="submit"> Results</button> */}
                </div>



            </div>

        );
    }

}

export default Madlibtwo