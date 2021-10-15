import React from "react";
import {
  Modal,
  Button,
  Row,
  Col,
  Form,
  Carousel,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { ImPencil } from "react-icons/im";
import { AiFillEye } from "react-icons/ai";
import { useRef } from "react";
import { RiArrowLeftLine } from "react-icons/ri";
import { Hint } from "react-autocomplete-hint";

import "../../../../css/editModal.css";
import EditSecondModal from "./EditSecondModal";

export default function EditInfo({
  name,
  surname,
  title,
  area,
  personId,
  imgSrc,
  bio,
  username,
  email,
  renewData,
}) {
  const [FormerName, setFormerName] = useState();
  const localHost = process.env.REACT_APP_LOCALHOST;
  // CONSTANT
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Loaders
  const [Loading, setLoading] = useState(false);
  const [Success, setSuccess] = useState(false);

  //   REFRESH
  useEffect(() => {
    fetchCountries();
    // findCountry();
  }, []);
  //   COUNTRIES
  const [hintData, setHintData] = useState([]);
  //   EDITING INFO
  const [EditingInfo, setEditingInfo] = useState({
    name: name,
    surname: surname,
    email: email,
    bio: bio,
    title: title,
    area: area,
    username: username,
    image: imgSrc,
  });
  // Data set
  const dataSet = (valname, valdata) => {
    setEditingInfo({ ...EditingInfo, [valname]: valdata });
  };
  // DATA SEND
  const sendData = (e) => {
    e.preventDefault();
    // setLocData();
    postData();
  };
  //   FETCHING
  const fetchCountries = async () => {
    try {
      let response = await fetch(
        `http://api.countrylayer.com/v2/all?access_key=${process.env.REACT_APP_COUNTRY_API_KEY}`
      );
      if (response.ok) {
        let countries = await response.json();
        console.log(countries);
        const countriesNames = [];
        countries.map((c) => countriesNames.push(c.name));
        setHintData(countriesNames);
      } else {
        console.log("Error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const postData = async () => {
    setLoading(true);
    try {
      let response = await fetch(`${localHost}/profile/2`, {
        method: "PUT",
        body: JSON.stringify(EditingInfo),
        headers: {
          "Content-type": "application/json",
        },
      });
      let data = await response.json();
      if (response.ok) {
        setLoading(false);
        setSuccess(true);

        setTimeout(() => {
          setSuccess(false);
        }, 1500);
        setTimeout(() => {
          handleClose();
        }, 2000);
        setTimeout(() => {
          renewData();
        }, 2000);
      } else {
        console.log("Error");
      }
    } catch (err) {
      console.log(err);
    }
  };
  // SECOND MODAL
  const ref = useRef(null);

  const onPrevClick = () => {
    ref.current.prev();
  };
  const onNextClick = () => {
    ref.current.next();
  };

  // console.log(Suggestion);
  // JSX !
  return (
    <>
      {" "}
      <div className=" d-flex justify-content-center align-items-center edit-info-pencil">
        <ImPencil
          size="1.2rem"
          className="text-muted"
          onClick={handleShow}
          style={{ cursor: "pointer" }}
        />
      </div>
      <Modal className="modalEditInfo" show={show} onHide={handleClose}>
        {/* CAROUSEL */}
        <Carousel indicators={false} controls={false} interval={null} ref={ref}>
          <Carousel.Item>
            <Modal.Header className="font-weight-light" closeButton>
              <Modal.Title className="font-weight-light">
                Edit intro
              </Modal.Title>
            </Modal.Header>
            {/* FORM */}
            <Form onSubmit={(e) => sendData(e)}>
              <Modal.Body className="p-4">
                <Row>
                  <Col xs="6">
                    <Form.Group controlId="formName">
                      <Form.Label>First Name *</Form.Label>
                      <Form.Control
                        type="text"
                        value={EditingInfo.name}
                        onChange={(e) => dataSet("name", e.target.value)}
                        placeholder="Enter name"
                      />
                      {!FormerName && (
                        <Form.Text
                          className="addFormerBtn font-weight-bold pl-3"
                          onClick={() => setFormerName(true)}
                        >
                          Add former name
                        </Form.Text>
                      )}
                    </Form.Group>
                  </Col>
                  <Col xs="6">
                    <Form.Group controlId="formSurname">
                      <Form.Label>Last Name *</Form.Label>
                      <Form.Control
                        type="text"
                        value={EditingInfo.surname}
                        onChange={(e) => dataSet("surname", e.target.value)}
                        placeholder="Enter name"
                      />
                    </Form.Group>
                  </Col>

                  <Col xs="12">
                    <Form.Group controlId="formGridState">
                      <Form.Label>Titles</Form.Label>
                      <Form.Control
                        as="select"
                        // onChange={(e) =>
                        //   dataSet(
                        //     "name",
                        //     e.target.value + " " + EditingInfo.name
                        //   )
                        // }
                        defaultValue="Titles..."
                      >
                        <option>Titles...</option>
                        <option value="Miss">Miss</option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs.">Mrs</option>
                        <option value="Ms.">Ms</option>
                        <option value="Dr.">Dr.</option>
                        <option value="Md.">Md.</option>
                      </Form.Control>
                      <Form.Text className="text-muted">
                        Let others know how to refer to you.{" "}
                        <a className="contact-info font-weight-bold">
                          Learn more
                        </a>
                      </Form.Text>
                      <Form.Text className="addFormerBtn font-weight-bold">
                        <AiFillEye />{" "}
                        <p
                          style={{
                            fontSize: "0.9rem",
                            display: "inline-block",
                          }}
                        >
                          {" "}
                          Visible to: All LinkedIn members
                        </p>
                      </Form.Text>
                    </Form.Group>
                  </Col>
                  <Col xs="12">
                    <Form.Group controlId="formHeadLine">
                      <Form.Label>Curent position</Form.Label>
                      <Form.Control
                        type="text"
                        value={EditingInfo.title}
                        onChange={(e) => dataSet("surname", e.target.value)}
                        placeholder="... curent position"
                      />
                    </Form.Group>
                  </Col>

                  <Col xs="12">
                    <label for="formCountry">Country/Region</label>
                    <Hint options={hintData} allowTabFill>
                      <input
                        className="form-control"
                        controlId="formCountry"
                        value={EditingInfo.area}
                        // onChange={(e) => displayMatches(e.target.value)}
                        onChange={(e) =>
                          setEditingInfo({
                            ...EditingInfo,
                            area: e.target.value,
                          })
                        }
                      />
                    </Hint>
                  </Col>

                  <Col xs="12">
                    <Form.Group controlId="formcontactInfo">
                      <Form.Label>Contact info</Form.Label>
                      <div className="contact-info-change d-flex justify-content-between align-items-end">
                        <p className="mb-0">Edit Contact Info</p>
                        <div
                          className="edit-pencil-contact"
                          onClick={() => onNextClick()}
                        >
                          <ImPencil />
                        </div>
                      </div>
                    </Form.Group>
                  </Col>
                </Row>
              </Modal.Body>
              <Modal.Footer>
                {Success && <Alert variant="success">Success</Alert>}
                {Loading && <Spinner animation="grow" />}
                <Button variant="primary" type="submit">
                  Save
                </Button>
              </Modal.Footer>
            </Form>
          </Carousel.Item>
          {/* !!! */}
          {/* SECOND MODILE EDITING */}
          <Carousel.Item>
            <EditSecondModal onPrevClick={() => onPrevClick()} email={email} />
          </Carousel.Item>
        </Carousel>
      </Modal>
    </>
  );
}
