import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import qs from 'querystring';

const Title = styled.h1`
  color: red;

  @media screen and (max-width: 920px) {
    color: blue;
    font-size: 10px;
  }
`;

class About extends Component {
  render() {

    const params = qs.parse(this.props.location.search.slice(1));
    console.log(params)
    
    return (
      <React.Fragment>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        {
          //<h1>About</h1>
        }
        <Title>About</Title>
        <p>{this.props.match.params.nama}</p>
        <Button variant="primary">Button</Button>
      </React.Fragment>
    );
  }
}

export default About;