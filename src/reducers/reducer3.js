const TEAM3_STATE = 0;
export const reducer3 = (state = TEAM3_STATE, action) => {
  switch (action.type) {
    case "team3":
      state = state + action.payload;
      return state;
    case "allTeam":
      return state;
    default:
      return state;
  }
};
