import { useSelector } from "react-redux";
import Game from "./Game";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import GameDetail from "./GameDetail";
import { useState } from "react";
import Sort from "./Sort";
import Pagination from "./Pagination";
import { upcomingGames } from "../actions/upcomingAction";
import Filter from "./Filter";

function UpcomingGames() {
  const [currentPage, setCurrentPage] = useState(1);

  const [apiSortParam, setApiSortParam] = useState("");

  const { upcoming, query } = useSelector((store) => store.upcoming);

  const pageCount = 20;
  const noOfPages = Math.ceil(upcoming.count / pageCount);

  const location = useLocation();
  const showDetail = location.pathname.split("/")[2];

  return (
    <div>
      <Sorting>
        <p>
          Page {currentPage} of {noOfPages}
        </p>
        <p>Upcoming Games</p>
        <Sort
          query={query}
          setApiSortParam={setApiSortParam}
          action={upcomingGames}
        />
      </Sorting>

      <Flex>
        <Filter query={query} sort={apiSortParam} action={upcomingGames} />
        <Container>
          {upcoming.results?.map(
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
                />
              )
          )}
        </Container>
      </Flex>

      <Pagination
        query={query}
        apiSortParam={apiSortParam}
        noOfPages={noOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        action={upcomingGames}
      />
      {showDetail && <GameDetail />}
    </div>
  );
}

const Sorting = styled.div`
  width: 70%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 0.5rem 0;
  border-bottom: 1px solid #cccccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Flex = styled.div`
  display: flex;
  gap: 1rem;
  width: 70%;
  max-width: 120rem;
  margin: 0 auto;
`;

const Container = styled(motion.div)`
  width: 70%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  row-gap: 2rem;
  column-gap: 1rem;
  justify-content: center;
`;

export default UpcomingGames;
