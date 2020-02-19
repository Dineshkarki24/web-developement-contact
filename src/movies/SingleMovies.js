import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class SingleMoviesPage extends Component {
  render() {
    const { movie } = this.props;
    return (
      <Container>
        <Row>
          <Col md="6">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt=""
            />
          </Col>
          <Col md="6">{movie.title}</Col>
        </Row>
      </Container>
    );
  }
}

export default SingleMoviesPage;
