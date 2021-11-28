import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { PLATFORMS_URL } from "../api";
import { useDispatch } from "react-redux";
import { useRef } from "react";

function Platforms({
  filteredPlatforms,
  setFilteredPlatforms,
  filteredMetacritic,
  filteredGenres,
  action,
  query,
  sort,
}) {
  const [platforms, setPlatforms] = useState([]);

  const inputRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(
    () =>
      axios
        .get(PLATFORMS_URL)
        .then((res) => setPlatforms(res.data.results.slice(0, 15))),
    [setPlatforms]
  );

  const changeHandler = (e) => {
    let arr = [...filteredPlatforms];

    if (e.target.checked) {
      arr.push(e.target.value);
    } else {
      arr = arr.filter((ele) => ele !== e.target.value);
    }
    const platformQuery = arr.join(",");
    const genreQuery = filteredGenres.join(",");
    const metacriticQuery = filteredMetacritic.join(",");
    dispatch(
      action(query, 1, sort, platformQuery, genreQuery, metacriticQuery)
    );
    setFilteredPlatforms(arr);
  };

  return (
    <StyledPlatform>
      <h3>Platforms</h3>
      {platforms.map((platform) => (
        <Checkbox key={platform.id}>
          <input
            type="checkbox"
            id={platform.name}
            value={platform.id}
            onChange={changeHandler}
            ref={inputRef}
          />
          <label htmlFor={platform.name}>{platform.name}</label>
        </Checkbox>
      ))}
    </StyledPlatform>
  );
}

const StyledPlatform = styled.div``;

const Checkbox = styled.div`
  input {
    margin-right: 1rem;
  }
`;

export default Platforms;
