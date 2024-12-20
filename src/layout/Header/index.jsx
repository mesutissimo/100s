import { Col, Row } from "antd";
import React from "react";
import style from "../style.module.scss";
import LogoutButton from "../../components/Buttons/LogoutButton";

const Header = () => {
  return (
    <div className={style.header}>
      <Row>
        <Col span={24} style={{ textAlign: "right" }}>
          <LogoutButton />
        </Col>
      </Row>
    </div>
  );
};

export default Header;
