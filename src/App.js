import "./App.css";
import Grid from "./Grid";
import ScoreComponent from "./components/Score";

function App() {
  const openPropertiesPage = () => {};
  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <header
        style={{
          height: "5vh",
          alignContent: "center",
          backgroundColor: "lightgreen",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h1>100s</h1>
        <button
          style={{
            width: 80,
            alignSelf: "right",
            textAlign: "center",
            border: 0,
          }}
          onClick={openPropertiesPage}
        >
          <i
            className="bi bi-three-dots-vertical"
            style={{ fontSize: "2em" }}
          ></i>
        </button>
      </header>

      <ScoreComponent />
      <div style={{ margin: 25, textAlign: "center" }}>
        <Grid />
      </div>
      <div
        style={{
          margin: 25,
          textAlign: "center",
          fontFamily: "monospace",
          fontSize: "2em",
        }}
      ></div>
    </div>
  );
}

export default App;
