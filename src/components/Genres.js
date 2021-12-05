import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { GENRES_URL } from "../api";
import { useDispatch } from "react-redux";

function Genres({
  filteredGenres,
  setFilteredGenres,
  filteredPlatforms,
  filteredMetacritic,
  action,
  query,
  sort,
  checkedGenre,
  setCheckedGenre,
}) {
  const [genres, setGenres] = useState([]);

  const dispatch = useDispatch();

  useEffect(
    () => axios.get(GENRES_URL).then((res) => setGenres(res.data.results)),
    [setGenres]
  );

  const changeHandler = (e) => {
    let arr = [...filteredGenres];

    if (!filteredGenres.includes(e.target.value)) {
      arr.push(e.target.value);
    } else {
      arr = arr.filter((ele) => ele !== e.target.value);
    }
    const platformQuery = filteredPlatforms.join(",");
    const genreQuery = arr.join(",");
    const metacriticQuery = filteredMetacritic.join(",");
    dispatch(
      action(query, 1, sort, platformQuery, genreQuery, metacriticQuery)
    );
    setFilteredGenres(arr);
  };

  const checkboxHandler = (e) => {
    const i = e.target.dataset.index;
    const arr1 = { ...checkedGenre };
    arr1[i] = arr1[i] === true ? false : true;
    setCheckedGenre(arr1);
  };

  return (
    <StyledGenre className="filter">
      <h3>Genres</h3>
      {genres.map((genre, i) => (
        <Checkbox key={genre.id} className="filter">
          <input
            type="checkbox"
            id={genre.name}
            value={genre.id}
            onChange={changeHandler}
            checked={checkedGenre[i]}
            className="filter"
          />
          <label
            htmlFor={genre.name}
            onClick={checkboxHandler}
            data-index={i}
            className="filter"
          >
            {genre.name}
          </label>
        </Checkbox>
      ))}
    </StyledGenre>
  );
}

const StyledGenre = styled.div`
  margin-bottom: 1rem;
`;

const Checkbox = styled.div`
  margin: 0.1rem 0;
  display: flex;
  align-items: center;

  @media screen and (max-width: 40.625em) {
    margin: -0.1rem;
  }

  input {
    cursor: pointer;
    margin-right: 1rem;

    @media screen and (max-width: 53.125em) {
      transform: scale(0.8);
    }

    @media screen and (max-width: 40.625em) {
      transform: scale(0.6);
    }
  }

  label {
    cursor: pointer;
  }
`;

export default Genres;
