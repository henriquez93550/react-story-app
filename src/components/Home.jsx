import React, { Component } from 'react';

import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Jumbotron from './Jumbotron.jsx';


class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div class="typewriter">
        <Jumbotron title="Welcome" subtitle="This is the subtitle" />
        </div>
        
        <Footer />
        </div>
       
     
    );
  }
}

export default Home