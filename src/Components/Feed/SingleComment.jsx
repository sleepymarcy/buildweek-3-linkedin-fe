import React, { useState, useEffect } from "react";
import axios from "axios";

import "./SinglePost.css";

export default function SingleComment({ comment }) {
  const API_URL = "https://linkedin-builweed3.herokuapp.com";
  const [profile, setProfile] = useState({});
  const [isLoading, setLoading] = useState(true);
  const myProfileId = 1;

  const getProfile = async () => {
    try {
      const req = await axios.get(API_URL + "/profile/" + comment.profileId);
      setProfile(req.data);
      console.log(profile);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if (isLoading) {
      getProfile();
    }
  }, [isLoading, getProfile]);
  return (
    <div className="w-75">
      <div className="d-flex justify-content-between ml-5 mb-3">
        <div className="d-flex">
          <img
            src={profile.image}
            className="rounded-circle"
            width="32px"
            alt=""
          />
          <div>
            {profile.name} {profile.surname}
          </div>
        </div>
        <div className="comment">{comment.comment}</div>
      </div>
    </div>
  );
}
