const animal4 = "";

export const r4 = (state = animal4, action) => {
  switch (action.type) {
    case "animal4":
      state = action.payload;
      return state;
    default:
      return state;
  }
};
