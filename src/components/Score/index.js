import React from "react";
import { connect } from "react-redux";
import { Col, Row } from "antd";
import style from "./style.module.scss";

const mapStateToProps = ({ user, active_session }) => ({
  user,
  active_session,
});

const Score = ({ score = 0 }) => {
  return (
    <Row justify="center" style={{ padding: 10 }}>
      <Col span={4} flex="auto" className={style.score}>
        {score}
      </Col>
    </Row>
  );
};

export default connect(mapStateToProps)(Score);
