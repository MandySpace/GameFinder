import Home from "./pages/Home";
import GlobalStyles from "./components/GobalStyles";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import SearchedGames from "./components/SearchedGames";
import LatestGames from "./components/LatestGames";
import UpcomingGames from "./components/UpcomingGames";
import PopularGames from "./components/PopularGames";
import ScrollTop from "./components/ScrollTop";
import { useState } from "react";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className="App">
      <GlobalStyles />
      <Nav darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Switch>
        <Route path={["/", "/game/:id"]} exact>
          <Home />
        </Route>
        <Route path={["/results", "/results/game/:id"]}>
          <SearchedGames darkTheme={darkTheme} />
        </Route>
        <Route path={["/latest", "/latest/game/:id"]}>
          <LatestGames darkTheme={darkTheme} />
        </Route>
        <Route path={["/upcoming", "/upcoming/game/:id"]}>
          <UpcomingGames darkTheme={darkTheme} />
        </Route>
        <Route path={["/popular", "/popular/game/:id"]}>
          <PopularGames darkTheme={darkTheme} />
        </Route>
      </Switch>
      <ScrollTop />
    </div>
  );
}

export default App;
