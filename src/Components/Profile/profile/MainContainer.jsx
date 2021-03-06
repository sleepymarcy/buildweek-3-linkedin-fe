import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import "../../../css/maincontainer.css";
import EditInfo from "./edit/EditInfo";
import { Link, withRouter } from "react-router-dom";
import EditBgImg from "./edit/EditBgImg";
import Skeleton from "@material-ui/lab/Skeleton";
import OpenTo from "./mainContBtns/OpenTo";
import AddSection from "./mainContBtns/AddSection";
import More from "./mainContBtns/More";
import Dashboard from "./Dashboard";
import About from "./About";
import ProfileHomePost from "../../Feed/Post/ProfileHomePost.jsx";
import Experience from "./Experience";

const MainContainer = ({ match }) => {
  const localHost = process.env.REACT_APP_LOCALHOST;
  const personalId = 2;

  const profileId = match.params.id;
  const myProfileId = 1;
  const [PersonInfo, setPersonInfo] = useState([]);
  //   !
  const [BtnsUpdate, setBtnsUpdate] = useState({
    openTo: false,
    addSection: false,
    more: false,
  });
  //   UPDATE INFO
  useEffect(() => {
    fetchPerson();
  }, []);
  useEffect(() => {
    fetchPerson();
  }, [match.params]);
  //   !
  //   FETCHING
  const fetchPerson = async () => {
    try {
      let response = await fetch(
        match.params.id
          ? `${localHost}/profile/${match.oarams.id}`
          : `${localHost}/profile/${personalId}`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);

        setPersonInfo({ data });
        console.log(PersonInfo.data.bio);
      } else {
        console.log("Error");
      }
    } catch (erorr) {
      console.log(erorr);
    }
  };
  //   !
  const sendConnect = async (myId, personId) => {
    console.log(myId, personId);
    try {
      const url = `${process.env.REACT_APP_FETCHLINK}/profile/${myId}/addFriend`;
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ followId: personId }), // CHANGE TO REQ VARIABLE
        headers: {
          "Content-type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //   JSX

  return (
    <>
      <div className="position-relative">
        <div className="w-100 person-info">
          <Row>
            {/* BG IMAGE */}
            <Col xs="12" className="bg-image">
              <div
                style={{
                  overflow: "hidden",
                  borderTopLeftRadius: "9px",
                  borderTopRightRadius: "9px",
                }}
              >
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4E16AQEsq53uWSPplg/profile-displaybackgroundimage-shrink_350_1400/0/1629185220320?e=1636588800&v=beta&t=brJaUskUvjk3_S4toz1F95-TPuzMELixFB8b4R9hsyo"
                  alt=""
                />
              </div>
              {!match.params.id && PersonInfo && PersonInfo.data && (
                <EditBgImg
                  imgSrc={PersonInfo.data.image}
                  profileId={PersonInfo.data.id}
                  renewData={() => fetchPerson()}
                  valueAvatar={true}
                />
              )}
              {/* AVATAR */}
              {!PersonInfo.data ? (
                <Skeleton
                  animation="wave"
                  className="avatar position-absolute"
                  variant="circle"
                  height={165}
                  style={{ aspectRatio: "1/1" }}
                />
              ) : (
                <EditBgImg
                  imgSrc={PersonInfo.data.image}
                  renewData={() => fetchPerson()}
                  valueAvatar={false}
                  clickOff={match.params.id ? true : false}
                />
              )}
            </Col>
            <Col xs="12 d-flex flex-wrap">
              {/* LEFT SIDE */}
              <Col
                xs="12"
                md="8"
                className="d-flex flex-column align-items-start name-box"
              >
                {" "}
                {PersonInfo.data ? (
                  <>
                    <h2>
                      {PersonInfo.data.name} {PersonInfo.data.surname}{" "}
                    </h2>
                    <p className="text-left m-0">{PersonInfo.data.title}</p>
                    <div className="d-flex  align-items-center">
                      <small className="text-muted mr-1">
                        {PersonInfo.data.area}
                      </small>{" "}
                      ??{" "}
                      <small className="ml-1 contact-info font-weight-bold">
                        <a href="">Contact info</a>
                      </small>{" "}
                    </div>
                    <small className="ml-1 contact-info font-weight-bold">
                      <Link to="/connections">Connections</Link>
                    </small>{" "}
                  </>
                ) : (
                  <>
                    <Skeleton
                      className="rounded"
                      variant="rect"
                      width={200}
                      height={30}
                      style={{ borderRadius: "20px !important" }}
                    />
                    <br />
                    <Skeleton
                      className="rounded"
                      variant="rect"
                      width={130}
                      height={18}
                    />
                    <Skeleton
                      className="mt-2 rounded"
                      variant="rect"
                      width={120}
                      height={10}
                    />
                  </>
                )}
                <div className="mt-3 d-flex flex-wrap">
                  {/* opento */}
                  <div className="position-relative">
                    {!match.params.id ? (
                      <Button
                        className="font-weight-bold position-relative"
                        style={{ backgroundColor: "#0a66c2" }}
                        onClick={() =>
                          setBtnsUpdate({
                            more: false,
                            addSection: false,
                            openTo: !BtnsUpdate.openTo,
                          })
                        }
                      >
                        Open to{" "}
                      </Button>
                    ) : (
                      <Button
                        onClick={(e) => sendConnect(myProfileId, profileId)}
                        className="font-weight-bold position-relative"
                        style={{ backgroundColor: "#0a66c2" }}
                      >
                        Connect
                      </Button>
                    )}
                    {BtnsUpdate.openTo && (
                      <OpenTo personAcc={match.params.id} />
                    )}
                  </div>
                  {/* AddSec */}
                  <div className="position-relative">
                    <Button
                      className="font-weight-bold position-relative"
                      variant="outline-secondary"
                      onClick={() =>
                        setBtnsUpdate({
                          more: false,
                          openTo: false,
                          addSection: !BtnsUpdate.addSection,
                        })
                      }
                    >
                      {match.params.id ? "Message" : "Add section"}
                    </Button>
                    {BtnsUpdate.addSection && (
                      <AddSection
                        name={PersonInfo.data.name}
                        personAcc={match.params.id}
                      />
                    )}
                  </div>
                  {/* more */}
                  <div className="position-relative">
                    <Button
                      className="font-weight-bold position-relative"
                      variant="outline-secondary"
                      onClick={() =>
                        setBtnsUpdate({
                          more: !BtnsUpdate.more,
                          openTo: false,
                          addSection: false,
                        })
                      }
                    >
                      More
                    </Button>
                    {BtnsUpdate.more && <More personAcc={1} />}
                  </div>
                </div>
              </Col>
              {/* RIGHT SIDE */}
              <Col xs="12" md="4" className="d-flex flex-column p-4">
                {" "}
                <div className="d-flex justify-content-end my-2">
                  {!match.params.id && PersonInfo.data ? (
                    <EditInfo
                      personId={PersonInfo.data._id}
                      name={PersonInfo.data.name}
                      surname={PersonInfo.data.surname}
                      area={PersonInfo.data.area}
                      title={PersonInfo.data.title}
                      imgSrc={PersonInfo.data.image}
                      bio={PersonInfo.data.bio}
                      username={PersonInfo.data.username}
                      email={PersonInfo.data.email}
                      renewData={fetchPerson}
                    />
                  ) : (
                    !match.params.id && (
                      <Skeleton
                        className="mt-2 rounded-circle"
                        variant="rect"
                        width={25}
                        height={25}
                      />
                    )
                  )}
                </div>
                {PersonInfo &&
                PersonInfo.data &&
                PersonInfo.data.experiences ? (
                  PersonInfo.data.experiences.slice(0, 3).map((exp) => (
                    <a
                      href=""
                      className="d-flex align-items-center my-1"
                      key={exp.id}
                    >
                      <img src={exp.image} alt="" style={{ height: "2rem" }} />
                      <small className="font-weight-bold ml-2">
                        {exp.role}
                      </small>
                    </a>
                  ))
                ) : (
                  <Skeleton
                    className="mt-2 rounded"
                    variant="rect"
                    width={140}
                    height={25}
                  />
                )}
              </Col>
            </Col>
          </Row>
        </div>
      </div>
      <Dashboard />
      <About userBio={PersonInfo && PersonInfo.data && PersonInfo.data.bio} />
      <ProfileHomePost />
      <Experience />
    </>
  );
};

export default withRouter(MainContainer);
