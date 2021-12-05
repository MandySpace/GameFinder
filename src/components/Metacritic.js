import styled from "styled-components";
import { useDispatch } from "react-redux";

function Metacritic({
  filteredPlatforms,
  setFilteredMetacritic,
  filteredGenres,
  action,
  query,
  sort,
  setCheckedMetacritic,
  checkedMetacritic,
}) {
  const metacritic = [
    { name: "90 - 100", id: "90,100" },
    { name: "80 - 90", id: "80,90" },
    { name: "70 - 80", id: "70,80" },
    { name: "60 - 70", id: "60,70" },
    { name: "50 - 60", id: "50,60" },
    { name: "40 - 50", id: "40,50" },
    { name: "30 - 40", id: "30,40" },
    { name: "20 - 30", id: "20,30" },
    { name: "10 - 20", id: "10,20" },
  ];

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    let arr = [];

    if (e.target.checked) {
      arr.push(e.target.value);
    }
    const platformQuery = filteredPlatforms.join(",");
    const genreQuery = filteredGenres.join(",");
    const metacriticQuery = arr.join(",");
    dispatch(
      action(query, 1, sort, platformQuery, genreQuery, metacriticQuery)
    );
    setFilteredMetacritic(arr);
  };

  const checkboxHandler = (e) => {
    const i = e.target.dataset.index;
    const arr1 = Object.keys(checkedMetacritic).map(
      (key) => (checkedMetacritic[key] = false)
    );
    arr1[i] = true;
    setCheckedMetacritic(arr1);
  };

  return (
    <StyledMetacritic className="filter">
      <h3>Metacritic</h3>
      {metacritic.map((metacritic, i) => (
        <Checkbox key={metacritic.id} className="filter">
          <input
            type="radio"
            id={metacritic.name}
            value={metacritic.id}
            name="metacritic"
            checked={checkedMetacritic[i]}
            onChange={changeHandler}
            className="filter"
          />
          <label
            htmlFor={metacritic.name}
            data-index={i}
            onClick={checkboxHandler}
            className="filter"
          >
            {metacritic.name}
          </label>
        </Checkbox>
      ))}
    </StyledMetacritic>
  );
}

const StyledMetacritic = styled.div`
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

export default Metacritic;
