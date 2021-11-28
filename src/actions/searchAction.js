import { SEARCH_GAME_URL } from "../api";
import axios from "axios";

export const searchGames =
  (
    searchParam = "",
    page = 1,
    sortBy = "",
    platforms = "",
    genres = "",
    metacritic = ""
  ) =>
  async (dispatch) => {
    const searchData = await axios.get(
      SEARCH_GAME_URL(searchParam, page, sortBy, platforms, genres, metacritic)
    );

    dispatch({
      type: "SEARCH_GAMES",
      payload: {
        search: searchData.data,
        query: searchParam,
      },
    });
  };
