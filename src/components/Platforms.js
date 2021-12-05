import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { PLATFORMS_URL } from "../api";
import { useDispatch } from "react-redux";

function Platforms({
  filteredPlatforms,
  setFilteredPlatforms,
  filteredMetacritic,
  filteredGenres,
  action,
  query,
  sort,
  checkedPlatform,
  setCheckedPlatform,
}) {
  const [platforms, setPlatforms] = useState([]);

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

    if (!filteredPlatforms.includes(e.target.value)) {
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
    console.log(filteredPlatforms);

    setFilteredPlatforms(arr);
  };

  const checkboxHandler = (e) => {
    const i = e.target.dataset.index;
    let arr1 = { ...checkedPlatform };
    arr1[i] = arr1[i] === true ? false : true;
    setCheckedPlatform(arr1);
  };

  return (
    <StyledPlatform className="filter">
      <h3>Platforms</h3>
      {platforms.map((platform, i) => (
        <Checkbox key={platform.id} className="filter">
          <input
            type="checkbox"
            id={platform.name}
            value={platform.id}
            checked={checkedPlatform[i]}
            onChange={changeHandler}
            className="filter"
          />
          <label
            htmlFor={platform.name}
            onClick={checkboxHandler}
            data-index={i}
            className="filter"
          >
            {platform.name}
          </label>
        </Checkbox>
      ))}
    </StyledPlatform>
  );
}

const StyledPlatform = styled.div`
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

export default Platforms;
