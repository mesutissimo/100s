import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
const HEADER_HEIGHT = 50;

const Layout = () => {
  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <div
        style={{
          backgroundColor: "darkgray",
          position: "absolute",
          top: HEADER_HEIGHT,
          bottom: 0,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflowY: "scroll",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
