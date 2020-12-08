import React, { useState } from "react";
import { connect } from "react-redux";
import "./emoji.css";
import { r1, r2, r3, r4 } from "./actions/dragger";
function Emoji({ r1, r2, r3, r4, number }) {
  const [checker, setChecker] = useState(true);
  const [animal, setAnimal] = useState("");
  const animal1 = () => {
    setAnimal("🐶");
    setChecker(false);
  };
  const animal2 = () => {
    setAnimal("🐷");
    setChecker(false);
    handleSubmitter();
  };
  const animal3 = () => {
    setAnimal("🐸");
    setChecker(false);
    handleSubmitter();
  };
  const animal4 = () => {
    setAnimal("🐹");
    setChecker(false);
    handleSubmitter();
  };
  const animal5 = () => {
    setAnimal("🐵");
    setChecker(false);
    handleSubmitter();
  };
  const animal6 = () => {
    setAnimal("🐰");
    setChecker(false);
    handleSubmitter();
  };
  const animal7 = () => {
    setAnimal("🐭");
    setChecker(false);
    handleSubmitter();
  };
  const animal8 = () => {
    setAnimal("🐮");
    setChecker(false);
    handleSubmitter();
  };
  const animal9 = () => {
    setAnimal("🐨");
    setChecker(false);
    handleSubmitter();
  };

  const handleSubmitter = () => {
    if (number == 1) {
      r1(animal);
    } else if (number == 2) {
      r2(animal);
    } else if (number == 3) {
      r3(animal);
    } else if (number == 4) {
      r4(animal);
    }
  };

  // "https://freesound.org/data/previews/269/269026_5094889-lq.mp3"

  // "https://freesound.org/data/previews/511/511484_6890478-lq.mp3"

  return (
    <div>
      {checker ? (
        <div className="container">
          <button onClick={animal1} className="back">
            🎁
          </button>{" "}
          <button onClick={animal2} className="back">
            🎁
          </button>{" "}
          <button onClick={animal3} className="back">
            🎁
          </button>
          <br /> <br />
          <button onClick={animal4} className="back">
            🎁
          </button>{" "}
          <button onClick={animal5} className="back">
            🎁
          </button>{" "}
          <button onClick={animal6} className="back">
            🎁
          </button>{" "}
          <br />
          <br />
          <button onClick={animal7} className="back">
            🎁
          </button>
          <button onClick={animal8} className="back">
            🎁
          </button>
          <button onClick={animal9} className="back">
            🎁
          </button>
        </div>
      ) : (
        <div classsName="container">{animal}</div>
      )}
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    r1: (animal) => r1(animal, dispatch),
    r2: (animal) => r2(animal, dispatch),
    r3: (animal) => r3(animal, dispatch),
    r4: (animal) => r4(animal, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Emoji);
