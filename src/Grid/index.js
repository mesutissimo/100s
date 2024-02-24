import style from "./style.module.css";
import { createGrid } from "./utilities";
import { calculateAvailability, saveLastGame } from "../gameplay";
import { connect } from "react-redux";

const buttonStyle = {
	height: 40,
	width: 40,
	border: "0.3px solid gray",
	borderRadius: 3,
	textAlign: "center",
};
const mapStateToProps = ({ gameplay, settings }) => ({ gameplay, settings });

const Grid = ({ gameplay: { moves, available }, settings, dispatch }) => {
	const isGameOver = moves.length > 0 && available.length === 0;

	const grid = createGrid();

	const setAvailableButtons = (id) => {
		const available = calculateAvailability(id, moves);

		dispatch({ type: "gameplay/SET_STATE", payload: { available } });
	};

	const resetGame = () => {
		saveLastGame({
			moves,
			score: moves.length,
		});

		dispatch({
			type: "gameplay/SET_STATE",
			payload: { available: [], moves: [] },
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
			dispatch({
				type: "gameplay/SET_STATE",
				payload: { moves: [...moves, key] },
			});

			setAvailableButtons(key);
		} else {
			if (available.includes(key) && !moves.includes(key)) {
				dispatch({
					type: "gameplay/SET_STATE",
					payload: { moves: [...moves, key] },
				});
				setAvailableButtons(key);
			}
		}
	};

	return (
		<div style={{ display: "inline-block" }}>
			<h2>Score: {moves.length}</h2>
			{isGameOver && "GAME OVER"}
			<table>
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
										moves.findIndex(
											(move) => move === key
										) + 1
									) : (
										<button
											id={key}
											className={style.buttonStyle}
											onClick={() => makeMove(key)}
											style={{
												...buttonStyle,
												...onHoverStyles(key),
												display: moves.includes(key)
													? "none"
													: undefined,
											}}
											disabled={moves.includes(key)}
										/>
									)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			{isGameOver && <button onClick={resetGame}>Play Again</button>}
		</div>
	);
};

export default connect(mapStateToProps)(Grid);
