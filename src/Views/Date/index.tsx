import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiCalendar, FiClock } from 'react-icons/fi';
import {
  Row,
  Container,
  Col,
  Card,
  Alert
} from 'react-bootstrap';
import moment from 'moment';
import { connect } from 'react-redux';
import WizardComponent from '../../Components/Wizard';
import HeaderComponent from '../../Components/Header';
import { Props } from './Types/Interface';
import { mapStateToProps, mapDispatchToProps } from './Types/Props';

class DateView extends Component<Props, any> {

  constructor(props) {
    super(props);

    this.state = {
      minDate: new Date(),
      startDate: '',
      hour: '',
      message: ''
    }
  }

  componentDidMount() {
    if (!this.props.experience.id) {
      this.props.history.push('/booking');
    }
  }

  public handleChangeDate = date => {
    this.setState({
      startDate: date
    });
  }

  public handleChangeTime = hour => {
    this.setState({
      hour
    });
  }

  public handleContinue() {
    this.setState({
      message: ''
    });

    if(this.state.hour && this.state.startDate) {
      const date = moment(this.state.startDate).format('DD/MM/YYYY');
      const hour = moment(this.state.hour).format('HH:mm');

      this.props.setDateTime({date, hour});
      this.props.history.push('/booking/guests');
    }

    this.setState({
      message: 'Please choose a date or/and time'
    })
  }

  public render() {
    return (
      <Container fluid>
        <Row>
          <Col xs="3" className="wizardArea d-none d-md-block d-lg-block">
            <WizardComponent step={2}></WizardComponent>
          </Col>
          <Col xs="12" lg="9" md="9">
            <HeaderComponent />
            <Row>
              <Col xs="12" md={{ span: 8, offset: 2 }}>
              <Card>
                <Card.Body>
                  <Card.Title>Please choose a date and time</Card.Title>
                  <Row>
                    <Col xs="12" md="6">
                      <Row>
                        <Col xs="1">
                          <FiCalendar />
                        </Col>
                        <Col xs="6">
                          <DatePicker
                            selected={this.state.startDate}
                            minDate={this.state.minDate}
                            onChange={this.handleChangeDate}
                            placeholderText="Click to select a date"
                            dateFormat="dd/MM/yyyy"
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col xs="12" md="6">
                      <Row>
                        <Col xs={1}>
                          <FiClock />
                        </Col>
                        <Col xs={6}>
                          <DatePicker
                            selected={this.state.hour}
                            placeholderText="Click to select a time"
                            onChange={this.handleChangeTime}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            timeCaption="Time"
                            dateFormat="h:mm aa"
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Alert variant='danger' show={ this.state.message ? true : false}>
                        { this.state.message }
                      </Alert>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer>
                  <button className="btn info" onClick={() => this.handleContinue()}> Continue </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(DateView);