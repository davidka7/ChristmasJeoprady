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
        <Modal.Title className="align">
          Can You Guess the Answer to The last Question? You can bet your points
          for a chance to double it or lose it.
        </Modal.Title>

        <Modal.Footer>
          <div className="spaceside1">
            <div className="align fonty">{team1}</div>{" "}
            <input placeholder={`Bet Your Points`}></input>{" "}
            <Button>Lost It</Button>
            <Button>Got It</Button>
            <br />
            <div className="align fonty">{team2}</div>{" "}
            <input placeholder={`Bet Your Points`}></input>{" "}
            <Button>Lost It</Button>
            <Button>Got It</Button>
            <br />
            <div className="align fonty">{team3}</div>{" "}
            <input placeholder={`Bet Your Points`}></input>{" "}
            <Button>Lost It</Button>
            <Button>Got It</Button>
            <br />
            <div className="align fonty">{team4}</div>{" "}
            <input placeholder={`Bet Your Points`}></input>{" "}
            <Button>Lost It</Button>
            <Button>Got It</Button>
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
