import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ConnPerson({ profId }) {
  const [Loading, setLoading] = useState(true);
  const [LoadReq, setLoadReq] = useState(true);
  const [Friends, setFriends] = useState([]);
  const [Request, setRequest] = useState([]);
  //
  profId = 1;
  const fetchFriends = async (id) => {
    const url = `${process.env.REACT_APP_FETCHLINK}/profile/${profId}/friends`;
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        await setFriends(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //
  const fetchRequests = async (id) => {
    const url = `${process.env.REACT_APP_FETCHLINK}/profile/${profId}/friendRequest`;
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        await setRequest(data);
        setLoadReq(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //
  const acceptRq = async (reqId) => {
    try {
      const url = `${process.env.REACT_APP_FETCHLINK}/profile/${profId}/acceptFriendRequest`;
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ profileId: 1 }), // CHANGE TO REQ VARIABLE
        headers: {
          "Content-type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        await setRequest(data);
        setLoadReq(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const declineRq = async (id) => {
    try {
      const url = `${process.env.REACT_APP_FETCHLINK}/profile/${profId}/cancelFriendRequest`;
      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify({ profileId: 1 }),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        await setRequest(data);
        setLoadReq(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //
  useEffect(() => {
    fetchFriends();
    fetchRequests();
  }, []);
  return (
    <>
      <Row>
        <Col xs="9">
          {!LoadReq && (
            <>
              <p className="text-muted"> result</p>{" "}
              <div className="d-flex mainConnPersCont flex-column">
                {/* {Request.friendRequests.map((fr) => ( */}
                <Row key={123} className="p-4">
                  <Col
                    xs="12"
                    md="2"
                    className="d-flex justify-content-center align-items-center p-1"
                  >
                    <img
                      src="https://toppng.com/uploads/preview/instagram-default-profile-picture-11562973083brycehrmyv.png"
                      alt=""
                      className="image-person"
                    />
                  </Col>
                  <Col
                    className="border-bot d-flex flex-column p-0 py-2"
                    xs="12"
                    md="6"
                  >
                    <h5 className="m-0 font-weight-bold">Name Surname</h5>
                    <p className="m-0">Title</p>
                    <p className="m-0 text-muted">Area</p>
                    <p className="m-0">Short bio</p>
                  </Col>
                  <Col
                    xs="12"
                    md="4"
                    className=" border-bot d-flex justify-content-center align-items-center p-4"
                  >
                    <Button
                      onClick={(e) => acceptRq()}
                      variant="primary"
                      className="connBtns my-auto font-weight-bold"
                      size="sm"
                    >
                      <h6 className="font-weight-bold m-0">Accept</h6>
                    </Button>{" "}
                    <Button
                      onClick={(e) => declineRq()}
                      variant="outline-primary"
                      className="connBtns my-auto font-weight-bold"
                      size="sm"
                    >
                      <h6 className="font-weight-bold m-0">Decline</h6>
                    </Button>{" "}
                  </Col>
                </Row>
                {/* ))} */}
              </div>
            </>
          )}
          {!Loading && (
            <>
              <p className="text-muted mt-3"> {Friends.total} result</p>
              <div className="d-flex mainConnPersCont flex-column">
                {Friends.friends.map((fr) => (
                  <Row key={fr} className="p-4">
                    <Col
                      xs="12"
                      md="2"
                      className="d-flex justify-content-center align-items-center p-1"
                    >
                      <Link to={`/home/${fr.id}`}>
                        <img src={fr.image} alt="" className="image-person" />
                      </Link>
                    </Col>
                    <Col
                      className="border-bot d-flex flex-column p-0 py-2"
                      xs="12"
                      md="7"
                    >
                      <h5 className="m-0 font-weight-bold">
                        {fr.name} {fr.surname}
                      </h5>
                      <p className="m-0">{fr.title}</p>
                      <p className="m-0 text-muted">{fr.area}</p>
                      <p className="m-0">{fr.bio}</p>
                    </Col>
                    <Col
                      xs="12"
                      md="3"
                      className=" border-bot d-flex justify-content-center align-items-center p-4"
                    >
                      <Button
                        variant="outline-primary"
                        className="connBtns my-auto font-weight-bold"
                        size="sm"
                      >
                        <h6 className="font-weight-bold m-0">Message</h6>
                      </Button>{" "}
                    </Col>
                  </Row>
                ))}
              </div>
            </>
          )}
        </Col>
        <Col xs="3">
          <br />
          <div className="mainConnPersCont mt-3">
            <img
              style={{ width: "100%" }}
              src="https://xyzscripts.com/data/clone/popads-clone-script-og.png"
              alt=""
            />
          </div>
        </Col>
      </Row>
      <br />
    </>
  );
}
