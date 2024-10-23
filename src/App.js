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
        }}
      >
        <h1>100s</h1>
        <button onClick={openPropertiesPage}>=</button>
      </header>

      <ScoreComponent />

      <Grid />
    </div>
  );
}

export default App;
