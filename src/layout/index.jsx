import React from "react";
import GamePage from "../pages/game";

const Layout = () => {
  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <header
        style={{
          height: 50,
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
      <GamePage />
    </div>
  );
};

export default Layout;
