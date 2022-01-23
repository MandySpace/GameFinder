const BASE_URL = "https://api.rawg.io/api";

const API_KEY = `?key=${process.env.REACT_APP_API_KEY}`;

const GAMES = `/games`;

const currentDate = () =>
  new Date()
    .toISOString()
    .slice(0, 10)
    .split("-")
    .map((ele) => ele.padStart(2, "0"))
    .join("-");

console.log(currentDate());

//Later Date a represents year/month/date b represents offset of date in future or past
const upcomingGamesDate = (a, b) => {
  const upcomingDate = currentDate().split("-");
  upcomingDate[a] = String(Number(upcomingDate[a]) + b);
  return upcomingDate.join("-");
};

//Before Date
const newGamesDate = (a, b) => {
  const upcomingDate = currentDate().split("-");
  upcomingDate[a] = String(Number(upcomingDate[a]) - b).padStart(2, "0");
  return upcomingDate.join("-");
};

export const POPULAR_GAMES_URL = () =>
  `${BASE_URL}${GAMES}${API_KEY}&page_size=14`;

export const UPCOMING_GAMES_URL = () =>
  `${BASE_URL}${GAMES}${API_KEY}&dates=${currentDate()},${upcomingGamesDate(
    0,
    1
  )}&page_size=14`;

export const NEW_GAMES_URL = () =>
  `${BASE_URL}${GAMES}${API_KEY}&dates=2020-11-01,${currentDate()}&page_size=14`;

export const GAME_DETAIL_URL = (id) => `${BASE_URL}${GAMES}/${id}${API_KEY}`;

export const GAME_SCREENSHOTS_URL = (id) =>
  `${BASE_URL}${GAMES}/${id}/screenshots${API_KEY}`;

export const GAME_SERIES_URL = (id) =>
  `${BASE_URL}${GAMES}/${id}/game-series${API_KEY}`;

export const SEARCH_GAME_URL = (
  searchQuery,
  page,
  sortBy,
  platforms,
  genres,
  metacritic,
  parent_platforms,
  genre
) =>
  `${BASE_URL}${GAMES}${API_KEY}&search=${searchQuery}&page=${page}&search_exact=true${
    platforms !== "" ? `&platforms=${platforms}` : ""
  }${genres !== "" ? `&genres=${genres}` : ""}${
    sortBy !== "" ? `&ordering=${sortBy}` : ""
  }${metacritic !== "" ? `&metacritic=${metacritic}` : ""}${
    parent_platforms !== "" ? `&parent_platforms=${parent_platforms}` : ""
  }${genre !== "" ? `&genres=${genre}` : ""}`;

export const ALL_LATEST_GAMES = (
  searchQuery,
  page,
  sortBy,
  platforms,
  genres,
  metacritic,
  a,
  b
) =>
  `${BASE_URL}${GAMES}${API_KEY}&dates=${newGamesDate(
    a,
    b
  )},${currentDate()}&search=${searchQuery}&page=${page}${
    sortBy !== "" ? `&ordering=${sortBy}` : ""
  }${platforms !== "" ? `&platforms=${platforms}` : ""}${
    genres !== "" ? `&genres=${genres}` : ""
  }${metacritic !== "" ? `&metacritic=${metacritic}` : ""}`;

export const ALL_UPCOMING_GAMES = (
  searchQuery,
  page,
  sortBy,
  platforms,
  genres,
  metacritic,
  a,
  b
) =>
  `${BASE_URL}${GAMES}${API_KEY}&dates=${currentDate()},${upcomingGamesDate(
    a,
    b
  )}&search=${searchQuery}&page=${page}&ordering=${sortBy}${
    platforms !== "" ? `&platforms=${platforms}` : ""
  }${genres !== "" ? `&genres=${genres}` : ""}${
    metacritic !== "" ? `&metacritic=${metacritic}` : ""
  }`;

export const ALL_POPULAR_GAMES = (
  searchQuery,
  page,
  sortBy,
  platforms,
  genres,
  metacritic,
  a,
  b,
  c,
  d
) =>
  `${BASE_URL}${GAMES}${API_KEY}${
    a !== "" ? `&dates=${newGamesDate(a, b)},${newGamesDate(c, d)}` : ""
  }&search=${searchQuery}&page=${page}&ordering=${sortBy}${
    platforms !== "" ? `&platforms=${platforms}` : ""
  }${genres !== "" ? `&genres=${genres}` : ""}${
    metacritic !== "" ? `&metacritic=${metacritic}` : "&metacritic=90,100"
  }`;

export const PLATFORMS_URL = `${BASE_URL}/platforms${API_KEY}`;

export const GENRES_URL = `${BASE_URL}/genres${API_KEY}`;
