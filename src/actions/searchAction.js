import { SEARCH_GAME_URL } from "../api";
import axios from "axios";

export const searchGames =
  (
    searchParam = "",
    page = 1,
    sortBy = "",
    platforms = "",
    genres = "",
    metacritic = "",
    parent_platforms = ""
  ) =>
  async (dispatch) => {
    dispatch({ type: "LOADING_SEARCH_GAMES" });
    const searchData = await axios.get(
      SEARCH_GAME_URL(
        searchParam,
        page,
        sortBy,
        platforms,
        genres,
        metacritic,
        parent_platforms
      )
    );

    dispatch({
      type: "SEARCH_GAMES",
      payload: {
        search: searchData.data,
        query: searchParam,
      },
    });
  };
