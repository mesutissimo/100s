import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { Button, List } from "antd";
import {
  getActiveGameSessions,
  updateSession,
} from "../../redux/services/game_sessions";

const LobbyPage = () => {
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
    updateSession(sessionId, { status: "playing" });
    // navigate("/game/" + sessionId);
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

export default LobbyPage;
