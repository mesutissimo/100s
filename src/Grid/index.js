import { useState } from "react";
import style from "./style.module.css";

const createGrid = () => {
	let row = [];
	let grid = [];
	for (let i = 1; i <= 100; i++) {
		row.push(i);
		if (i % 10 === 0) {
			grid.push(row);
			row = [];
		}
	}
	return grid;
};

const buttonStyle = {
	height: 40,
	width: 40,
	border: "0.3px solid gray",
	borderRadius: 3,
	textAlign: "center",
};

const calculateAvailability = (id, moves) => {
	const o1 =
		id % 10 > 8 || id % 10 === 0 || (id + 2) % 10 === 0 ? null : id + 3;
	const o2 =
		(id % 10 < 3 && id % 10 !== 0) || (id - 3) % 10 === 0 ? null : id - 3;
	const o3 = id + 30;
	const o4 = id - 30;
	const p1 = (id - 1) % 10 === 0 || (id - 2) % 10 === 0 ? null : id - 22;
	const p2 = id % 10 === 0 || (id + 1) % 10 === 0 ? null : id - 18;
	const p3 = (id - 1) % 10 === 0 || (id - 2) % 10 === 0 ? null : id + 18;
	const p4 = id % 10 === 0 || (id + 1) % 10 === 0 ? null : id + 22;

	const availableIds = [o1, o2, o3, o4, p1, p2, p3, p4].filter(
		(a) => a !== null && a > 0 && a < 101 && !moves.includes(a)
	);

	return availableIds;
};

const saveLastGame = ({ moves, score }) => {
  console.log(moves,score)
	const scoreList = JSON.parse(localStorage.getItem("scoreList"));
	if (!scoreList) {
		localStorage.setItem("scoreList", JSON.stringify([{ moves, score }]));
	} else {
		localStorage.setItem(
			"scoreList",
			JSON.stringify([...scoreList, { moves, score }])
		);
	}
};

const Grid = () => {

	const [available, setAvailable] = useState([]);
	const [moves, setMoves] = useState([]);
	const isGameOver = moves.length > 0 && available.length === 0;
	const grid = createGrid();

	const setAvailableButtons = (id) => {
		const availableIds = calculateAvailability(id, moves);
		setAvailable(availableIds);
	};

	const resetGame = () => {
		saveLastGame({
			moves,
			score: moves.length,
		});

		setAvailable([]);
		setMoves([]);
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
			setMoves([...moves, key]);
			setAvailableButtons(key);
		} else {
			if (available.includes(key) && !moves.includes(key)) {
				setMoves([...moves, key]);
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

export default Grid;
