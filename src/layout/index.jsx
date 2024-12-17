import React from "react";
import { Outlet } from "react-router-dom";

const HEADER_HEIGHT = 0;

const Layout = () => {
  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          backgroundColor: "lightgray",
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
