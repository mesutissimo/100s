import React from "react";
import { connect } from "react-redux";

const mapStateToProps = ({ gameplay, settings }) => ({ gameplay, settings });

const ScoreComponent = ({ gameplay: { moves }, settings, dispatch }) => {
  return (
    <div style={{ padding: 15, backgroundColor: "lightgray" }}>
      <h1 style={{ margin: 0, textAlign: "right", fontFamily: "monospace" }}>
        Score: {moves.length}
      </h1>
    </div>
  );
};

export default connect(mapStateToProps)(ScoreComponent);
