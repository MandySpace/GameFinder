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

  const [checkedPlatform, setCheckedPlatform] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
  });
  const [checkedGenre, setCheckedGenre] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
    19: false,
  });
  const [checkedMetacritic, setCheckedMetacritic] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
  });

  const dispatch = useDispatch();

  const clearFiltersHandler = () => {
    setCheckedPlatform({
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      10: false,
      11: false,
      12: false,
      13: false,
      14: false,
    });
    setFilteredPlatforms([]);

    setCheckedGenre({
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      10: false,
      11: false,
      12: false,
      13: false,
      14: false,
      15: false,
      16: false,
      17: false,
      18: false,
      19: false,
    });
    setFilteredGenres([]);

    setCheckedMetacritic({
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
    });
    setFilteredMetacritic([]);

    dispatch(action());
  };

  return (
    <StyledFilter className="filter">
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
        checkedPlatform={checkedPlatform}
        setCheckedPlatform={setCheckedPlatform}
      />
      <Genres
        query={query}
        sort={sort}
        action={action}
        filteredMetacritic={filteredMetacritic}
        filteredPlatforms={filteredPlatforms}
        filteredGenres={filteredGenres}
        setFilteredGenres={setFilteredGenres}
        checkedGenre={checkedGenre}
        setCheckedGenre={setCheckedGenre}
      />

      <Metacritic
        query={query}
        sort={sort}
        action={action}
        filteredMetacritic={filteredMetacritic}
        filteredPlatforms={filteredPlatforms}
        filteredGenres={filteredGenres}
        setFilteredMetacritic={setFilteredMetacritic}
        checkedMetacritic={checkedMetacritic}
        setCheckedMetacritic={setCheckedMetacritic}
      />
    </StyledFilter>
  );
}

const StyledFilter = styled.div`
  flex-basis: 15em;
  border-right: 1px solid #cccccc9b;
  position: relative;
  /* z-index: 100000; */

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

    @media screen and (max-width: 40.625em) {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 53.125em) {
    border: none;
  }
`;

export default Filter;
