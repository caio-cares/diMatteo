import React, { Component } from "react";
import WizardComponent from '../../Components/Wizard/';
import HeaderComponent from '../../Components/Header/';
import {
  Row,
  Container,
  Col,
  Card,
  CardDeck
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './Types/Props';
import { Props } from './Types/Interface';

class BookingView extends Component<Props> {
  public componentDidMount() {
    const { getExperiences } = this.props;

    getExperiences();
  }

  public handleChooseExperience(experience) {
    this.props.setExperience(experience);
    this.props.history.push('/booking/date');
  }

  public render() {

    const { experiences } = this.props;

    return (
      <Container fluid>
        <Row>
          <Col xs="3" className="wizardArea d-none d-md-block d-lg-block">
            <WizardComponent step={1}></WizardComponent>
          </Col>
          <Col xs="12" lg="9" md="9">
            <HeaderComponent />
            <Row>
              <Col xs="12" md={{ span: 8, offset: 2 }}>
                <h2>Please choose an experience</h2>
              </Col>
            </Row>
            <Row>
              <Col xs="12" md={{ span: 8, offset: 2 }}>
                <CardDeck>

                  {experiences.map(
                    (experience: any, index: number) => (
                      <Card key={index}> 
                        <Card.Header>{ experience.menu }</Card.Header>
                        <Card.Img variant="top" src={experience.picture} />
                        <Card.Body>
                          <Card.Text>
                            { experience.description }
                            <button className="btn info choose" onClick={() => this.handleChooseExperience(experience)}>Choose now</button>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    )
                  )}
                </CardDeck>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingView);