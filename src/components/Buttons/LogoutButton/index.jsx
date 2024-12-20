import { LogoutOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const LogoutButton = ({ dispatch }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch({
      type: "user/LOGOUT",
    });
    navigate("/");
  };
  return (
    <Button
      size="large"
      type="text"
      icon={<LogoutOutlined onClick={handleLogout} />}
    />
  );
};
const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps)(LogoutButton);
