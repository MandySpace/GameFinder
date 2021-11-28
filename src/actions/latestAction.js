import { ALL_LATEST_GAMES } from "../api";
import axios from "axios";

export const latestGames =
  (
    searchParam = "",
    page = 1,
    sortBy = "",
    platforms = "",
    genres = "",
    metacritic = "",
    a = 1,
    b = 2
  ) =>
  async (dispatch) => {
    const latestData = await axios.get(
      ALL_LATEST_GAMES(
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
      type: "LATEST_GAMES",
      payload: {
        latest: latestData.data,
        query: searchParam,
      },
    });
  };
