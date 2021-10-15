import React, { useEffect, useState } from "react";
import SingleComment from "./SingleComment";
import axios from "axios";
import { InputGroup, FormControl, Button } from "react-bootstrap";

export default function CommentArea({ postId }) {
  const API_URL = "https://linkedin-builweed3.herokuapp.com";
  const [comments, setComments] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [commentText, setCommentText] = useState("");

  const getComments = async () => {
    try {
      const req = await axios.get(API_URL + "/comments/" + postId);
      setComments(req.data.reverse());
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const postComments = async (e) => {
    e.preventDefault();
    try {
      const req = await axios.post(API_URL + "/comments/" + postId, {
        comment: commentText,
        profileId: 2
      });
      setLoading(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  useEffect(() => {
    if (isLoading) {
      getComments();
    }
  }, [isLoading, getComments]);
  return (
    <div className="w-100">
      <InputGroup className="mb-3 w-75 ml-5">
        <FormControl
          onChange={(e) => {
            setCommentText(e.target.value);
          }}
          value={commentText}
          placeholder="New comment"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button
          variant="outline-secondary"
          onClick={(e) => {
            postComments(e);
          }}
          className="ml-1"
          id="button-addon2"
        >
          Send
        </Button>
      </InputGroup>
      {comments.map((c) => (
        <SingleComment comment={c} />
      ))}
    </div>
  );
}
