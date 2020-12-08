const ADD = 0;

export const c1 = (state = ADD, action) => {
  switch (action.type) {
    case "ADD":
      state = state + 1;
      return state;
    default:
      return state;
  }
};
