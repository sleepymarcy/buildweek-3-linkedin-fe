import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import PostsFeed from "./PostsFeed.jsx";
import FeedLeftBar from "./FeedLeftBar.jsx";
import FeedRightBar from "./FeedRightBar.jsx";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({});
  const [checkSort, markSort] = useState(false);
  const [MyProfile, setMyProfile] = useState();
  const token = process.env.REACT_APP_TOKENACCESS;
  const url = "https://striveschool-api.herokuapp.com/api/posts/";
  const profileUrl = "https://striveschool-api.herokuapp.com/api/profile/me";

  useEffect(() => {}, []);

  return (
    <>
      <br />
      <Container>
        <Row>
          <Col md="3">
            <FeedLeftBar />
          </Col>
          <Col md="6">
            <PostsFeed />
          </Col>
          <Col md="3">
            <FeedRightBar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Feed;
