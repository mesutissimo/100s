import React, { useEffect } from "react";
import ScoreComponent from "../../components/Score";
import Grid from "../../Grid";
import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Col, Row } from "antd";
import { opponentData } from "../../services/utilites";

const mapStateToProps = ({ active_session, user }) => ({
  active_session,
  user,
});

const GamePage = ({ active_session, user, dispatch }) => {
  const navigate = useNavigate();
  const { sessionId } = useParams();
  const opponent = opponentData(user.id, active_session);

  useEffect(() => {
    dispatch({
      type: "active_session/GET_SESSION",
      payload: { id: sessionId },
    });
  }, [sessionId]);

  return active_session.waitingOpponent ? (
    "Rakip bekleniyor"
  ) : (
    <Row>
      <Col span={24}>
        <h3>{opponent || "Düşman"}</h3>
      </Col>
      <Col span={24}>
        <Grid />
      </Col>
      <Col span={24}>
        <h3>{user.id || "Ben"}</h3>
        {active_session.turn === user.id && "Sıra sende !"}
      </Col>
    </Row>
  );
};

export default connect(mapStateToProps)(GamePage);
