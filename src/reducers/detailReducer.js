const initialState = {
  detail: {},
  screenshots: [],
  series: [],
  isLoading: true,
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload.detail,
        screenshots: action.payload.screenshots,
        series: action.payload.series,
        isLoading: false,
      };
    case "LOADING":
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};

export default detailReducer;
