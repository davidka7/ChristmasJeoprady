import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";
import { reducer1, reducer2, reducer3, reducer4, c1 } from "./actions/dragger";
import useSound from "use-sound";

import boopSfx from "./error.wav";
import yes from "./yes.mp3";
import "./Modals.css";

function Modals({
  changeTeam,
  team1,
  team2,
  team3,
  team4,
  TeamPlaying,
  data,
  reducer1,
  reducer2,
  reducer3,
  reducer4,
  c1,
}) {
  const [play] = useSound(boopSfx);
  const [play1] = useSound(yes);
  const [show, setShow] = useState(false);

  const [points] = useState(data.points);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newValue, setNewValue] = useState("");
  const handleValue = (e) => {
    setNewValue(e.target.value);
  };
  const handleSubmit = (e) => {
    changeTeam();

    if (data.answer === newValue) {
      play1();
      if (TeamPlaying === team1) {
        e.persist();

        reducer1(1200);
      } else if (TeamPlaying === team2) {
        e.persist();
        reducer2(1200);
      } else if (TeamPlaying === team3) {
        e.persist();
        reducer3(1200);
      } else if (TeamPlaying === team4) {
        e.persist(1200);
        reducer4(data.points);
      }
    } else {
      play();
      if (TeamPlaying === team1) {
        e.persist();

        reducer1(-800);
      } else if (TeamPlaying === team2) {
        e.persist(-800);
        reducer2(data.points);
      } else if (TeamPlaying === team3) {
        e.persist(-800);
        reducer3(data.points);
      } else if (TeamPlaying === team4) {
        e.persist(-800);
        reducer4(data.points);
      }
    }
  };

  const handlePress = () => {
    c1();
  };
  return (
    <>
      <Card className={`outliners z100-size hover1`} onClick={handleShow}>
        <Card.Title className="fonty hover2">{data.points}</Card.Title>
      </Card>
      <Modal
        className="sizer"
        style={{
          backgroundImage: `url(${data.background_image})`,
        }}
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>{data.question}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="fonty">
          <input onChange={handleValue}></input>
        </Modal.Body>
        <Modal.Footer>
          <div onClick={handleSubmit}>
            <Button variant="primary" onClick={handleClose}>
              Check Answer
            </Button>
          </div>
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
    // reducer1: (points) => reducer1(points, dispatch),
    // reducer2: (points) => reducer2(points, dispatch),
    // reducer3: (points) => reducer3(points, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Modals);
