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
                                                            <Route path="/explore" component={Explore} />
                                                            <Route path="/search" component={SearchResults} />
                                                            <Route path="/notifications" component={Notifications} />
                                                            <Route path="/post/:postId/likes" component={PostLikes} />
                                                            <Route path="/post/:postId/reposts" component={PostReposts} />
                                                            <Route path="/post/:postId" component={PostDetail} />
                                                            <Route path="/user/:username/friends" component={UserFriends} />
                                                            <Route path="/user/:username/followers" component={UserFollowers} />
                                                            <Route path="/user/:username" component={UserDetail} />
                                                            <Route path="/settings/profile" component={ProfileModal} />
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