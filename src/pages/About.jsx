import React, { Component } from 'react';

import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Container from '../components/Container.jsx';


class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        < Container madlib="Dogs are man’s [adjective] friend.  Every [noun] should have one, 
        unless they already have a [noun], then they should have 
        2. The best dogs to have are really [adjective].  They are the best [noun]. T
        hey love to go to the [noun] and play at the [noun]. 
        And if you give them [adjective] [plural noun] they [adverb] love you, 
        the rest of your [noun]!" />
        
       <Footer />
      </div>
    );
  }
}

export default About