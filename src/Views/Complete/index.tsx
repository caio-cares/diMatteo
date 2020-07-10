import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddToCalendar from 'react-add-to-calendar';
import { FiUsers, FiBookOpen, FiUserCheck, FiCalendar, FiClock, FiBookmark, FiPhone } from 'react-icons/fi';
import moment from 'moment';
import WizardComponent from '../../Components/Wizard/';
import HeaderComponent from '../../Components/Header/';
import {
  Row,
  Container,
  Col,
  Card,
} from 'react-bootstrap';
import { Props } from './Types/Interface';
import mapStateToProps from './Types/Props';
import BGimage from '../../assets/images/background.jpg';

class CompleteView extends Component<Props, any> {

  constructor(props) {
    super(props);

    this.state = {
      reservationNumber: Math.floor(Math.random() * 10000),
      picture: (props.experience.picture) ? props.experience.picture : BGimage,
      fullname: `${props.guest.firstName} ${props.guest.lastName}`,
      event: {
        title: 'Di Matteo Booking',
        startTime: moment(`${props.dateTime.date}-${props.dateTime.hour}`).format()
      }
    };
  }

  componentDidMount() {
    if( !this.props.guest.firstName || !this.props.guest.guests || !this.props.experience.id || !this.props.dateTime.date ) {
      this.props.history.push('/booking/guests');
    }
  }

  public render() {
    return (
      <Container fluid>
        <Row>
          <Col xs="3" className="wizardArea d-none d-md-block d-lg-block">
            <WizardComponent step={4}></WizardComponent>
          </Col>
          <Col xs="12" lg="9" md="9">
            <HeaderComponent />
            
            <Row>
              <Col xs="12" md={{ span: 3, offset: 4 }}>
                <Card>
                  <Card.Img variant="top" src={this.state.picture} />
                  <Card.Body>
                    <Card.Title>Confirm your booking</Card.Title>
                    <Row>
                      <Col xs={1}>
                        <FiBookOpen />
                      </Col>
                      <Col>
                        { this.props.experience.menu}
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col xs={1}>
                        <FiBookmark />
                      </Col>
                      <Col>
                        #{ this.state.reservationNumber}
                      </Col>
                      <Col xs={1}>
                        <FiUsers />
                      </Col>
                      <Col>
                        { this.props.guest.guests }
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col xs={1}>
                        <FiCalendar />
                      </Col>
                      <Col>
                        { this.props.dateTime.date }
                      </Col>
                      <Col xs={1}>
                        <FiClock />
                      </Col>
                      <Col>
                        { this.props.dateTime.hour }
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col xs={1}>
                        <FiUserCheck />
                      </Col>
                      <Col>
                        { this.state.fullname }
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={1}>
                        <FiPhone />
                      </Col>
                      <Col>
                        { this.props.guest.phone }
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <AddToCalendar event={this.state.event}/>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
            
          </Col>
        </Row>
      </Container>
    )
  }
}

export default connect(mapStateToProps, null)(CompleteView);