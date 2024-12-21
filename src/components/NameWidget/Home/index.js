import React from "react";
import { connect } from "react-redux";
import { Col, Row } from "antd";
import style from "../style.module.scss";

const mapStateToProps = ({ user, active_session }) => ({
  user,
  active_session,
});

const HomeNameWidget = ({ user, active_session }) => {
  const bordered = user.id === active_session.turn;
  return (
    <Row justify="space-between" style={{ padding: 10 }}>
      <Col flex="100px" className={style.homeNameInitial}>
        {user.id && user.email.charAt(0).toLocaleUpperCase()}
      </Col>
      <Col
        flex="auto"
        className={style.homeName}
        style={{
          outline: bordered && "1px solid blue",
        }}
      >
        {user.email}
      </Col>
    </Row>
  );
};

export default connect(mapStateToProps)(HomeNameWidget);
