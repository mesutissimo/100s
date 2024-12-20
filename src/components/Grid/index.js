import style from "./style.module.css";
import { createGrid } from "./utilities";
import { calculateAvailability, saveLastGame } from "../../gameplay";
import { connect } from "react-redux";
import { makeMove as move, setAvailableMoves } from "../../services/gameplay";

const buttonStyle = {
  height: 40,
  width: 40,
  border: "0.3px solid gray",
  borderRadius: 5,
  textAlign: "center",
};
const mapStateToProps = ({ active_session, settings, user }) => ({
  active_session,
  settings,
  user,
});

const Grid = ({ active_session, settings, user, dispatch }) => {
  const { sessionId, moves, available } = active_session;
  const isGameOver = moves.length > 0 && available.length === 0;

  const grid = createGrid();

  const setAvailableButtons = (id, moves) => {
    const available = calculateAvailability(id, moves);
    setAvailableMoves(user.id, sessionId, available);
  };

  const resetGame = () => {
    saveLastGame({
      moves,
      score: moves.length,
    });

    dispatch({
      type: "gameplay/RESET_GAME",
    });
  };

  const onHoverStyles = (key) => {
    if (available.includes(key) && !moves.includes(key)) {
      return {
        backgroundColor: "skyblue",
      };
    }
  };

  const makeMove = (key) => {
    if (moves.length === 0) {
      move(user.id, sessionId, key);
      setAvailableButtons(key, [...moves, key]);
    } else {
      if (available.includes(key) && !moves.includes(key)) {
        const newMoves = [...moves, key];
        move(user.id, sessionId, key);
        setAvailableButtons(key, newMoves);
      }
    }
  };
  return (
    <table style={{ textAlign: "center" }}>
      <tbody>
        {grid.map((row, i) => (
          <tr key={"r" + i} style={{ minHeight: 40 }}>
            {row.map((key) => (
              <td
                key={key}
                style={{
                  width: 40,
                  height: 40,
                }}
              >
                {moves.includes(key) ? (
                  moves.findIndex((move) => move === key) + 1
                ) : (
                  <button
                    id={key}
                    className={style.buttonStyle}
                    onClick={() => makeMove(key)}
                    style={{
                      ...buttonStyle,
                      ...onHoverStyles(key),
                      display: moves.includes(key) ? "none" : undefined,
                    }}
                    disabled={
                      moves.includes(key) || active_session.turn !== user.id
                    }
                  />
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default connect(mapStateToProps)(Grid);
