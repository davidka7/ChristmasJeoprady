import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";
import { reducer1, reducer2, reducer3, reducer4, c1 } from "./actions/dragger";
import useSound from "use-sound";
import Part1 from "./Part1";
import boopSfx from "./error.wav";
import mario from "./mario.mp3";
import "./Modals.css";
import twitter from "./twitter.png";
// import a1 from "./twitter11.png";
import dima from "./4rz5qe.gif";
import Sounder from "./Sounder";
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
  const [play1] = useSound(mario);
  const [show, setShow] = useState(false);
  const [tries, setTries] = useState(1);

  const [teamPoints, setTeamPoints] = useState("");
  const [points] = useState(data.points);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePress = () => {
    setTries(0);
    c1();
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

  const playGamePlus = (e) => {
    if (teamPoints === team1) {
      e.persist();

      reducer1(data.points);
    } else if (teamPoints === team2) {
      e.persist();
      reducer2(data.points);
    } else if (teamPoints === team3) {
      e.persist();
      reducer3(data.points);
    } else if (teamPoints === team4) {
      e.persist();
      reducer4(data.points);
    }
  };
  const playGameMinus = (e) => {
    if (teamPoints === team1) {
      e.persist();

      reducer1(-data.points / 2);
    } else if (teamPoints === team2) {
      e.persist();
      reducer2(-data.points / 2);
    } else if (teamPoints === team3) {
      e.persist();
      reducer3(-data.points / 2);
    } else if (teamPoints === team4) {
      e.persist();
      reducer4(-data.points / 2);
    }
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
              {data.part == 1 ? (
                <div className="align">{data.question}</div>
              ) : (
                <div></div>
              )}
              {data.part == 4 ? (
                <div className="align">{data.question}</div>
              ) : (
                <div></div>
              )}
              {data.part == 2 ? (
                <div className="align">
                  {data.question}
                  <Sounder />{" "}
                </div>
              ) : (
                <div></div>
              )}
              {data.part == 3 ? <Part1 data={data} /> : <div></div>}
            </div>
          </Modal.Title>{" "}
          <Button variant="primary" onClick={handleClose}>
            <div onClick={handlePress}>
              {" "}
              <div onClick={changeTeam}> X</div>
            </div>
          </Button>
        </Modal.Header>

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
            {data.part == 4 ? (
              <img
                className="special-s"
                // style={{ width: "100%", height: "100%" }}
                src={`${dima}`}
              />
            ) : (
              <div></div>
            )}
            <br />
            <div className="spaceside">
              <Button onClick={handleTeam1} variant="outline-secondary">
                {team1}
              </Button>
              <br />
              <Button onClick={handleTeam2} variant="outline-secondary">
                {team2}
              </Button>
              <br />
              <Button onClick={handleTeam3} variant="outline-secondary">
                {team3}
              </Button>
              <br />
              <Button onClick={handleTeam4} variant="outline-secondary">
                {team4}
              </Button>
              <br />
            </div>

            <Button
              style={{ float: "left" }}
              onClick={playGameMinus}
              variant="dark"
            >
              <div onClick={play}>Lose Points!!</div>
            </Button>
            <Button
              style={{ float: "right" }}
              onClick={playGamePlus}
              variant="dark"
            >
              <div onClick={play1}>Get Points!!</div>
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
