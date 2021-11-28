const init = {
  search: {},
  query: "",
};

const searchReducer = (state = init, action) => {
  switch (action.type) {
    case "SEARCH_GAMES":
      return {
        ...state,
        search: action.payload.search,
        query: action.payload.query,
      };
    default:
      return { ...state };
  }
};

export default searchReducer;
