import { useState, React } from "react";
import { Modal, Button } from "react-bootstrap";
import Privacy from "../../Privacy";
import TextareaAutosize from "react-textarea-autosize";
import { BsThreeDots, BsFillBriefcaseFill } from "react-icons/bs";
import { AiFillPlaySquare, AiFillEdit } from "react-icons/ai";
import { ImStatsBars } from "react-icons/im";
import { GiFlowerStar } from "react-icons/gi";
import { HiDocumentText } from "react-icons/hi";
import EditBgImg from "../../Profile/profile/edit/EditBgImg";
import axios from "axios";

const ModalItem = ({
  onNewPost,
  postToUpdate,
  onUpdatePost,
  title,
  fetchPosts
}) => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState(
    title === "update" ? postToUpdate.text : new Array(6).join("\n")
  );
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const token = process.env.REACT_APP_TOKENACCESS;

  const postPost = async () => {
    try {
      const req = await axios.post();
    } catch (error) {}
  };

  return (
    <>
      <button
        id={title === "update" ? "update-btn" : "modal-btn"}
        onClick={handleShow}
      >
        {title === "update" ? <AiFillEdit /> : "Start a post"}
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a post </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex">
            <div className="profile-img">
              <img
                src="https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png"
                alt=""
              />
            </div>
            <div className="w-100">
              <Privacy />
            </div>
          </div>

          <TextareaAutosize
            cacheMeasurements
            id="input"
            placeholder="What do you want to talk about?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            cols="62"
          />
          <button className="hashtag" onClick={() => setText(text + "#")}>
            Add hashtag
          </button>
        </Modal.Body>
        <Modal.Footer id="modal-footer">
          <div className="icons-footer">
            <EditBgImg
              title="post-img"
              postId={postToUpdate}
              onUpdatePostFunction={onUpdatePost}
              fetchPosts={fetchPosts}
            />
            <AiFillPlaySquare size={25} />
            <HiDocumentText size={25} />
            <BsFillBriefcaseFill size={25} />
            <GiFlowerStar size={25} />
            <ImStatsBars size={25} />
            <BsThreeDots size={25} />
          </div>
          <Privacy />

          {title === "update" ? (
            <Button
              variant="primary"
              onClick={() => {
                handleClose();
              }}
            >
              Edit
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => {
                handleClose();
              }}
            >
              Post
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalItem;
