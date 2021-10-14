import React from "react";
import { Button, Col, Container, Row, Dropdown, Form } from "react-bootstrap";
import { BiCaretDown } from "react-icons/bi";
import "./style.css";

export default function Connection() {
  return (
    <>
      <div className="w-100 connectCont">
        <Container>
          <Row>
            {/*  */}
            <Dropdown className="d-flex">
              <Dropdown.Toggle
                variant="outline-secondary"
                id="dropdown-basic"
                className="connBtns my-auto font-weight-bold"
                size="sm"
                style={{ backgroundColor: "#047642", color: "white" }}
              >
                <h6 className="font-weight-bold m-0">
                  People <BiCaretDown className="my-auto" />
                </h6>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {/*  */}
            <h6 className="my-1 mx-2 boderMid"></h6>
            {/*  */}
            <Dropdown className="d-flex">
              <Dropdown.Toggle
                variant="success"
                style={{ backgroundColor: "#047642", color: "white" }}
                id="dropdown-basic"
                className="connBtns my-auto font-weight-bold"
                size="sm"
              >
                <h6 className="font-weight-bold m-0">
                  1st <BiCaretDown className="my-auto" />
                </h6>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <div className="checkBoxs">
                  <div className="d-flex checkbox">
                    <input type="checkbox" id="1st" name="1st"></input>
                    <span>1st</span>
                  </div>
                  <div className="d-flex checkbox">
                    <input type="checkbox" id="1st" name="1st"></input>
                    <span>2nd</span>
                  </div>
                  <div className="d-flex checkbox">
                    <input type="checkbox" id="1st" name="1st"></input>
                    <span>3rd+</span>
                  </div>
                  <div className="buttonss"></div>
                </div>{" "}
              </Dropdown.Menu>
            </Dropdown>
            {/*  */}
            <Dropdown className="d-flex">
              <Dropdown.Toggle
                variant="outline-secondary"
                id="dropdown-basic"
                className="connBtns my-auto font-weight-bold"
                size="sm"
              >
                <h6 className="font-weight-bold m-0">
                  Locations <BiCaretDown className="my-auto" />
                </h6>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {/*  */}
            <Dropdown className="d-flex">
              <Dropdown.Toggle
                variant="outline-secondary"
                id="dropdown-basic"
                className="connBtns my-auto font-weight-bold"
                size="sm"
              >
                <h6 className="font-weight-bold m-0">
                  Current company <BiCaretDown className="my-auto" />
                </h6>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {/*  */}
            <h6 className="my-1 mx-2 boderMid"></h6>

            {/*  */}
            <Button
              variant="outline-secondary"
              className="connBtns my-auto font-weight-bold"
              size="sm"
            >
              <h6 className="font-weight-bold m-0">All filters</h6>
            </Button>
            <div>1</div>
            <div>1</div>
          </Row>
        </Container>
      </div>
    </>
  );
}
