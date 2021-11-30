import axios from "axios";

import { POPULAR_GAMES_URL, UPCOMING_GAMES_URL, NEW_GAMES_URL } from "../api";

export const loadGames = () => async (dispatch) => {
  dispatch({
    type: "LOADING_GAMES",
  });
  const popularGames = await axios.get(POPULAR_GAMES_URL());
  const upcomingGames = await axios.get(UPCOMING_GAMES_URL());
  const newGames = await axios.get(NEW_GAMES_URL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGames.data.results,
      latest: newGames.data.results,
      upcoming: upcomingGames.data.results,
    },
  });
};
