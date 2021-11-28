const init = {
  latest: {},
  query: "",
};

const latestReducer = (state = init, action) => {
  switch (action.type) {
    case "LATEST_GAMES":
      return {
        ...state,
        latest: action.payload.latest,
        query: action.payload.query,
      };
    default:
      return { ...state };
  }
};

export default latestReducer;
