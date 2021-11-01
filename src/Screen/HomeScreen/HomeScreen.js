import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Categories from "../../components/Categories/Categories";
import Video from "../../components/Video/Video";
import { useDispatch } from "react-redux";
import { getPopularVideos } from "../../redux/actions/Videos";

function HomeScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  return (
    <Container>
      <Categories />
      <Row>
        {[...new Array(32)].map(() => (
          //crete an array for video
          <Col lg="3" md={4}>
            <Video />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomeScreen;
