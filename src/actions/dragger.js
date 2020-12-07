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
