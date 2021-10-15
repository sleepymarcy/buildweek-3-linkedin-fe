import { useState } from "react";
import "../../../css/about.css";
import { Modal, Button, Form } from "react-bootstrap";
import { useEffect } from "react";

const About = ({ userBio }) => {
  const [show, setShow] = useState(false);
  const [profileBio, setUserBio] = useState({
    bio: userBio,
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Loaders
  const [Loading, setLoading] = useState(false);
  const [Success, setSuccess] = useState(false);

  const sendData = (e) => {
    e.preventDefault();
    // setLocData();
    postData();
  };
  useEffect(() => {
    setUserBio(userBio);
    // findCountry();
  }, []);

  const localHost = process.env.REACT_APP_LOCALHOST;
  const postData = async () => {
    setLoading(true);
    try {
      let response = await fetch(`${localHost}/profile/2`, {
        method: "PUT",
        body: JSON.stringify(profileBio),
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
      } else {
        console.log("Error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="about-container mt-3">
      <div className="text-left ml-4 mr-4 mt-4 d-flex">
        <p>
          <h5 style={{ fontWeight: "480" }}>About</h5>
        </p>
        <i
          className="bi bi-pencil ml-auto"
          style={{ fontSize: "1.3rem" }}
          onClick={handleShow}
        ></i>
      </div>
      <div className="text-left ml-4 mr-4 mb-4">
        <p style={{ fontSize: "15px" }}>{userBio}</p>
      </div>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit about</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex">
            <div>German</div>
            <div className="ml-5">English</div>
          </div>
          <hr />
          <Form onSubmit={(e) => sendData(e)} onHide={handleClose}>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                style={{ height: "250px", border: " 1.5px solid black" }}
                as="textarea"
                rows={3}
                placeholder="This is some sample text about me in order to clone Linked in."
                value={profileBio}
                onChange={(e) => setUserBio(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" id="modal-button" type="submit">
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default About;
