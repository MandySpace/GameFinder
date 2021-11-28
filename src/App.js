import Home from "./pages/Home";
import GlobalStyles from "./components/GobalStyles";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import SearchedGames from "./components/SearchedGames";
import LatestGames from "./components/LatestGames";
import UpcomingGames from "./components/UpcomingGames";
import PopularGames from "./components/PopularGames";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Switch>
        <Route path={["/", "/game/:id"]} exact>
          <Home />
        </Route>
        <Route path={["/results", "/results/game/:id"]}>
          <SearchedGames />
        </Route>
        <Route path={["/latest", "/latest/game/:id"]}>
          <LatestGames />
        </Route>
        <Route path={["/upcoming", "/upcoming/game/:id"]}>
          <UpcomingGames />
        </Route>
        <Route path={["/popular", "/popular/game/:id"]}>
          <PopularGames />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
