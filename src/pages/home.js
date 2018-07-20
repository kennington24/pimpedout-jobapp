import React, { Component } from 'react';
import Accountlogin from '../components/accountlogin/accountlogin';
import Coverflow from '../components/coverflow/coverflow';
import video from './video.mp4';

class Home extends Component {
  render() {
    return (
      <div className="Homeapp">
        <video className="videoTag" autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <Accountlogin />
        <div className="Coverflow">
          <Coverflow />
        </div>

        <p className="description">
          We have a huge selection of products to help you on your job hunt!
        </p>
        <p>Please view our product selection above to learn more.</p>

        <div>
          <button className="button">Buy Now</button>
        </div>
      </div>
    );
  }
}

export default Home;
