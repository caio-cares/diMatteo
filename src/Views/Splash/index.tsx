import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import BGimage from '../../assets/images/background.jpg';

const SplashElement = styled.div`
  background: url(${BGimage}) no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;

  .overlay {
    background: rgba(0,0,0, 0.75);
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
  }

  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .title {
    color: white;
    font-size: 50px
  }

  a {
    transform: translateX(-50%);
    left: 50%;
    position: relative;
  }
`;

class SplashView extends Component {
  public render() {
    return (
      <SplashElement>
        <div className="overlay"></div>
        <Container>
          <Row>
            <Col xs="12" md={{ span: 4, offset: 4 }}>
              <h1 className="title text-center">Di Matteo</h1>
              <NavLink to="/booking" className="btn warning">
                Booking a table
              </NavLink>
            </Col>
          </Row>
        </Container>
      </SplashElement>
    )
  }
}

export default SplashView;