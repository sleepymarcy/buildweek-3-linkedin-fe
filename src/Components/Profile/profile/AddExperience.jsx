import React from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { AiFillEye } from "react-icons/ai";
import "../../../css/editModal.css";
import { Hint } from "react-autocomplete-hint";

import { DropdownDate, DropdownComponent } from "react-dropdown-date";

export default function AddExperience({ userId }) {
  // CONSTANT
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Date

  const formatDate = (date) => {
    // formats a JS date to 'yyyy-mm-dd'
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  const [startDate, setStartDate] = useState(null);
  const [selectedStartDate, setSelectedStartDate] = useState("2021-09-08");
  const [endDate, setEndDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState("2021-09-09");
  // console.log("THIS IS STATE SELECTED DATE", selectedDate)
  //   REFRESH
  useEffect(() => {
    fetchCountries();
  }, []);

  //   EDITING INFO
  const [EditingInfo, setEditingInfo] = useState({
    role: "",
    company: "",
    startDate: selectedStartDate,
    endDate: selectedEndDate,
    description: "",
    area: "",
    profileId: userId,
  });

  // Data set
  const dataSet = (valname, valdata) => {
    setEditingInfo({ ...EditingInfo, [valname]: valdata });
  };
  // Image upload
  // const [ImageUpld, setImageUpld] = useState({ file: null });
  // const uploadF = (e) => {
  //   console.log(e.target.files[0]);
  //   setImageUpld({ file: e.target.files[0] })
  // }
  // DATA SEND
  const sendData = (e) => {
    e.preventDefault();
    postData();
    handleClose();
  };

  const fetchCountries = async () => {
    try {
      let response = await fetch(
        `http://api.countrylayer.com/v2/all?access_key=${process.env.REACT_APP_COUNTRY_API_KEY}`
      );
      if (response.ok) {
        let countries = await response.json();
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

  const [hintData, setHintData] = useState([]);

  //   POSTING DATA
  //   URL
  const localHost = process.env.REACT_APP_LOCALHOST;
  const url = `${localHost}/experience`;

  const postData = async (e) => {
    // e.preventDefault();
    try {
      let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(EditingInfo),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (response.ok) {
        let data = await response.json();
        console.log(data.id);
        imageUpload(data.id);
      } else {
        console.log("Error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [ImageUpld, setImageUpld] = useState({ file: null });
  const [Success, setSuccess] = useState(false);
  const uploadF = (e) => {
    console.log(e.target.files[0]);
    setImageUpld({ file: e.target.files[0] });
  };

  const imageUpload = async (id) => {
    const url = `${localHost}/experience/${id}/picture`;

    let formData = new FormData();
    let file = ImageUpld.file;
    formData.append("image", file);
    console.log("formatDAta: ", formData);
    // ==
    try {
      let response = await fetch(url, {
        method: "POST",
        body: formData,
        // mode: "no-cors",
      });
      let data = await response.json();
      if (response.ok) {
        console.log(response);
        console.log(data);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 1500);
      } else {
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // JSX !
  return (
    <>
      <div className=" d-flex justify-content-center align-items-center edit-info-pencil">
        <div className="d-flex">
          <i
            class="bi bi-plus-lg lighter-color ml-auto"
            style={{ fontSize: "1.3rem" }}
            onClick={handleShow}
          ></i>
        </div>
      </div>
      <Modal className="modalEditInfo" show={show} onHide={handleClose}>
        <Modal.Header className="font-weight-light" closeButton>
          <Modal.Title className="font-weight-light">
            Add Experience
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={(e) => sendData(e)}>
          <Modal.Body className="p-4">
            <Row>
              <Col xs="12">
                <Form.Group controlId="formHeadLine">
                  <Form.Label>Title *</Form.Label>
                  <Form.Control
                    type="text"
                    value={EditingInfo.role}
                    onChange={(e) => dataSet("role", e.target.value)}
                    placeholder="Ex: Retail sales manager"
                  />
                </Form.Group>
              </Col>

              <Col xs="12">
                <Form.Group controlId="formHeadLine">
                  <Form.Label>Company *</Form.Label>
                  <Form.Control
                    type="text"
                    value={EditingInfo.company}
                    onChange={(e) => dataSet("company", e.target.value)}
                    placeholder="Ex: Microsoft"
                  />
                </Form.Group>
              </Col>
              <Col xs="12">
                <label for="formCountry">Location country</label>
                <Hint options={hintData} allowTabFill>
                  <input
                    className="form-control"
                    controlId="formCountry"
                    value={EditingInfo.area}
                    placeholder="Ex: London, United Kingdom"
                    onChange={(e) => dataSet("area", e.target.value)}
                  />
                </Hint>
              </Col>
              <Col xs="6">
                <Form.Group controlId="formHeadLine">
                  <Form.Label>Start date * </Form.Label>
                </Form.Group>
                <DropdownDate
                  classes="d-flex"
                  startDate={
                    // optional, if not provided 1900-01-01 is startDate
                    "2012-01-01" // 'yyyy-mm-dd' format only
                  }
                  endDate={
                    // optional, if not provided current date is endDate
                    "2021-09-08" // 'yyyy-mm-dd' format only
                  }
                  selectedDate={
                    // optional
                    selectedStartDate // 'yyyy-mm-dd' format only
                  }
                  onDateChange={(startDate) => {
                    // optional
                    console.log(selectedStartDate);
                    setStartDate({ startDate });
                    setSelectedStartDate(formatDate(startDate));
                    dataSet("startDate", selectedStartDate);
                    // this.setState({ date: date, selectedDate: formatDate(date) });
                  }}
                />
              </Col>
              <Col xs="6">
                <Form.Group controlId="formHeadLine">
                  <Form.Label>End date * </Form.Label>
                </Form.Group>
                <DropdownDate
                  classes="d-flex"
                  startDate={
                    // optional, if not provided 1900-01-01 is startDate
                    "2012-01-01" // 'yyyy-mm-dd' format only
                  }
                  endDate={
                    // optional, if not provided current date is endDate
                    "2021-09-08" // 'yyyy-mm-dd' format only
                  }
                  selectedDate={
                    // optional
                    selectedEndDate // 'yyyy-mm-dd' format only
                  }
                  onDateChange={(endDate) => {
                    // optional
                    // console.log(date);
                    setEndDate({ endDate });
                    setSelectedEndDate(formatDate(endDate));
                    dataSet("endDate", selectedEndDate);
                    // this.setState({ date: date, selectedDate: formatDate(date) });
                  }}
                />
              </Col>
              <Col xs="12" className="mt-3">
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    value={EditingInfo.description}
                    onChange={(e) => dataSet("description", e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col xs="12">
                <Form.Group controlId="formSurname">
                  <Form.Label>Add Image</Form.Label>
                  <Form.File id="fileUpload" onChange={uploadF} />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
