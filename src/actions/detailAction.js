import axios from "axios";
import { GAME_DETAIL_URL, GAME_SCREENSHOTS_URL, GAME_SERIES_URL } from "../api";

export const detail = (id) => async (dispatch) => {
  dispatch({ type: "LOADING" });
  const detail = await axios.get(GAME_DETAIL_URL(id));
  const screenshots = await axios.get(GAME_SCREENSHOTS_URL(id));
  const series = await axios.get(GAME_SERIES_URL(id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      detail: detail.data,
      screenshots: screenshots.data.results,
      series: series.data.results,
    },
  });
};
