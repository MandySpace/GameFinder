import { ALL_UPCOMING_GAMES } from "../api";
import axios from "axios";

export const upcomingGames =
  (
    searchParam = "",
    page = 1,
    sortBy = "",
    platforms = "",
    genres = "",
    metacritic = "",
    a = 0,
    b = 1
  ) =>
  async (dispatch) => {
    dispatch({ type: "LOADING_UPCOMING_GAMES" });
    const upcomingData = await axios.get(
      ALL_UPCOMING_GAMES(
        searchParam,
        page,
        sortBy,
        platforms,
        genres,
        metacritic,
        a,
        b
      )
    );

    dispatch({
      type: "UPCOMING_GAMES",
      payload: {
        upcoming: upcomingData.data,
        query: searchParam,
      },
    });
  };
