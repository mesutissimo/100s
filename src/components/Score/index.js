import React from "react";
import { connect } from "react-redux";

const mapStateToProps = ({ active_session, settings }) => ({
  active_session,
  settings,
});

const ScoreComponent = ({ active_session: { moves }, settings, dispatch }) => {
  return (
    <div style={{ padding: 15, backgroundColor: "lightgray" }}>
      <h1 style={{ margin: 0, textAlign: "right", fontFamily: "monospace" }}>
        Score: {moves.length}
      </h1>
    </div>
  );
};

export default connect(mapStateToProps)(ScoreComponent);
