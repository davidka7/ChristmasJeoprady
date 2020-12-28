import React, { useState } from "react";
import Modals from "./Modals";
import SpecialModal from "./SpecialModal";
import SpecialModal2 from "./SpecialModal2";
import SpecialModal34 from "./SpecialModal34";
import SpecialModal5 from "./SpecialModal5";

import Emoji from "./Emoji";
import Modals1 from "./Modals1";
import Winner from "./Winner";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Chop.css";

import data1 from "./1.json";
import data2 from "./2.json";
import data3 from "./3.json";
import data4 from "./4.json";
import data5 from "./5.json";
import data6 from "./6.json";
import category from "./category.json";
import last from "./last.json";
import { c1 } from "./actions/dragger";
import useSound from "use-sound";

import best from "./best.mp3";
import among from "./among.mp3";
function Chop({ points, c1 }) {
  const [play] = useSound(best);
  const [play1, { stop }] = useSound(among, { volume: 0.6 });

  const [firstCheck, setFirstCheck] = useState(true);
  const [firstCheck1, setFirstCheck1] = useState(true);
  const [trueOrFalse, setTrueOrFalse] = useState(false);
  const [team1, setTeam1] = useState("");
  const [TeamPlaying, setTeamPlaying] = useState(" ");
  const [team2, setTeam2] = useState("");
  const [team3, setTeam3] = useState("");
  const [team4, setTeam4] = useState("");
  const [switch1, setSwitch1] = useState(0);

  const [cursor, setCursor] = useState("");

  const changeTeam = () => {
    if (TeamPlaying == team1) {
      setTeamPlaying(team2);
      setCursor(points.animal2);
      setSwitch1(1);
    } else if (TeamPlaying == team2) {
      setTeamPlaying(team3);
      setCursor(points.animal3);
      setSwitch1(2);
    } else if (TeamPlaying == team3) {
      setTeamPlaying(team4);
      setCursor(points.animal4);
      setSwitch1(3);
    } else if (TeamPlaying == team4) {
      setTeamPlaying(team1);
      setCursor(points.animal1);
      setSwitch1(0);
    } else {
      setSwitch1(0);
      setTeamPlaying(team1);
      setCursor(points.animal1);
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

  console.log(points.checker);
  if (points.checker == 30 && firstCheck == true) {
    setFirstCheck(false);
  }
  if (points.checker == 34 && firstCheck1 == true) {
    setFirstCheck1(false);
  }
  const handleSkip = () => {
    c1();
    changeTeam();
  };
  const handleMusic = () => {
    play();
  };
  // const sound = new BeatBeat(new AudioContext(), "best.mp3");
  // sound.load();
  return (
    <div className="full-size">
      {/* {sound.play(() =>
        console.log("This callback will execute at every beat of the song")
      )} */}
      {firstCheck ? (
        <div>
          {trueOrFalse ? (
            <div>
              <div className={`break-cursor-${cursor}`}>
                <br />
                <CardDeck className="paddings max-height">
                  {" "}
                  <Card bg={"transparent"} className={`lifelight`}>
                    <Card.Title className="second-Click ">
                      {" "}
                      Team {team1}
                    </Card.Title>
                    <Card.Title className="second-Click">
                      {" "}
                      Points: {points.reducers1}
                    </Card.Title>
                  </Card>
                  <Card bg={"transparent"} className={`lifelight`}>
                    <Card.Title className="second-Click">
                      Team {team2}
                    </Card.Title>
                    <Card.Title className="second-Click">
                      {" "}
                      Points: {points.reducers2}
                    </Card.Title>
                  </Card>
                  <Card bg={"transparent"} className={`lifelight`}>
                    <Card.Title className="second-Click">
                      Team {team3}
                    </Card.Title>
                    <Card.Title className="second-Click">
                      {" "}
                      Points: {points.reducers3}
                    </Card.Title>
                  </Card>
                  <Card bg={"transparent"} className={`lifelight`}>
                    <Card.Title className="second-Click">
                      Team {team4}
                    </Card.Title>
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
                      <SpecialModal34
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
                      <SpecialModal34
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
                      <SpecialModal34
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
                      <SpecialModal34
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
                      <SpecialModal34
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
                  {data6.map((data) => {
                    return (
                      <SpecialModal34
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
                  <SpecialModal5
                    changeTeam={changeTeam}
                    team1={team1}
                    team2={team2}
                    team3={team3}
                    team4={team4}
                    TeamPlaying={TeamPlaying}
                    key
                  />
                </CardDeck>
              </div>
            </div>
          ) : (
            <div className="first-Click">
              <div class="bubbles  first-Click">
                {" "}
                <h1 onClick={handleMusic}>Name Your Teams</h1>
              </div>

              <CardDeck className="paddings">
                <Card
                  className={`special-corner lifelights`}
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
                        Choose Your <br /> Mascot: Click one
                        <Emoji number={1} />
                      </label>
                    </div>
                  </Card.Body>
                </Card>

                <Card
                  className={`special-corner lifelights`}
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
                        Choose Your <br /> Mascot: Click one
                        <Emoji number={2} />
                      </label>
                    </div>
                  </Card.Body>
                </Card>

                <Card
                  className={`special-corner lifelights`}
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
                        Choose Your <br /> Mascot: Click one
                        <Emoji number={3} />
                      </label>
                    </div>
                  </Card.Body>
                </Card>

                <Card
                  className={`special-corner lifelights`}
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
                        Choose Your <br /> Mascot: Click one
                        <Emoji number={4} />
                      </label>
                    </div>
                  </Card.Body>
                </Card>
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
      ) : (
        <div>
          {" "}
          {firstCheck1 ? (
            <div class="bubbles  first-Click">
              {" "}
              <h1>
                Risk it???
                <br /> Either you add a 1,200 <br />
                or lose 800, up to you.
              </h1>
              <Card bg="transparent" className="special-font">
                <span> {`Team ${TeamPlaying} Turn`}</span>
              </Card>
              <br />
              <h1>
                Take It
                <div className="Winner">
                  <Modals
                    changeTeam={changeTeam}
                    team1={team1}
                    team2={team2}
                    team3={team3}
                    team4={team4}
                    TeamPlaying={TeamPlaying}
                    key
                    data={last[switch1]}
                  />
                </div>
              </h1>
              <br />
              <Button
                onMouseEnter={() => {
                  play1();
                }}
                onMouseLeave={() => {
                  stop();
                }}
                onClick={handleSkip}
              >
                <h1>Skip It</h1>
              </Button>
              <br />
              <br />
            </div>
          ) : (
            <div>
              <CardDeck className="paddings max-height">
                {" "}
                <Card bg={"transparent"} className={`lifelights`}>
                  <Card.Title className="second-Click ">
                    {" "}
                    Team {team1}
                  </Card.Title>
                  <Card.Title className="second-Click">
                    {" "}
                    Points: {points.reducers1}
                  </Card.Title>
                </Card>
                <Card bg={"transparent"} className={`lifelights`}>
                  <Card.Title className="second-Click">Team {team2}</Card.Title>
                  <Card.Title className="second-Click">
                    {" "}
                    Points: {points.reducers2}
                  </Card.Title>
                </Card>
                <Card bg={"transparent"} className={`lifelights`}>
                  <Card.Title className="second-Click">Team {team3}</Card.Title>
                  <Card.Title className="second-Click">
                    {" "}
                    Points: {points.reducers3}
                  </Card.Title>
                </Card>
                <Card bg={"transparent"} className={`lifelights`}>
                  <Card.Title className="second-Click">Team {team4}</Card.Title>
                  <Card.Title className="second-Click">
                    {" "}
                    Points: {points.reducers4}
                  </Card.Title>
                </Card>
              </CardDeck>

              <br />
              <br />
              <div className="Winner">
                {points.reducers1 > points.reducers2 &&
                points.reducers1 > points.reducers3 &&
                points.reducers1 > points.reducers4 ? (
                  <div className="glower">
                    <h1 className="first-Click"> Team {team1}</h1>
                    <Winner animal={points.animal1} />
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="Winner">
                {points.reducers2 > points.reducers4 &&
                points.reducers2 > points.reducers1 &&
                points.reducers2 > points.reducers3 ? (
                  <div className="glower">
                    <h1 className="first-Click"> Team {team2}</h1>
                    <Winner animal={points.animal2} />
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="Winner">
                {points.reducers3 > points.reducers4 &&
                points.reducers3 > points.reducers1 &&
                points.reducers3 > points.reducers2 ? (
                  <div className="glower">
                    <h1 className="first-Click "> Team {team3}</h1>

                    <Winner animal={points.animal3} />
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="Winner">
                {points.reducers4 > points.reducers1 &&
                points.reducers4 > points.reducers2 &&
                points.reducers4 > points.reducers3 ? (
                  <div className="glower">
                    <h1 className="first-Click"> Team {team4}</h1>

                    <Winner animal={points.animal4} />
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          )}{" "}
        </div>
      )}
    </div>
  );
}
const mapStateToProps = (store) => {
  return { points: store };
};
const mapDispatchToProps = (dispatch) => {
  return {
    c1: () => c1(dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Chop);
