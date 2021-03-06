const initState = {
  popular: [],
  latest: [],
  upcoming: [],
  isLoading: true,
};

const gamesreducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        popular: action.payload.popular,
        latest: action.payload.latest,
        upcoming: action.payload.upcoming,
        isLoading: false,
      };
    case "LOADING_GAMES":
      return {
        ...state,
        isLoading: true,
      };

    default:
      return { ...state };
  }
};

export default gamesreducer;
