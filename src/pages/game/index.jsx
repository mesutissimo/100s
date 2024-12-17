import React, { useEffect } from "react";
import ScoreComponent from "../../components/Score";
import Grid from "../../Grid";
import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = ({ active_session }) => ({ active_session });

const GamePage = ({ active_session }) => {
  console.log(active_session);
  const navigate = useNavigate();
  const { sessionId } = useParams();

  useEffect(() => {
    console.log(sessionId);
  }, [sessionId]);

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

export default connect(mapStateToProps)(GamePage);
