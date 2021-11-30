const init = {
  latest: {},
  query: "",
  isLoading: true,
};

const latestReducer = (state = init, action) => {
  switch (action.type) {
    case "LATEST_GAMES":
      return {
        ...state,
        latest: action.payload.latest,
        query: action.payload.query,
        isLoading: false,
      };

    case "LOADING_LATEST_GAMES":
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};

export default latestReducer;
