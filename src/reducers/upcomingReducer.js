const init = {
  upcoming: {},
  query: "",
  isLoading: true,
};

const upcomingReducer = (state = init, action) => {
  switch (action.type) {
    case "UPCOMING_GAMES":
      return {
        ...state,
        upcoming: action.payload.upcoming,
        query: action.payload.query,
        isLoading: false,
      };
    case "LOADING_UPCOMING_GAMES":
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};

export default upcomingReducer;
