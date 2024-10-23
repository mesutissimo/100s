import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Welcome to 100s</h1>
      <Link to="/game">
        <button
          style={{
            width: 250,
            height: 75,
            fontSize: "1.5em",
            border: "none",
            outline: "1px solid darkgray",
            borderRadius: 5,
          }}
        >
          Start Game
        </button>
      </Link>
    </>
  );
};

export default Home;
