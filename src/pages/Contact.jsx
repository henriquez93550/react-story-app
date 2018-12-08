import React, { Component } from 'react';

import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

import Container from '../components/Container.jsx';

class Contact extends Component {
    render() {
      return (
        <div>
          <Navbar />
         
      
          < Container madlib="Driving a car can be fun if you follow this [adjective] advice:
When approaching a [noun] on the right, always blow your [noun]
Before making a [adjective]turn, always stick your [noun]out of the window.
Every 2000 miles, have your [noun]inspected and your [noun]checked.
When approaching a school, watch out for [adjective] [plural noun]
Above all, drive [adverb] The [noun] you save may be your own!
" />
        
          <Footer />
        </div>
      );
    }
  }
  
  export default Contact