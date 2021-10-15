import React from "react";
import axios from "axios";
import "./SinglePost.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ShareIcon from "@material-ui/icons/Share";
import CommentIcon from "@material-ui/icons/Comment";
import SendIcon from "@material-ui/icons/Send";
import { useState, useEffect } from "react";

import CommentArea from "./CommentArea";

function SinglePost({ post }) {
  const [isTextExpanded, setTextExpanded] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [isCommentsExpanded, setCommentsExpanded] = useState(false);
  const [isPostLiked, setLikeStatus] = useState(false);
  const [numberOfLikes, setNumberOfLikes] = useState(0);

  const userId = 1;

  const toggleLike = async () => {
    try {
      if (!isPostLiked) {
        const req = await axios.post(
          `https://linkedin-builweed3.herokuapp.com/likes/${post.id}/${userId}`
        );
        setLoading(true);
        console.log(req);
      } else {
        const req = await axios.delete(
          `https://linkedin-builweed3.herokuapp.com/likes/${post.id}/${userId}`
        );
        setLoading(true);
        console.log(req);
      }
    } catch (error) {}
  };

  const getLikeStatus = async () => {
    try {
      const req = await axios.get(
        `https://linkedin-builweed3.herokuapp.com/likes/${post.id}/${userId}`
      );
      setLikeStatus(req.data.currentUserLikeStatus);
      setLoading(false);
    } catch (error) {}
  };

  const getNumberOfLikes = async () => {
    try {
      const req = await axios.get(
        `https://linkedin-builweed3.herokuapp.com/likes/${post.id}/all`
      );
      setNumberOfLikes(req.data.length);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    getNumberOfLikes();
    getLikeStatus();
  }, []);

  useEffect(() => {
    if (isLoading) {
      getLikeStatus();
      getNumberOfLikes();
    }
  }, [isLoading, getLikeStatus]);

  return (
    <div key={post.id} className="postCard d-flex flex-column">
      <div className="postCardTop d-flex justify-content-between">
        <div className="d-flex justify-content-center align-items-center">
          <img
            src={post.profile.image}
            alt=""
            srcset=""
            height="48px"
            width="48px"
          />
          <div className="ml-1">
            <div className="profileName">{post.username}</div>
            <div className="profileMuted text-muted">
              Created at: {new Date(post.createdAt).toLocaleString()}
            </div>
            <div className="profileMuted text-muted">
              Updated at: {new Date(post.updatedAt).toLocaleString()}
            </div>
          </div>
        </div>
      </div>
      <div className="postCardMiddle d-flex flex-column">
        <div className="postCardMiddle">{post.text}</div>
        <a className="align-self-end postCardMiddle">...see more</a>
        {post.image && (
          <img src={post.image} alt="" srcset="" width="540px" height="285px" />
        )}
        {post.image === undefined && (
          <img
            src="https://picsum.photos/540/285"
            alt=""
            srcset=""
            width="540px"
            height="285px"
          />
        )}
      </div>
      <div className="postCardBottom d-flex flex-wrap justify-content-between w-100">
        <hr className="postCardLine" />
        <div className="d-flex align-items-center justify-content-center bottomIcons">
          <div
            className="d-flex"
            onClick={() => {
              toggleLike();
            }}
          >
            <ThumbUpIcon className="postCardIcons" />
            {numberOfLikes ? <div>{numberOfLikes}</div> : <div></div>}
            {isPostLiked ? (
              <div className="postCardIcon">Dislike</div>
            ) : (
              <div className="postCardIcon">Like</div>
            )}
          </div>
        </div>
        <div
          onClick={() => {
            setCommentsExpanded(true);
          }}
          className='d-flex align-items-center justify-content-center bottomIcons "'
        >
          <CommentIcon className="postCardIcons" />
          <div className="postCardIcon">Comment</div>
        </div>
        <div className='d-flex align-items-center justify-content-center bottomIcons "'>
          <ShareIcon className="postCardIcons" />
          <div className="postCardIcon">Share</div>
        </div>
        <div className='d-flex align-items-center justify-content-center bottomIcons "'>
          <SendIcon className="postCardIcons" />
          <div className="postCardIcon">Send</div>
        </div>
      </div>
      {isCommentsExpanded ? <CommentArea postId={post.id} /> : <div></div>}
    </div>
  );
}

export default SinglePost;
