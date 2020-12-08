import React, { useState } from "react";
import Modals from "./Modals";
import Emoji from "./Emoji";
import Modals1 from "./Modals1";

// import useSound from "use-sound";

// import $ from "jquery";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import "bootstrap/dist/css/bootstrap.min.css";
// import Scrambler from "scrambling-text";
import "./Chop.css";

// import darkImage from "./dark1.jpg";
import data1 from "./1.json";
import data2 from "./2.json";
import data3 from "./3.json";
import data4 from "./4.json";
import data5 from "./5.json";
import category from "./category.json";

function Chop({ points }) {
  // const [play] = useSound(jp);
  const [trueOrFalse, setTrueOrFalse] = useState(false);
  const [team1, setTeam1] = useState("");
  const [TeamPlaying, setTeamPlaying] = useState(" ");
  const [team2, setTeam2] = useState("");
  const [team3, setTeam3] = useState("");
  const [team4, setTeam4] = useState("");

  const [team1color, setTeam1color] = useState("light");
  const [team2color, setTeam2color] = useState("light");
  const [team3color, setTeam3color] = useState("light");
  const [team4color, setTeam4color] = useState("light");
  // const [team1mascot, setteam1mascot] = useState("light");
  // const [team2mascot, setteam2mascot] = useState("light");
  // const [team3mascot, setteam3mascot] = useState("light");
  // const [team4mascot, setteam4mascot] = useState("light");

  const changeTeam = () => {
    if (TeamPlaying == team1) {
      setTeamPlaying(team2);
      // msg.text = `Team ${team2} Turn`;
      // window.speechSynthesis.speak(msg);
    } else if (TeamPlaying == team2) {
      setTeamPlaying(team3);
      // msg.text = `Team ${team3} Turn`;
      // window.speechSynthesis.speak(msg);
    } else if (TeamPlaying == team3) {
      setTeamPlaying(team4);
      // msg.text = `Team ${team4} Turn`;
      // window.speechSynthesis.speak(msg);
    } else if (TeamPlaying == team4) {
      setTeamPlaying(team1);
      // msg.text = `Team ${team1} Turn`;
      // window.speechSynthesis.speak(msg);
    } else {
      setTeamPlaying(team1);
    }
  };

  const handleTrue = () => {
    setTrueOrFalse(true);
    changeTeam();
  };
  const teams1 = (e) => {
    setTeam1(e.target.value);
  };
  const teams2 = (e) => {
    setTeam2(e.target.value);
  };
  const teams3 = (e) => {
    setTeam3(e.target.value);
  };
  const teams4 = (e) => {
    setTeam4(e.target.value);
  };
  const teamcolors1 = (e) => {
    setTeam1color(e.target.value);
  };
  const teamcolors2 = (e) => {
    setTeam2color(e.target.value);
  };
  const teamcolors3 = (e) => {
    setTeam3color(e.target.value);
  };
  const teamcolors4 = (e) => {
    setTeam4color(e.target.value);
  };

  return (
    <div className="full-size">
      {trueOrFalse ? (
        <div>
          <div>
            <br />
            <CardDeck className="paddings max-height">
              {" "}
              <Card bg={"transparent"} className={`life${team1color}`}>
                <Card.Title className="second-Click "> Team {team1}</Card.Title>
                <Card.Title className="second-Click">
                  {" "}
                  Points: {points.reducers1}
                </Card.Title>
              </Card>
              <Card bg={"transparent"} className={`life${team2color}`}>
                <Card.Title className="second-Click">Team {team2}</Card.Title>
                <Card.Title className="second-Click">
                  {" "}
                  Points: {points.reducers2}
                </Card.Title>
              </Card>
              <Card bg={"transparent"} className={`life${team3color}`}>
                <Card.Title className="second-Click">Team {team3}</Card.Title>
                <Card.Title className="second-Click">
                  {" "}
                  Points: {points.reducers3}
                </Card.Title>
              </Card>
              <Card bg={"transparent"} className={`life${team4color}`}>
                <Card.Title className="second-Click">Team {team4}</Card.Title>
                <Card.Title className="second-Click">
                  {" "}
                  Points: {points.reducers4}
                </Card.Title>
              </Card>
            </CardDeck>
            <CardDeck className="paddings">
              <Card bg="transparent" className="special-font">
                <span> {`Team ${TeamPlaying} Turn`}</span>
              </Card>
              <br />
              <br />
              <br />
            </CardDeck>
            <br /> <br />
            <CardDeck className="paddings">
              {category.map((category) => {
                return <Modals1 key data={category} />;
              })}
            </CardDeck>
            <br />
            <CardDeck className="paddings">
              {data1.map((data) => {
                return (
                  <Modals
                    changeTeam={changeTeam}
                    team1={team1}
                    team2={team2}
                    team3={team3}
                    team4={team4}
                    TeamPlaying={TeamPlaying}
                    key
                    data={data}
                  />
                );
              })}
            </CardDeck>
            <br />
            <CardDeck className="paddings">
              {data2.map((data) => {
                return (
                  <Modals
                    changeTeam={changeTeam}
                    team1={team1}
                    team2={team2}
                    team3={team3}
                    team4={team4}
                    TeamPlaying={TeamPlaying}
                    key
                    data={data}
                  />
                );
              })}
            </CardDeck>
            <br />
            <CardDeck className="paddings">
              {data3.map((data) => {
                return (
                  <Modals
                    changeTeam={changeTeam}
                    team1={team1}
                    team2={team2}
                    team3={team3}
                    team4={team4}
                    TeamPlaying={TeamPlaying}
                    key
                    data={data}
                  />
                );
              })}
            </CardDeck>
            <br />
            <CardDeck className="paddings">
              {data4.map((data) => {
                return (
                  <Modals
                    changeTeam={changeTeam}
                    team1={team1}
                    team2={team2}
                    team3={team3}
                    team4={team4}
                    TeamPlaying={TeamPlaying}
                    key
                    data={data}
                  />
                );
              })}
            </CardDeck>
            <br />
            <CardDeck className="paddings">
              {data5.map((data) => {
                return (
                  <Modals
                    changeTeam={changeTeam}
                    team1={team1}
                    team2={team2}
                    team3={team3}
                    team4={team4}
                    TeamPlaying={TeamPlaying}
                    key
                    data={data}
                  />
                );
              })}
            </CardDeck>
          </div>
        </div>
      ) : (
        <div className="first-Click">
          <div class="bubbles  first-Click">
            {" "}
            <h1>Name Your Teams</h1>
          </div>

          <CardDeck className="paddings">
            {team1color === "light" ? (
              <Card
                className={`special-corner life${team1color}s`}
                bg={"transparent"}
              >
                {" "}
                <Card.Body className="paddings1">
                  <div>
                    <label className="second-Click">Teams Name:</label>
                    <input onChange={teams1} className="maxer"></input>
                  </div>
                  <div>
                    <label className="second-Click">
                      Teams Color:
                      <Button
                        onClick={teamcolors1}
                        value="secondary"
                        variant="secondary"
                      >
                        {" "}
                      </Button>
                      <Button
                        value="danger"
                        onClick={teamcolors1}
                        variant="danger"
                      >
                        {" "}
                      </Button>
                      <Button
                        value="success"
                        onClick={teamcolors1}
                        variant="success"
                      >
                        {" "}
                      </Button>
                      <Button value="info" onClick={teamcolors1} variant="info">
                        {" "}
                      </Button>
                    </label>
                  </div>
                </Card.Body>
              </Card>
            ) : (
              <Card
                className={`special-corner life${team1color}s`}
                bg={"transparent"}
              >
                {" "}
                <Card.Body className="paddings1">
                  <div>
                    <label className="second-Click">Team Name:</label>
                    <input onChange={teams1} className="maxer"></input>
                  </div>
                  <div>
                    <label className="second-Click">
                      Teams Color:
                      <Button
                        onClick={teamcolors1}
                        value="secondary"
                        variant="secondary"
                      >
                        {" "}
                      </Button>
                      <Button
                        value="danger"
                        onClick={teamcolors1}
                        variant="danger"
                      >
                        {" "}
                      </Button>
                      <Button
                        value="success"
                        onClick={teamcolors1}
                        variant="success"
                      >
                        {" "}
                      </Button>
                      <Button value="info" onClick={teamcolors1} variant="info">
                        {" "}
                      </Button>
                    </label>
                    <br /> <br />
                    <label className="second-Click">
                      Choose Your <br /> <br /> Mascot: Click one
                      <br />
                      <br /> <br /> <Emoji number={1} />
                    </label>
                  </div>
                </Card.Body>
              </Card>
            )}
            {team2color === "light" ? (
              <Card
                className={`special-corner life${team2color}s`}
                bg={"transparent"}
              >
                {" "}
                <Card.Body className="paddings1">
                  <div>
                    <label className="second-Click">Teams Name:</label>
                    <input onChange={teams2} className="maxer"></input>
                  </div>
                  <div>
                    <label className="second-Click">
                      Team Color:
                      <Button
                        value="secondary"
                        onClick={teamcolors2}
                        variant="secondary"
                      >
                        {" "}
                      </Button>
                      <Button
                        value="danger"
                        onClick={teamcolors2}
                        variant="danger"
                      >
                        {" "}
                      </Button>
                      <Button
                        value="success"
                        onClick={teamcolors2}
                        variant="success"
                      >
                        {" "}
                      </Button>
                      <Button value="info" onClick={teamcolors2} variant="info">
                        {" "}
                      </Button>
                    </label>{" "}
                  </div>
                </Card.Body>
              </Card>
            ) : (
              <Card
                className={`special-corner life${team2color}s`}
                bg={"transparent"}
              >
                {" "}
                <Card.Body className="paddings1">
                  <div>
                    <label className="second-Click">Team Name:</label>
                    <input onChange={teams2} className="maxer"></input>
                  </div>
                  <div>
                    <label className="second-Click">
                      Team Color:
                      <Button
                        value="secondary"
                        onClick={teamcolors2}
                        variant="secondary"
                      >
                        {" "}
                      </Button>
                      <Button
                        value="danger"
                        onClick={teamcolors2}
                        variant="danger"
                      >
                        {" "}
                      </Button>
                      <Button
                        value="success"
                        onClick={teamcolors2}
                        variant="success"
                      >
                        {" "}
                      </Button>
                      <Button value="info" onClick={teamcolors2} variant="info">
                        {" "}
                      </Button>
                    </label>{" "}
                    <br /> <br />
                    <label className="second-Click">
                      Choose Your <br /> <br /> Mascot: Click one
                      <br /> <br /> <br /> <Emoji number={2} />
                    </label>
                  </div>
                </Card.Body>
              </Card>
            )}{" "}
            {team3color === "light" ? (
              <Card
                className={`special-corner life${team3color}s`}
                bg={"transparent"}
              >
                {" "}
                <Card.Body className="paddings1">
                  <div>
                    <label className="second-Click">Team Name:</label>
                    <input onChange={teams3} className="maxer"></input>
                  </div>
                  <div>
                    <label className="second-Click">
                      Team Color:
                      <Button
                        onClick={teamcolors3}
                        value="secondary"
                        variant="secondary"
                      >
                        {" "}
                      </Button>
                      <Button
                        value="danger"
                        onClick={teamcolors3}
                        variant="danger"
                      >
                        {" "}
                      </Button>
                      <Button
                        value="success"
                        onClick={teamcolors3}
                        variant="success"
                      >
                        {" "}
                      </Button>
                      <Button value="info" onClick={teamcolors3} variant="info">
                        {" "}
                      </Button>
                    </label>{" "}
                  </div>
                </Card.Body>
              </Card>
            ) : (
              <Card
                className={`special-corner life${team3color}s`}
                bg={"transparent"}
              >
                {" "}
                <Card.Body className="paddings1">
                  <div>
                    <label className="second-Click">Team Name:</label>
                    <input onChange={teams3} className="maxer"></input>
                  </div>
                  <div>
                    <label className="second-Click">
                      Team Color:
                      <Button
                        onClick={teamcolors3}
                        value="secondary"
                        variant="secondary"
                      >
                        {" "}
                      </Button>
                      <Button
                        value="danger"
                        onClick={teamcolors3}
                        variant="danger"
                      >
                        {" "}
                      </Button>
                      <Button
                        value="success"
                        onClick={teamcolors3}
                        variant="success"
                      >
                        {" "}
                      </Button>
                      <Button value="info" onClick={teamcolors3} variant="info">
                        {" "}
                      </Button>
                    </label>{" "}
                    <br /> <br />
                    <label className="second-Click">
                      Choose Your <br /> <br /> Mascot: Click one
                      <br />
                      <br /> <br /> <Emoji number={3} />
                    </label>
                  </div>
                </Card.Body>
              </Card>
            )}
            {team4color === "light" ? (
              <Card
                className={`special-corner life${team4color}s`}
                bg={"transparent"}
              >
                {" "}
                <Card.Body className="paddings1">
                  <div>
                    <label className="second-Click">Team Name:</label>
                    <input onChange={teams4} className="maxer"></input>
                  </div>
                  <div>
                    <label className="second-Click">
                      Team Color:
                      <Button
                        onClick={teamcolors4}
                        value="secondary"
                        variant="secondary"
                      >
                        {" "}
                      </Button>
                      <Button
                        value="danger"
                        onClick={teamcolors4}
                        variant="danger"
                      >
                        {" "}
                      </Button>
                      <Button
                        value="success"
                        onClick={teamcolors4}
                        variant="success"
                      >
                        {" "}
                      </Button>
                      <Button value="info" onClick={teamcolors4} variant="info">
                        {" "}
                      </Button>
                    </label>{" "}
                  </div>
                </Card.Body>
              </Card>
            ) : (
              <Card
                className={`special-corner life${team4color}s`}
                bg={"transparent"}
              >
                {" "}
                <Card.Body className="paddings1">
                  <div>
                    <label className="second-Click">Team Name:</label>
                    <input onChange={teams4} className="maxer"></input>
                  </div>
                  <div>
                    <label className="second-Click">
                      Team Color:
                      <Button
                        onClick={teamcolors4}
                        value="secondary"
                        variant="secondary"
                      >
                        {" "}
                      </Button>
                      <Button
                        value="danger"
                        onClick={teamcolors4}
                        variant="danger"
                      >
                        {" "}
                      </Button>
                      <Button
                        value="success"
                        onClick={teamcolors4}
                        variant="success"
                      >
                        {" "}
                      </Button>
                      <Button value="info" onClick={teamcolors4} variant="info">
                        {" "}
                      </Button>
                    </label>{" "}
                    <br /> <br />
                    <label className="second-Click">
                      Choose Your <br /> <br /> Mascot: Click one
                      <br />
                      <br /> <br /> <Emoji number={4} />
                    </label>
                  </div>
                </Card.Body>
              </Card>
            )}
          </CardDeck>
          <br />
          <div onClick={changeTeam}>
            <Button
              variant="transparent"
              className="first-Click1 outlinerz"
              onClick={handleTrue}
            >
              Continue To The Jeopardy
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
const mapStateToProps = (store) => {
  return { points: store };
};

export default connect(mapStateToProps)(Chop);
