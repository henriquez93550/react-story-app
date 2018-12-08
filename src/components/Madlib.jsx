import React, { Component } from 'react';
import './Container.css';

class Madlib extends Component {
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
                    <p>Count Olaf was a very {adjective} superhero.
He had a {noun} that was so strong it could even lift {noun}.
He was even more powerful if he had on his {adjective} cape.  Which was given to him by the Grand {noun} of America. One time he even saved the entire {noun} with only his trusty {noun}.
Not to mention the time he rescued the bus full of {adjective} [plural noun] by {adverb} throwing the bus to safety. For his bravery the mayor of his city gave him the {noun} to the city!
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

export default Madlib