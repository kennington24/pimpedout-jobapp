import React, { Component } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';

class Contributionspage extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Breadcrumbs />
        <div className="Boxxy"> </div>
      </div>
    );
  }
}

export default Contributionspage;
