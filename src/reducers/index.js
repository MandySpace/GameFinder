import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import detailReducer from "./detailReducer";
import searchReducer from "./searchReducer";
import latestReducer from "./latestReducer";
import upcomingReducer from "./upcomingReducer";
import popularReducer from "./popularReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
  detail: detailReducer,
  search: searchReducer,
  latest: latestReducer,
  upcoming: upcomingReducer,
  popular: popularReducer,
});

export default rootReducer;
