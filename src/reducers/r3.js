const animal3 = "";

export const r3 = (state = animal3, action) => {
  switch (action.type) {
    case "animal3":
      state = action.payload;
      return state;
    default:
      return state;
  }
};
