const TEAM4_STATE = 0;
export const reducer4 = (state = TEAM4_STATE, action) => {
  switch (action.type) {
    case "team4":
      state = state + action.payload;
      return state;
    case "allTeam":
      return state;
    default:
      return state;
  }
};
