import React, { Component } from 'react';

import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Container from './Container.jsx';


class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        < Container madlib="Count Olaf was a very [adjective] superhero.
He had a [noun] that was so strong it could even lift [noun].
He was even more powerful if he had on his [adjective] cape.  Which was given to him by the Grand [noun] of America. One time he even saved the entire [noun]with only his trusty [noun].
Not to mention the time he rescued the bus full of [adjective] [plural noun] by [adverb] throwing the bus to safety. For his bravery the mayor of his city gave him the [noun] to the city!

" />
        
        
        
        <Footer />
        </div>
       
     
    );
  }
}

export default Home