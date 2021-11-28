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
}) {
  const [genres, setGenres] = useState([]);

  const dispatch = useDispatch();

  useEffect(
    () => axios.get(GENRES_URL).then((res) => setGenres(res.data.results)),
    [setGenres]
  );

  const changeHandler = (e) => {
    let arr = [...filteredGenres];

    if (e.target.checked) {
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

  return (
    <StyledGenre>
      <h3>Genres</h3>
      {genres.map((genre) => (
        <Checkbox key={genre.id}>
          <input
            type="checkbox"
            id={genre.name}
            value={genre.id}
            onChange={changeHandler}
          />
          <label htmlFor={genre.name}>{genre.name}</label>
        </Checkbox>
      ))}
    </StyledGenre>
  );
}

const StyledGenre = styled.div``;

const Checkbox = styled.div`
  input {
    margin-right: 1rem;
  }
`;

export default Genres;
