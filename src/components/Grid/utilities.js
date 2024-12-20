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

export { createGrid };
