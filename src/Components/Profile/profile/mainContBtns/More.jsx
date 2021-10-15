import React from "react";
import "./contBtns.css";
import { Dropdown, Butoon, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoReturnUpForwardOutline } from "react-icons/io5";
import { BsDownload, BsNewspaper } from "react-icons/bs";

export default function More({ personAcc }) {
  return (
    <>
      {personAcc && (
        <div className="dropdownCard d-flex flex-column align-items-center justify-content-between">
          <Link
            to="/"
            className="d-flex justify-content-between align-items-center linkCard w-100"
          >
            <IoReturnUpForwardOutline size="1.4rem" />
            <p className="ml-2 font-weight-light m-0 text-right">
              Share profile in a message
            </p>
          </Link>
          <a
            href={`${process.env.REACT_APP_FETCHLINK}/profile/${personAcc}/CV`}
            className="d-flex justify-content-between align-items-center linkCard w-100"
          >
            <BsDownload size="1.4rem" />
            <p className="ml-2 font-weight-light m-0">Save to PDF</p>
          </a>
          <a
            href={`${process.env.REACT_APP_FETCHLINK}/experience/${personAcc}/CSV`}
            className="d-flex justify-content-between align-items-center linkCard w-100"
          >
            <BsNewspaper size="1.4rem" />
            <p className="ml-2 font-weight-light text-right">
              Download all experience
            </p>
          </a>
        </div>
      )}
    </>
  );
}
