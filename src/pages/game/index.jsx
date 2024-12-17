import React, { useEffect, useState } from "react";

import Grid from "../../Grid";
import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Col, Modal, Row } from "antd";
import { opponentData } from "../../services/utilites";
import style from "../../assets/style.module.scss";

const mapStateToProps = ({ active_session, user }) => ({
  active_session,
  user,
});

const GamePage = ({ active_session, user, dispatch }) => {
  const navigate = useNavigate();
  const { sessionId } = useParams();
  const opponent = opponentData(user.id, active_session);
  const [modal, contextHolder] = Modal.useModal();

  useEffect(() => {
    dispatch({
      type: "active_session/GET_SESSION",
      payload: { id: sessionId },
    });
  }, [sessionId]);

  useEffect(() => {
    if (active_session.waitingOpponent === false) {
      modal.info({
        content: opponentData(user.id, active_session),
        centered: true,
        footer: null,
        icon: null,
        closable: false,
        styles: {
          content: {
            backgroundColor: "transparent",
            border: 0,
            boxShadow: "none",
            color: "red",
          },
        },
      });
    }
  }, [active_session.waitingOpponent]);

  return (
    <>
      {contextHolder}
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
          onClick={() => console.log()}
        >
          CANCEL
        </button>
      </Modal>
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
    </>
  );
};

export default connect(mapStateToProps)(GamePage);
