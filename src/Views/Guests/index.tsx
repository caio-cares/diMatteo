import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FiUsers, FiPhone, FiMail, FiUserCheck } from 'react-icons/fi';
import WizardComponent from '../../Components/Wizard/';
import HeaderComponent from '../../Components/Header/';
import {
  Row,
  Container,
  Col,
  Alert,
  Card,
  Form,
  InputGroup
} from 'react-bootstrap';
import { Props } from './Types/Interface';
import { mapStateToProps, mapDispatchToProps } from './Types/Props';

class GuestsView extends Component<Props, any> {

  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      confirmEmail: null,
      phone: null,
      guests: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if( !this.props.experience.id || !this.props.dateTime.date ) {
      this.props.history.push('/booking/date');
    }
  }

  public handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    this.setState({[name]: value});
  }

  public handleSubmit(event) {
    event.preventDefault();

    const { firstName, lastName, phone, email, guests } = this.state;

    this.setState({
      message: ''
    });

    if (firstName && lastName && phone && email && guests) {
      this.props.setGuests({firstName, lastName, phone, email, guests});

      this.props.history.push('/booking/complete');
    }

    this.setState({
      message: 'Please fill the fields'
    });
  }

  public render() {
    return (
      <Container fluid>
        <Row>
          <Col xs="3" className="wizardArea d-none d-md-block d-lg-block">
            <WizardComponent step={3}></WizardComponent>
          </Col>
          <Col xs="12" lg="9" md="9">
            <HeaderComponent />
            <Row>
              <Col xs="12" md={{ span: 8, offset: 2 }}>
              <Card>
                <Card.Body>
                  <Card.Title>Please fill with the personal data</Card.Title>
                  <Form noValidate onSubmit={this.handleSubmit}>
                    <Form.Row>
                      <Col xs="12" md="6">
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text> <FiUserCheck /> </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control placeholder="First name" required name='firstName' onChange={this.handleChange} />

                        </InputGroup>
                      </Col>
                      <Col xs="12" md="6">
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text> <FiUserCheck /> </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control placeholder="Last name" required name='lastName' onChange={this.handleChange} />
                        </InputGroup>
                      </Col>
                    </Form.Row>

                    <Form.Row>
                      <Col xs="12" md="6">
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text> <FiMail /> </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control placeholder="Email address" required name='email' onChange={this.handleChange} />
                        </InputGroup>
                      </Col>
                      <Col xs="12" md="6">
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text> <FiMail /> </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control placeholder="Confirm email address" name='confirmEmail' onChange={this.handleChange} />
                        </InputGroup>
                      </Col>
                    </Form.Row>

                    <Form.Row>
                      <Col xs="12" md="6">
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text> <FiPhone /> </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control placeholder="Phone number" required name='phone' onChange={this.handleChange} />
                        </InputGroup>
                      </Col>
                      <Col xs="12" md="6">
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text> <FiUsers /> </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control as="select" required name='guests' onChange={this.handleChange}>
                            <option>Number of guests</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                          </Form.Control>
                        </InputGroup>
                      </Col>
                    </Form.Row>

                    <Form.Row>
                      <Col>
                        <Alert variant='danger' show={ this.state.message ? true : false}>
                          { this.state.message }
                        </Alert>
                      </Col>
                    </Form.Row>

                    <Form.Row>
                      <Col>
                        <button className="btn info" type="submit"> Confirm </button>
                      </Col>
                      
                    </Form.Row>
                  </Form>
                </Card.Body>
              </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestsView);