import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Search() {
  const [Profiles, setProfiles] = useState([]);
  const [ShowSearch, setShowSearch] = useState(false);
  //
  const searchFetch = async (search) => {
    setShowSearch(true);
    let url = `${process.env.REACT_APP_FETCHLINK}/profile?search=${search}`;
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        await setProfiles(data);
        setShowSearch(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* <Form inline as="li"> */}
      <Form.Control
        type="text"
        placeholder="... Search"
        onChange={(e) =>
          e.target.value.length > 1
            ? searchFetch(e.target.value)
            : setShowSearch(false)
        }
      />
      {/* </Form> */}
      {ShowSearch && (
        <div className="searchContainer d-flex flex-column">
          {Profiles.map((pr) => (
            <Link
              to={`/home/${pr.id}`}
              className="my-2 searchCarts px-3"
              onClick={() => {
                setShowSearch(false);
              }}
            >
              <div className="d-flex align-items-center">
                <img
                  src={pr.image}
                  alt=""
                  style={{
                    width: "30px",
                    aspectRatio: "1/1",
                    borderRadius: "50%",
                  }}
                />
                <div className="ml-2">
                  <p className="m-0">
                    {pr.name} {pr.surname}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
