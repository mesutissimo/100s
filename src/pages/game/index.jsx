import React, { useEffect } from "react";

import Grid from "../../components/Grid";
import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Col, Modal, Row } from "antd";

import style from "../../assets/style.module.scss";
import OpponentNameWidget from "../../components/NameWidget/Opponent";
import HomeNameWidget from "../../components/NameWidget/Home";
import Score from "../../components/Score";
import { deleteSession } from "../../services/session";
import { act } from "react";

const mapStateToProps = ({ active_session, user }) => ({
  active_session,
  user,
});

const GamePage = ({ active_session, user, dispatch }) => {
  const navigate = useNavigate();
  const { sessionId } = useParams();

  useEffect(() => {
    dispatch({
      type: "active_session/GET_SESSION",
      payload: { id: sessionId },
    });
  }, [sessionId]);

  const handleCloseSession = () => {
    navigate("/");

    deleteSession(active_session.sessionId);
  };

  return (
    <>
      <Modal
        centered
        style={{ textAlign: "center" }}
        title={<h1>Waiting for player... </h1>}
        closable={false}
        open={active_session.waitingOpponent}
        footer={null}
      >
        <button
          className={style.redBtn}
          style={{ width: "50%" }}
          onClick={handleCloseSession}
        >
          CANCEL
        </button>
      </Modal>
      <Row>
        <Col span={24}>
          <OpponentNameWidget />
        </Col>
        <Col span={24}>
          <Score score={25} />
        </Col>
        <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
          <Grid />
        </Col>
        <Col span={24}>
          <Score score={23} />
        </Col>
        <Col span={24}>
          <HomeNameWidget />
        </Col>
      </Row>
    </>
  );
};

export default connect(mapStateToProps)(GamePage);
