import React from "react";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import SinglePost from "./SinglePost";
import Post from "./Post";

export default function PostsFeed() {
  const API_URL = "https://linkedin-builweed3.herokuapp.com";
  const [posts, setPosts] = useState([]);

  const [isLoading, setLoading] = useState(true);

  const getPosts = async () => {
    try {
      const req = await axios.get(API_URL + "/posts/?limit=5");
      setPosts(req.data.reverse());
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    if (isLoading) {
      getPosts();
    }
  }, [isLoading, getPosts]);

  return (
    <div className="d-flex flex-column align-items-center w-100">
      <Post />
      {isLoading && <Spinner className="m-auto" animation="grow" />}
      {posts && posts.map((post) => <SinglePost post={post} />)}
    </div>
  );
}
