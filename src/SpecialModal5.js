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
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);

  const handleClose = () => {
    c1();

    setShow(false);
  };
  const handleShow = () => setShow(true);

  const handlePress = () => {
    setTries(0);
    c1();
  };
  const handleChange1 = (e) => {
    setValue1(e.target.value);
  };
  const handleChange2 = (e) => {
    setValue2(e.target.value);
  };
  const handleChange3 = (e) => {
    setValue3(e.target.value);
  };
  const handleChange4 = (e) => {
    setValue4(e.target.value);
  };
  const handleSubmit1 = (e) => {
    reducer1(value1);
  };
  const handleSubmit2 = (e) => {
    reducer1(-value1);
  };
  const handleSubmit3 = (e) => {
    reducer1(value2);
  };
  const handleSubmit4 = (e) => {
    reducer1(-value2);
  };
  const handleSubmit5 = (e) => {
    reducer1(value3);
  };
  const handleSubmit6 = (e) => {
    reducer1(-value3);
  };
  const handleSubmit7 = (e) => {
    reducer1(value4);
  };
  const handleSubmit8 = (e) => {
    reducer1(-value4);
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
          for a chance to double it or lose it. How many days has it been since
          Denis became the pastor?
        </Modal.Title>

        <Modal.Footer>
          <div className="spaceside1">
            <div className="align fonty">{team1}</div>{" "}
            <input
              onChange={handleChange1}
              value={value1}
              placeholder={`Bet Your Points`}
            ></input>{" "}
            <Button onClick={handleSubmit1}>Lost It</Button>
            <Button onClick={handleSubmit2}>Got It</Button>
            <br />
            <div className="align fonty">{team2}</div>{" "}
            <input
              onChange={handleChange2}
              value={value2}
              placeholder={`Bet Your Points`}
            ></input>{" "}
            <Button onClick={handleSubmit3}>Lost It</Button>
            <Button onClick={handleSubmit4}>Got It</Button>
            <br />
            <div className="align fonty">{team3}</div>{" "}
            <input
              onChange={handleChange3}
              value={value3}
              placeholder={`Bet Your Points`}
            ></input>{" "}
            <Button onClick={handleSubmit5}>Lost It</Button>
            <Button onClick={handleSubmit6}>Got It</Button>
            <br />
            <div className="align fonty">{team4}</div>{" "}
            <input
              onChange={handleChange4}
              value={value4}
              placeholder={`Bet Your Points`}
            ></input>{" "}
            <Button onClick={handleSubmit7}>Lost It</Button>
            <Button onClick={handleSubmit8}>Got It</Button>
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
