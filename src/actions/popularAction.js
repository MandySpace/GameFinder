import { ALL_POPULAR_GAMES } from "../api";
import axios from "axios";

export const popularGames =
  (
    searchParam = "",
    page = 1,
    sortBy = "",
    platforms = "",
    genres = "",
    metacritic = "",
    a = "",
    b = "",
    c = "",
    d = ""
  ) =>
  async (dispatch) => {
    dispatch({
      type: "LOADING_POPULAR_GAMES",
    });
    const popularData = await axios.get(
      ALL_POPULAR_GAMES(
        searchParam,
        page,
        sortBy,
        platforms,
        genres,
        metacritic,
        a,
        b,
        c,
        d
      )
    );

    dispatch({
      type: "POPULAR_GAMES",
      payload: {
        popular: popularData.data,
        query: searchParam,
      },
    });
  };
