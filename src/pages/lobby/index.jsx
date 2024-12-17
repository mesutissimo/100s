import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { Button, List } from "antd";
import {
  getActiveGameSessions,
  joinToSession,
  updateSession,
} from "../../services/game_sessions";
import { connect } from "react-redux";

const mapStateToProps = ({ user }) => ({ user });
const LobbyPage = ({ user }) => {
  console.log(user);
  const navigate = useNavigate();
  const [sessions, setSessions] = useState([]);

  const getActiveGames = async () => {
    const activeSessions = await getActiveGameSessions();
    setSessions(activeSessions);
  };
  useEffect(() => {
    getActiveGames();
  }, []);

  const handleJoin = (sessionId) => {
    joinToSession(sessionId, {
      player: user.id,
    });
    navigate("/game/" + sessionId);
  };

  return (
    <List
      dataSource={sessions}
      renderItem={(item) => (
        <List.Item>
          {item.created_by}{" "}
          <Button onClick={() => handleJoin(item.id)}>Katıl</Button>
        </List.Item>
      )}
    />
  );
};

export default connect(mapStateToProps)(LobbyPage);
