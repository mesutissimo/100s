import React from "react";
import ScoreComponent from "../../components/Score";
import Grid from "../../Grid";

const GamePage = () => {
  return (
    <>
      <ScoreComponent />
      <div style={{ margin: "25px 0px", textAlign: "center" }}>
        <Grid />
      </div>
      <div
        style={{
          margin: 25,
          textAlign: "center",
          fontFamily: "monospace",
          fontSize: "2em",
        }}
      ></div>
    </>
  );
};

export default GamePage;
