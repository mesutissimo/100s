const saveLastGame = ({ moves, score }) => {
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
export { saveLastGame, calculateAvailability };
