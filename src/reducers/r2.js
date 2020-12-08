const animal2 = "";

export const r2 = (state = animal2, action) => {
  switch (action.type) {
    case "animal2":
      state = action.payload;
      return state;
    default:
      return state;
  }
};
