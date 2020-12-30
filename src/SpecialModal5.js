import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";
import { c1, reducer1, reducer2, reducer3, reducer4 } from "./actions/dragger";
import useSound from "use-sound";
import lost from "./error.wav";
import mario from "./mario.mp3";
import "./Modals.css";

function SpecialModal5({
  team1,
  team2,
  team3,
  team4,
  c1,
  reducer1,
  reducer2,
  reducer3,
  reducer4,
}) {
  const [play] = useSound(mario);
  const [play1] = useSound(lost);
  const [show, setShow] = useState(false);
  const [tries, setTries] = useState(1);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);

  const handleClose = () => {
    setShow(false);
    c1();
  };
  const handleClose1 = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const handlePress = () => {
    setTries(0);
  };
  const handleChange1 = (e) => {
    setValue1(parseInt(e.target.value));
  };
  const handleChange2 = (e) => {
    setValue2(parseInt(e.target.value));
  };
  const handleChange3 = (e) => {
    setValue3(parseInt(e.target.value));
  };
  const handleChange4 = (e) => {
    setValue4(parseInt(e.target.value));
  };
  const handleSubmit1 = () => {
    reducer1(-value1);
  };
  const handleSubmit2 = () => {
    reducer1(value1);
  };
  const handleSubmit3 = () => {
    reducer2(-value2);
  };
  const handleSubmit4 = () => {
    reducer2(value2);
  };
  const handleSubmit5 = () => {
    reducer3(-value3);
  };
  const handleSubmit6 = () => {
    reducer3(value3);
  };
  const handleSubmit7 = () => {
    reducer4(-value4);
  };
  const handleSubmit8 = () => {
    reducer4(value4);
  };

  return (
    <>
      <Card onClick={handleShow} bg="transparent">
        <small bg="dark" className="text-muted no-wrapper">
          <Button variant="dark">Final Question Bet Your Points</Button>
        </small>
      </Card>
      <Modal className="sizer" show={show} onHide={handleClose1}>
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
            <Button onClick={handleSubmit1}>
              {" "}
              <div onClick={play1}>Lost It!!</div>
            </Button>
            <Button onClick={handleSubmit2}>
              {" "}
              <div onClick={play}>Get Points!!</div>
            </Button>
            <br />
            <div className="align fonty">{team2}</div>{" "}
            <input
              onChange={handleChange2}
              value={value2}
              placeholder={`Bet Your Points`}
            ></input>{" "}
            <Button onClick={handleSubmit3}>
              <div onClick={play1}>Lost It!!</div>
            </Button>
            <Button onClick={handleSubmit4}>
              {" "}
              <div onClick={play}>Get Points!!</div>
            </Button>
            <br />
            <div className="align fonty">{team3}</div>{" "}
            <input
              onChange={handleChange3}
              value={value3}
              placeholder={`Bet Your Points`}
            ></input>{" "}
            <Button onClick={handleSubmit5}>
              <div onClick={play1}>Lost It!!</div>
            </Button>
            <Button onClick={handleSubmit6}>
              {" "}
              <div onClick={play}>Get Points!!</div>
            </Button>
            <br />
            <div className="align fonty">{team4}</div>{" "}
            <input
              onChange={handleChange4}
              value={value4}
              placeholder={`Bet Your Points`}
            ></input>{" "}
            <Button onClick={handleSubmit7}>
              <div onClick={play1}>Lost It!!</div>
            </Button>
            <Button onClick={handleSubmit8}>
              {" "}
              <div onClick={play}>Get Points!!</div>
            </Button>
          </div>

          <br />
        </Modal.Footer>
      </Modal>{" "}
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    reducer1: (points) => reducer1(points, dispatch),
    reducer2: (points) => reducer2(points, dispatch),
    reducer3: (points) => reducer3(points, dispatch),
    reducer4: (points) => reducer4(points, dispatch),
    c1: () => c1(dispatch),
  };
};

export default connect(null, mapDispatchToProps)(SpecialModal5);
