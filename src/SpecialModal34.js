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
import twitter from "./twitter.png";
import twitter11 from "./twitter11.png";
function SpecialModal34({
  changeTeam,
  team1,
  team2,
  team3,
  team4,
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
  const [tries, setTries] = useState(1);
  const [value, setValue] = useState("Reveal");
  const [teamPoints, setTeamPoints] = useState("");
  const [points] = useState(data.points);
  const [familyDispute, setFamilyDispute] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const openDiv = () => {
    setFamilyDispute(true);
  };
  const handlePress = () => {
    setTries(0);
    c1();
  };
  const handleValue = () => {
    setValue(data.answer);
  };
  const handleTeam1 = () => {
    setTeamPoints(team1);
  };
  const handleTeam2 = () => {
    setTeamPoints(team2);
  };
  const handleTeam3 = () => {
    setTeamPoints(team3);
  };
  const handleTeam4 = () => {
    setTeamPoints(team4);
  };

  return (
    <>
      {tries !== 0 ? (
        <Card
          className={`outliners z${points}-size hover1`}
          onClick={handleShow}
        >
          <Card.Title className="fonty hover2">{data.points}</Card.Title>
        </Card>
      ) : (
        <Card className={`outliners z${points}-size`} bg="transparent">
          <small bg="dark" className="text-muted no-wrapper">
            Complete
          </small>
        </Card>
      )}
      <Modal
        className="sizer"
        style={{
          backgroundImage: `url(${data.background_image})`,
        }}
        show={show}
        onHide={handleClose}
      >
        <Modal.Header>
          <Modal.Title>
            {" "}
            <div>
              {data.part == 3 ? (
                <img
                  className="special-s"
                  // style={{ width: "100%", height: "100%" }}
                  src={`${data.category}`}
                />
              ) : (
                <div>data.question</div>
              )}
            </div>
          </Modal.Title>{" "}
          <Button variant="primary" onClick={handleClose}>
            <div onClick={handlePress}> X</div>
          </Button>
        </Modal.Header>
        <Modal.Body className="fonty">
          {" "}
          <div onClick={handleValue}>{value}</div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
        <Modal.Footer>
          {" "}
          <div>
            {data.part == 3 ? (
              <img
                className="special-s"
                // style={{ width: "100%", height: "100%" }}
                src={`${twitter}`}
              />
            ) : (
              <div></div>
            )}
            <br />
            <div className="spaceside">
              <Button onClick={handleTeam1} variant="outline-secondary">
                {team1}
              </Button>
              <Button onClick={handleTeam2} variant="outline-secondary">
                {team2}
              </Button>{" "}
              <br />
              <Button onClick={handleTeam3} variant="outline-secondary">
                {team3}
              </Button>
              <Button onClick={handleTeam4} variant="outline-secondary">
                {team4}
              </Button>
              <br />
            </div>
            <div>
              <label>First Answer</label> <input></input>
            </div>
            {familyDispute == true ? <Bungs /> : <div></div>}
            <Button variant="dark">-{points / 2}</Button>
            <Button variant="dark">+{points}</Button>
            <Button onClick={openDiv} variant="secondary">
              Family Dispute?
            </Button>
            <br />
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

export default connect(null, mapDispatchToProps)(SpecialModal34);
