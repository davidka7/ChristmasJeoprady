import React from "react";

import useSound from "use-sound";
import soundUrl from "./yes.mp3";
import "./Chop.css";
function Sounder() {
  const [play, { stop }] = useSound(soundUrl, { volume: 0.5 });

  return (
    <div
      className="first-Click glower"
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

export default Sounder;
