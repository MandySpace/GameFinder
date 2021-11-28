const init = {
  upcoming: {},
  query: "",
};

const upcomingReducer = (state = init, action) => {
  switch (action.type) {
    case "UPCOMING_GAMES":
      return {
        ...state,
        upcoming: action.payload.upcoming,
        query: action.payload.query,
      };
    default:
      return { ...state };
  }
};

export default upcomingReducer;
