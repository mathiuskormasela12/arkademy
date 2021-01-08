import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <h1>Home</h1>
      </React.Fragment>
    );
  }
}

export default Home;