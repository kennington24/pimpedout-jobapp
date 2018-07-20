import React, { Component } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';
import Contributions from '../components/contribution/contribution';

class Contributionspage extends Component {
  render() {
    return (
      <div className="Contributionapp">
        <Sidebar />
        <Breadcrumbs />
        <Contributions />
        <div className="Boxxy"> </div>
      </div>
    );
  }
}

export default Contributionspage;
