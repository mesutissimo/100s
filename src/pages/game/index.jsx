import React from "react";
import ScoreComponent from "../../components/Score";
import Grid from "../../Grid";
import { Link, useNavigate } from "react-router-dom";

const GamePage = () => {
  const navigate = useNavigate();
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
      >
        <button
          onClick={() => navigate(0)}
          style={{
            width: 150,
            height: 50,

            border: "none",
            outline: "1px solid darkgray",
            borderRadius: 5,
          }}
        >
          Start Again
        </button>
      </div>
    </>
  );
};

export default GamePage;
