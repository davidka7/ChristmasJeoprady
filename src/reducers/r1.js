const animal1 = "";

export const r1 = (state = animal1, action) => {
  switch (action.type) {
    case "animal1":
      state = action.payload;
      return state;
    default:
      return state;
  }
};
