import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import { useEffect, useRef } from "react";
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
import styled from "styled-components";
import { motion } from "framer-motion";

import Carousel from "../components/Carousel";
import { useLocation } from "react-router-dom";
import { latestGames } from "../actions/latestAction";
import { popularGames } from "../actions/popularAction";
import { upcomingGames } from "../actions/upcomingAction";
import { Link } from "react-router-dom";

function Home() {
  const location = useLocation();
  const showDetail = location.pathname.split("/")[2];

  const a = useRef(0);
  const b = useRef(0);
  const c = useRef(0);

  const counterContainer = [a.current, b.current, c.current];

  //REFS
  const i = useRef(1);

  const upcomingGamesRef = useRef(null);
  const latestGamesRef = useRef(null);
  const popularGamesRef = useRef(null);

  const GamesParentRef = useRef(null);

  const firstSlideRef = useRef(null);
  const headerRef = useRef(null);

  const refContainer = [upcomingGamesRef, latestGamesRef, popularGamesRef];

  const dispatch = useDispatch();

  //USE EFFECT HOOKS

  useEffect(() => dispatch(loadGames()), [dispatch]);

  useEffect(() => {
    let slideTimeout;
    let opacityTimeout;
    const headerInterval = setInterval(() => {
      if (i.current > 4) i.current = 0;

      headerRef.current.style.opacity = 0;
      slideTimeout = setTimeout(() => {
        firstSlideRef.current.style.marginLeft = `${i.current * -100}%`;
        i.current++;
      }, 700);
      opacityTimeout = setTimeout(
        () => (headerRef.current.style.opacity = 1),
        1000
      );
    }, 5000);

    return () => {
      clearInterval(headerInterval);
      clearTimeout(slideTimeout);
      clearTimeout(opacityTimeout);
    };
  }, []);

  const { popular, latest, upcoming } = useSelector((state) => state.games);

  const gamesContainer = [latest, popular, upcoming];
  const headingContainer = ["Latest", "Popular", "Upcoming"];
  const actionContainer = [latestGames, popularGames, upcomingGames];
  const LinkContainer = ["latest", "popular", "upcoming"];

  return (
    <>
      <Header>
        <div className="slider" ref={headerRef}>
          <div className="slides first" ref={firstSlideRef}>
            <img src={latest[0]?.background_image} alt="Game Cover Header" />
          </div>
          <div className="slides">
            <img src={upcoming[0]?.background_image} alt="Game Cover Header" />
          </div>
          <div className="slides">
            <img src={latest[1]?.background_image} alt="Game Cover Header" />
          </div>
          <div className="slides">
            <img src={latest[2]?.background_image} alt="Game Cover Header" />
          </div>

          <div className="slides">
            <img src={popular[0]?.background_image} alt="Game Cover Header" />
          </div>
        </div>
      </Header>
      <GameList>
        {gamesContainer.map((games, i) => (
          <MainContiner key={i}>
            <div className="header">
              <h2>{headingContainer[i]} Games</h2>
              <Link to={`/${LinkContainer[i]}`}>
                <button onClick={() => dispatch(actionContainer[i]())}>
                  View All
                </button>
              </Link>
            </div>

            <Carousel
              GamesParentRef={GamesParentRef}
              GamesRef={refContainer[i]}
              i={counterContainer[i]}
            />
            <GamesContainer ref={refContainer[i]}>
              <Games ref={GamesParentRef}>
                {games &&
                  games.map(
                    (game) =>
                      game.name &&
                      game.id &&
                      game.background_image &&
                      game.genres && (
                        <Game
                          name={game.name}
                          img={game.background_image}
                          genres={game.genres}
                          key={game.id}
                          id={game.id}
                          metacritic={game.metacritic}
                          platforms={game.parent_platforms}
                        />
                      )
                  )}
              </Games>
            </GamesContainer>
          </MainContiner>
        ))}
        {showDetail && <GameDetail />}
      </GameList>
    </>
  );
}

const Header = styled(motion.div)`
  height: 60rem;
  background: #000;

  .slider {
    display: flex;
    overflow-x: hidden;
    transition: all 0.7s ease-out;
  }

  .slides {
    flex: 0 0 auto;
    width: 100%;

    img {
      height: 60rem;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`;

const GameList = styled(motion.div)`
  padding: 0 5rem;
  width: 90%;
  max-width: 120rem;
  margin: 0 auto;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      display: inline-block;
      font-size: 1rem;
      font-weight: 700;
      color: var(--color-primary);
      background-color: #fff;
      border: none;
      cursor: pointer;
      border-bottom: 2px solid #fff;
      transition: all 0.1s;

      &:hover {
        border-bottom: 2px solid var(--color-primary);
      }
    }
  }
`;

const MainContiner = styled(motion.div)`
  padding: 1rem 0;
  position: relative;
`;

const GamesContainer = styled(motion.div)`
  overflow: hidden;
`;

const Games = styled(motion.div)`
  display: flex;
  column-gap: 2rem;
`;

export default Home;
