const init = {
  popular: {},
  query: "",
  isLoading: true,
};

const popularReducer = (state = init, action) => {
  switch (action.type) {
    case "POPULAR_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        query: action.payload.query,
        isLoading: false,
      };
    case "LOADING_POPULAR_GAMES":
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};

export default popularReducer;
