import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";
import { reducer1, reducer2, reducer3, reducer4, c1 } from "./actions/dragger";
import useSound from "use-sound";
import Bungs from "./Bungs";
import boopSfx from "./error.wav";
import yes from "./yes.mp3";
import "./Modals.css";

function SpecialModal5({
  changeTeam,
  team1,
  team2,
  team3,
  team4,

  reducer1,
  reducer2,
  reducer3,
  reducer4,
  c1,
}) {
  const [play] = useSound(boopSfx);
  const [play1] = useSound(yes);
  const [show, setShow] = useState(false);
  const [tries, setTries] = useState(1);
  const [value, setValue] = useState("Reveal");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePress = () => {
    setTries(0);
    c1();
  };

  return (
    <>
      <Card onClick={handleShow} bg="transparent">
        <small bg="dark" className="text-muted no-wrapper">
          <Button variant="dark">Final Question Bet Your Points</Button>
        </small>
      </Card>
      <Modal className="sizer" show={show} onHide={handleClose}>
        <Modal.Header>
          <Button variant="primary" onClick={handleClose}>
            <div onClick={handlePress}> X</div>
          </Button>
        </Modal.Header>
        <Modal.Body className="fonty"> </Modal.Body>
        <Modal.Footer>
          <div className="spaceside1">
            <br />
            <Button>{team1}</Button>
            <br />
            <Button>{team2}</Button>
            <br />
            <Button>{team3}</Button>
            <br />
            <Button>{team4}</Button>
          </div>
          <div className="spaceside1">
            <br />
            <input></input>
            <br />
            <input></input>
            <br />
            <input></input>
            <br />
            <input></input>
          </div>
          <br />
        </Modal.Footer>
      </Modal>{" "}
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    c1: () => c1(dispatch),
    // reducer1: (points) => reducer1(points, dispatch),
    // reducer2: (points) => reducer2(points, dispatch),
    // reducer3: (points) => reducer3(points, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(SpecialModal5);
