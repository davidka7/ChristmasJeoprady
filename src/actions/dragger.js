export const reducer1 = (points, dispatch) => {
  console.log("hit reducer", points);
  dispatch({
    type: "team1",
    payload: points,
  });
};

export const reducer2 = (points, dispatch) => {
  dispatch({
    type: "team2",
    payload: points,
  });
};
export const reducer3 = (points, dispatch) => {
  dispatch({
    type: "team3",
    payload: points,
  });
};
export const reducer4 = (points, dispatch) => {
  dispatch({
    type: "team4",
    payload: points,
  });
};

export const r1 = (animal, dispatch) => {
  dispatch({
    type: "animal1",
    payload: animal,
  });
};

export const r2 = (animal, dispatch) => {
  dispatch({
    type: "animal2",
    payload: animal,
  });
};
export const r3 = (animal, dispatch) => {
  dispatch({
    type: "animal3",
    payload: animal,
  });
};
export const r4 = (animal, dispatch) => {
  dispatch({
    type: "animal4",
    payload: animal,
  });
};
export const c1 = (dispatch) => {
  dispatch({
    type: "ADD",
  });
};
