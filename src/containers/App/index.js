import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
//import logo from '../../resources/logo.svg';
import './style.css';

class AppContainer extends Component {
  render() {
    return (
      <Container fluid>
            <Header as='h2'>Senhor do tempo</Header>
      </Container>
  );
  }
}

export default AppContainer;
