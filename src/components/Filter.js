import Platforms from "./Platforms";
import Genres from "./Genres";
import Metacritic from "./Metacritic";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Filter({ query, sort, action }) {
  const [filteredPlatforms, setFilteredPlatforms] = useState([]);
  const [filteredGenres, setFilteredGenres] = useState([]);
  const [filteredMetacritic, setFilteredMetacritic] = useState([]);

  const dispatch = useDispatch();

  const clearFiltersHandler = () => {
    setFilteredPlatforms([]);
    setFilteredGenres([]);
    setFilteredMetacritic([]);
    dispatch(action());
  };

  return (
    <StyledFilter>
      <div className="clear-button">
        <button onClick={clearFiltersHandler}>Clear</button>
      </div>
      <Platforms
        query={query}
        sort={sort}
        action={action}
        filteredMetacritic={filteredMetacritic}
        filteredGenres={filteredGenres}
        filteredPlatforms={filteredPlatforms}
        setFilteredPlatforms={setFilteredPlatforms}
      />
      <Genres
        query={query}
        sort={sort}
        action={action}
        filteredMetacritic={filteredMetacritic}
        filteredPlatforms={filteredPlatforms}
        filteredGenres={filteredGenres}
        setFilteredGenres={setFilteredGenres}
      />

      <Metacritic
        query={query}
        sort={sort}
        action={action}
        filteredMetacritic={filteredMetacritic}
        filteredPlatforms={filteredPlatforms}
        filteredGenres={filteredGenres}
        setFilteredMetacritic={setFilteredMetacritic}
      />
    </StyledFilter>
  );
}

const StyledFilter = styled.div`
  flex-basis: 15em;
  border-right: 1px solid #cccccc;
  position: relative;

  button {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    padding: 0.2rem 0.5rem;
    color: var(--color-light-font);
    background-color: var(--color-light-body);
    border: 1px solid #8b8b8b;
    border-radius: 5px;
    font-family: inherit;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      color: #fff;
      background-color: var(--color-primary);
      border: 1px solid var(--color-primary);
    }
  }
`;

export default Filter;
