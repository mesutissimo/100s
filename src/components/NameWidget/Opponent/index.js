import React from "react";
import { connect } from "react-redux";
import { Col, Row } from "antd";
import { opponentData } from "../../../services/utilites";
import style from "../style.module.scss";
const mapStateToProps = ({ user, active_session }) => ({
  user,
  active_session,
});

const OpponentNameWidget = ({ user, active_session }) => {
  const opponent = opponentData(user.id, active_session);
  return (
    <Row justify="space-between" style={{ padding: 10 }}>
      <Col flex="100px" className={style.opponentNameInitial}>
        {opponent && opponent.charAt(0).toLocaleUpperCase()}
      </Col>
      <Col flex="auto" className={style.opponentName}>
        {opponent || "Düşman"}
      </Col>
    </Row>
  );
};

export default connect(mapStateToProps)(OpponentNameWidget);
