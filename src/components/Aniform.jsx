import React, { Component } from 'react';
import './Aniform.css';



const formValid= ({ formErrors, ...rest }) => {
    let valid = true;
    // validate form errors being empty
Object.values(formErrors).forEach(val => {
val.length > 0 && (valid = false);
});

return valid;
};

class Aniform extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            noun: null,
            verb: null,
            adjective: null,
            adverb: null,
            formErrors: {
                noun: "",
                verb: "",
                adjective: "",
                adverb: ""

            }
        };
    }
    




    // e = event
handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state.formErrors)) {
        console.log(`
        noun: ${this.state.noun}
        verb: ${this.state.verb}
        adjective: ${this.state.adjective}
        adverb: ${this.state.adverb}
        
        `)
    } else {
        console.error('FORM INVALID - Display error message');
    }
};
// makes sure a certain amount of characters are put into the fields
    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target
        let formErrors = this.state.formErrors;
        // console.log("Name: ", name);
        // console.log("Value: ", value);
        
        switch (name) {
            case "noun":
              formErrors.noun =
                value.length < 2 ? "minimum 2 characaters required" : "";
              break;
            case "verb":
              formErrors.verb =
                value.length < 2 ? "minimum 2 characaters required" : "";
              break;
            case "adjective":
              formErrors.adjective = 
              value.length < 2 ? "minimum 2 characaters required" : "";
              break;
            case "adverb":
            formErrors.adverb = 
            value.length < 2 ? "minimum 2 characaters required" : "";
              break;
            default:
              break;
            }
      // allows dev to view entire object and error messages
            this.setState({formErrors, [name]: value }, () => console.log(this.state));
        
    };


    render() {
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Fill in the blanks</h1>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="noun">
                            <label htmlFor="noun">Noun</label>
                            <input type="text"
                                className="#"
                                placeholder="noun"
                                name="noun"
                                noValidate
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="verb">
                            <label htmlFor="verb">Verb</label>
                            <input type="text"
                                className="#"
                                placeholder="verb"
                                name="verb"
                                noValidate
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="adjective">
                            <label htmlFor="adjective">Adjective</label>
                            <input type="text"
                                className="#"
                                placeholder="adjective"
                                name="adjective"
                                noValidate
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="adverb">
                            <label htmlFor="adverb">Adjective</label>
                            <input type="text"
                                className="#"
                                placeholder="adverb"
                                name="adverb"
                                noValidate
                                onChange={this.handleChange}
                            />
                            <div className="addOptions">
                            <button type="submit"> Submit</button>
                            
                            </div>
                        </div>
                    </form>
                </div>

            </div>

        );
    }
}

export default Aniform