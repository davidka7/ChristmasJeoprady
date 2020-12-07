const TEAM1_STATE = 0;

export const reducer1 = (state = TEAM1_STATE, action) => {
  switch (action.type) {
    case "team1":
      state = state + action.payload;
      return state;
    case "allTeam":
      return state;
    default:
      return state;
  }
};
