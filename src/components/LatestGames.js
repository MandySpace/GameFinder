import { useSelector } from "react-redux";
import Game from "./Game";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import GameDetail from "./GameDetail";
import { useState } from "react";
import Sort from "./Sort";
import Pagination from "./Pagination";
import { latestGames } from "../actions/latestAction";
import Filter from "./Filter";
import Spinner from "./Spinner";

function LatestGames() {
  const [currentPage, setCurrentPage] = useState(1);

  const [apiSortParam, setApiSortParam] = useState("");

  const { latest, query, isLoading } = useSelector((store) => store.latest);

  const pageCount = 20;
  const noOfPages = Math.ceil(latest.count / pageCount);

  const location = useLocation();
  const showDetail = location.pathname.split("/")[2];

  return (
    <div>
      <Sorting>
        <p>
          Page {currentPage} of {noOfPages}
        </p>
        <p>Latest Games</p>
        <Sort
          query={query}
          setApiSortParam={setApiSortParam}
          action={latestGames}
        />
      </Sorting>

      <Flex>
        <Filter query={query} sort={apiSortParam} action={latestGames} />
        {isLoading ? (
          <Spinner />
        ) : (
          <Container>
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
  width: 100%;
  padding: 2rem 0;
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(200px, 250px));
  row-gap: 1rem;
  column-gap: 1rem;
  justify-items: center;

  img {
    width: 100%;
  }
`;

export default LatestGames;
