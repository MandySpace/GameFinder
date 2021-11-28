const initState = {
  popular: [],
  latest: [],
  upcoming: [],
};

const gamesreducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        popular: action.payload.popular,
        latest: action.payload.latest,
        upcoming: action.payload.upcoming,
      };
    default:
      return { ...state };
  }
};

export default gamesreducer;
