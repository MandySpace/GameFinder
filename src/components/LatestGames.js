import { useSelector } from "react-redux";
import Game from "./Game";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import GameDetail from "./GameDetail";
import { useEffect, useState, useRef } from "react";
import Sort from "./Sort";
import Pagination from "./Pagination";
import { latestGames } from "../actions/latestAction";
import Filter from "./Filter";
import Spinner from "./Spinner";
import { fadeAnim } from "../animations";
import filter from "../img/filter.svg";
import { useDispatch } from "react-redux";
import darkFilter from "../img/filter-dark.svg";

function LatestGames({ darkTheme }) {
  const [currentPage, setCurrentPage] = useState(1);

  const [apiSortParam, setApiSortParam] = useState("");

  const { latest, query, isLoading } = useSelector((store) => store.latest);

  const dispatch = useDispatch();

  const pageCount = 20;
  const noOfPages = Math.ceil(latest.count / pageCount);

  const location = useLocation();
  const showDetail = location.pathname.split("/")[2];

  const filterRef = useRef(null);

  useEffect(() => {
    if (Object.keys(latest).length === 0) dispatch(latestGames());
  }, [dispatch, latest]);

  return (
    <Latest
      variants={fadeAnim}
      initial="hidden"
      animate="show"
      exit="exit"
      onClick={(e) => {
        if (
          !e.target.classList.contains("filter") &&
          !e.target.classList.contains("filter-button") &&
          !e.target.classList.contains("filter-svg")
        )
          filterRef.current?.classList.remove("filter-active");
      }}
    >
      <Sorting>
        <p>
          Page {currentPage} of {isNaN(noOfPages) ? "" : noOfPages}
        </p>
        <p>Latest Games</p>
        <div className="filter-sort">
          <button
            className="filter-button"
            onClick={() => {
              filterRef.current?.classList.toggle("filter-active");
            }}
          >
            <img
              src={darkTheme ? filter : darkFilter}
              alt="filter icon"
              className="filter-svg"
            />
          </button>
          <Sort
            query={query}
            setApiSortParam={setApiSortParam}
            action={latestGames}
            darkTheme={darkTheme}
          />
        </div>
      </Sorting>

      <Flex>
        <div className="filter-desktop">
          <Filter query={query} sort={apiSortParam} action={latestGames} />
        </div>
        {isLoading ? (
          <Spinner variants={fadeAnim} />
        ) : (
          <Container variants={fadeAnim}>
            {latest.results?.map(
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
                  />
                )
            )}
          </Container>
        )}
      </Flex>

      <Pagination
        query={query}
        apiSortParam={apiSortParam}
        noOfPages={noOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        action={latestGames}
      />
      {showDetail && <GameDetail />}
      <FilterMobile ref={filterRef} className="filter">
        <Filter query={query} sort={apiSortParam} action={latestGames} />
      </FilterMobile>
    </Latest>
  );
}

const Latest = styled(motion.div)`
  position: relative;

  .filter-active {
    left: 0%;
  }
`;

const Sorting = styled.div`
  width: 70%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 0.5rem 0;
  border-bottom: 1px solid #cccccc9b;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    @media screen and (max-width: 53.125em) {
      font-size: 1.2rem;
    }

    @media screen and (max-width: 40.625em) {
      font-size: 1.5rem;
    }
  }

  .filter-sort {
    display: flex;
    gap: 1rem;
  }

  .filter-button {
    display: none;
    font-size: 1rem;
    color: var(--color-light-font);
    background-color: var(--color-light-body);
    border: 1px solid #8b8b8b;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: all 0.2s;

    &:active {
      color: #fff;
      background-color: var(--color-primary);
      border: 1px solid var(--color-primary);
    }

    @media screen and (max-width: 53.125em) {
      display: block;
    }
  }

  @media screen and (max-width: 68.75em) {
    width: 100%;
    padding: 0.5rem 2rem;
  }
`;

const Flex = styled.div`
  display: flex;
  gap: 1rem;
  width: 70%;
  max-width: 120rem;
  margin: 0 auto;
  border-bottom: 1px solid #cccccc9b;

  @media screen and (max-width: 68.75em) {
    width: 100%;
    padding: 0 2rem;
  }

  .filter-desktop {
    width: 18rem;
    @media screen and (max-width: 53.125em) {
      display: none;
    }
  }
`;

const Container = styled(motion.div)`
  width: 100%;
  padding: 2rem 0;
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(200px, 250px));
  row-gap: 1rem;
  column-gap: 1rem;
  justify-items: center;
  justify-content: center;

  img {
    width: 100%;
  }

  @media screen and (max-width: 68.75em) {
    grid-template-columns: repeat(auto-fit, 150px);
  }

  @media screen and (max-width: 53.125em) {
    grid-template-columns: repeat(auto-fit, 125px);
  }

  @media screen and (max-width: 40.625em) {
    grid-template-columns: repeat(auto-fit, 100px);
  }

  @media screen and (max-width: 31.25em) {
    grid-template-columns: repeat(auto-fit, 80px);
    column-gap: 2rem;
  }
`;

const FilterMobile = styled(motion.div)`
  position: fixed;
  top: 0;
  left: -80%;
  bottom: 0;
  width: 40%;
  background: var(--color-light-body);
  box-shadow: 5px 5px 30px #0000003c;
  padding: 2rem;
  border: none;
  font-size: 1.5rem;
  overflow-y: scroll;
  transition: all 0.5s;

  @media screen and (max-width: 53.125em) {
    width: 30%;
  }

  @media screen and (max-width: 31.25em) {
    width: 35%;
  }

  @media screen and (max-width: 25em) {
    width: 40%;
  }

  @media screen and (min-width: 53.125em) {
    display: none;
  }
`;

export default LatestGames;
