import styled from "styled-components";
import { useDispatch } from "react-redux";

function Metacritic({
  filteredPlatforms,
  setFilteredMetacritic,
  filteredGenres,
  action,
  query,
  sort,
}) {
  const metacritic = [
    { name: "All Ratings", id: "0,100" },
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

  return (
    <StyledMetacritic>
      <h3>Metacritic</h3>
      {metacritic.map((platform) => (
        <Checkbox key={platform.id}>
          <input
            type="radio"
            id={platform.name}
            value={platform.id}
            name="metacritic"
            onChange={changeHandler}
          />
          <label htmlFor={platform.name}>{platform.name}</label>
        </Checkbox>
      ))}
    </StyledMetacritic>
  );
}

const StyledMetacritic = styled.div``;

const Checkbox = styled.div`
  input {
    margin-right: 1rem;
  }
`;

export default Metacritic;
