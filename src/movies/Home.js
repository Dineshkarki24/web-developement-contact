import React, { Component } from "react";
import { Row, Container, Col, Card } from "react-bootstrap";
import Axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
class HomePage extends Component {
  state = {
    apiKey: "02689249b40636b114a2add6006bff65",
    nowPlaying: []
  };

  componentDidMount() {
    Axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.state.apiKey}&language=en-US&page=1`
    ).then(res => this.setState({ nowPlaying: res.data.results }));
  }

  render() {
    return (
      <HomeWrapper>
        <Container>
          <h1>Now Playing</h1>
          <Row>
            {this.state.nowPlaying.map(movie => {
              console.log(movie);
              return (
                <Col md="3" onClick={() => this.props.movie(movie)}>
                  <Link to={`/singleMoves/${movie.id}`}>
                    <Card>
                      <Card.Img
                        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                      />
                      <Card.Body>
                        <h6>{movie.title}</h6>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              );
            })}
          </Row>
        </Container>
      </HomeWrapper>
    );
  }
}

const HomeWrapper = styled.div`
  margin-top: 25px;
`;

export default HomePage;
