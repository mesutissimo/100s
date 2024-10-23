import React from "react";
import { Outlet } from "react-router-dom";

const HEADER_HEIGHT = 50;

const Layout = () => {
  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <header
        style={{
          height: HEADER_HEIGHT,
          alignContent: "center",
          backgroundColor: "darkgray",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ margin: 0 }}>100s</h1>
        <button
          style={{
            width: 80,
            alignSelf: "right",
            textAlign: "center",
            border: 0,
          }}
          onClick={() => {}}
        >
          <i
            className="bi bi-three-dots-vertical"
            style={{ fontSize: "2em" }}
          ></i>
        </button>
      </header>
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
