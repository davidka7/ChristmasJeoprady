const TEAM2_STATE = 0;

export const reducer2 = (state = TEAM2_STATE, action) => {
  switch (action.type) {
    case "team2":
      state = state + action.payload;
      return state;
    case "allTeam":
      return state;
    default:
      return state;
  }
};
