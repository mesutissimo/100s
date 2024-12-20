import React from "react";

import { Button, Col, Row } from "antd";
import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import { joinToSession } from "../../../../services/session";
import { connect } from "react-redux";

const GameItem = ({ item, user }) => {
  const navigate = useNavigate();
  const handleJoin = (sessionId) => {
    joinToSession(sessionId, {
      player: user.id,
    });
    navigate("/game/" + sessionId);
  };

  return (
    <Row justify="space-between" style={{ padding: 10 }}>
      <Col flex="auto" className={style.gameSessionName}>
        {item.created_by}
      </Col>
      <Col flex="auto">
        <Button
          size="large"
          block
          onClick={() => handleJoin(item.id)}
          className={style.joinButton}
        >
          Katıl
        </Button>
      </Col>
    </Row>
  );
};
const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps)(GameItem);
