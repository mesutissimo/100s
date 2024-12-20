import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { Col, Divider, List, Row } from "antd";
import { getActiveGameSessions } from "../../services/session";
import { connect } from "react-redux";
import GameItem from "./components/GameItem";

const mapStateToProps = ({ user }) => ({ user });
const LobbyPage = ({ user }) => {
  const navigate = useNavigate();
  const [sessions, setSessions] = useState([]);

  const getActiveGames = async () => {
    const activeSessions = await getActiveGameSessions();
    setSessions(activeSessions);
  };
  useEffect(() => {
    getActiveGames();
  }, []);

  return (
    <Row
      style={{
        width: "100vw",
        height: "100vh",
        padding: "20px",
      }}
    >
      <Col span={24} style={{ textAlign: "center" }}>
        <h1>Oyun Listesi</h1>
      </Col>
      <Divider />
      <Col
        span={24}
        style={{
          width: "100%",
          height: "80vh",
          overflowY: "scroll",
        }}
      >
        <List
          dataSource={sessions}
          renderItem={(item) => <GameItem item={item} />}
        />
      </Col>
    </Row>
  );
};

export default connect(mapStateToProps)(LobbyPage);
