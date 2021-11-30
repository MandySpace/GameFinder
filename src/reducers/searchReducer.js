const init = {
  search: {},
  query: "",
  isLoading: false,
};

const searchReducer = (state = init, action) => {
  switch (action.type) {
    case "SEARCH_GAMES":
      return {
        ...state,
        search: action.payload.search,
        query: action.payload.query,
        isLoading: false,
      };
    case "LOADING_SEARCH_GAMES":
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};

export default searchReducer;
