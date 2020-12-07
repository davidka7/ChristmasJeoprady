import React from "react";

import Card from "react-bootstrap/Card";

import "./Modals.css";

function Modals1(props) {
  return (
    <>
      <Card className={`outliners11 z$1-size`}>
        <Card.Title className="fonty">{props.data.category}</Card.Title>
      </Card>
    </>
  );
}

export default Modals1;
