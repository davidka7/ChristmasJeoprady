import React from "react";

import useSound from "use-sound";
import soundUrl from "./jj.mp3";
import "./Chop.css";
function Sounder2() {
  const [play, { stop }] = useSound(soundUrl, { volume: 0.5 });

  return (
    <div
      className="first-Click3"
      onMouseEnter={() => {
        play();
      }}
      onMouseLeave={() => {
        stop();
      }}
    >
      ▶
    </div>
  );
}

export default Sounder2;
