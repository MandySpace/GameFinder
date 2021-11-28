const init = {
  popular: {},
  query: "",
};

const popularReducer = (state = init, action) => {
  switch (action.type) {
    case "POPULAR_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        query: action.payload.query,
      };
    default:
      return { ...state };
  }
};

export default popularReducer;
