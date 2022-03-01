import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { Col, Row } from 'react-bootstrap';

export default function Routes() {
          return (
                    <Row>
                              <Col className="px-sm-4" sm="12" lg="8">
                                        <Col className="border">
                                                  <Switch>
                                                            <Route path="/" component={Home} />
                                                  </Switch>
                                        </Col>
                              </Col>

                              <MediaQuery minWidth={992}>
                                        <Col lg="4" className="vh-100 overflow-y-auto hide-scroll sticky-top">

                                        </Col>
                              </MediaQuery>
                    </Row>
          );
}