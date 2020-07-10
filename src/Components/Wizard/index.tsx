import React, { Component } from 'react';
import {
  Row,
  Container,
  Col,
} from 'react-bootstrap';
import { FiBookOpen, FiUserCheck, FiClipboard, FiAward } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import IWizard from './Interface/';

export class WizardComponent extends Component<any, IWizard> {

  constructor(props) {
    super(props);

    this.state = {
      step: props.step,
    };
  }

  public render() {
    return (
      <Container className="wizard">
        <div className="steps">
          <Row>
            <Col>
              <NavLink to="/booking">
                <div className={ this.state.step === 1 ? 'icon active' : 'icon'}>
                  <p> <strong>1 - Experience</strong> <br />
                    Please choose your experience that you want.
                  </p>
                  <span>
                    <FiBookOpen />
                  </span>
                </div>
              </NavLink>
            </Col>
          </Row>
          <Row>
            <Col>
              <NavLink to="/booking/date">
                <div className={ this.state.step === 2 ? 'icon active' : 'icon'}>
                  <p> <strong>2- Date and Time</strong> <br />
                    Please choose the date and time
                  </p>
                  <span>
                    <FiClipboard />
                  </span>
                </div>
              </NavLink>
            </Col>
          </Row>
          <Row>
            <Col>
              <NavLink to="/booking/guests">
                <div className={ this.state.step === 3 ? 'icon active' : 'icon'}>
                  <p> <strong>3- Host and Guests </strong> <br />
                    Please inform personal data to appreciate the experience
                  </p>
                  <span>
                    <FiUserCheck />
                  </span>
                </div>
              </NavLink>
            </Col>
          </Row>
          <Row>
            <Col>
              <NavLink to="/booking/complete">
                <div className={ this.state.step === 4 ? 'icon active' : 'icon'}>
                  <p> <strong>4- Complete</strong> <br />
                    Your booking is complete - see your reservation
                  </p>
                  <span>
                    <FiAward />
                  </span>
                </div>
              </NavLink>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
};

export default WizardComponent;