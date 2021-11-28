import styled from "styled-components";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

function Sort({ query, setApiSortParam, action }) {
  const [displaySortingOptions, setDisplaySortingOptions] = useState(false);
  const [sortBy, setSortBy] = useState({
    Popularity: true,
    HighRating: false,
    LowRating: false,
    LatestRelease: false,
    OldestRelease: false,
    AZName: false,
    ZAName: false,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener("click", detectClickToCloseSortBy);

    return () =>
      document.removeEventListener("click", detectClickToCloseSortBy);
  });

  const radioButtonHandler = (e) => {
    dispatch(action(query, 1, e.target.value));
    Object.keys(sortBy).forEach((key) => {
      if (key === e.target.id) {
        sortBy[key] = true;
      } else {
        sortBy[key] = false;
      }
    });
    setSortBy({ ...sortBy });
    setApiSortParam(e.target.value);
    setDisplaySortingOptions(false);
  };

  const detectClickToCloseSortBy = (e) => {
    if (
      displaySortingOptions &&
      (!e.target.closest("form")?.classList.contains("form") ||
        e.target.classList.contains("active"))
    )
      setDisplaySortingOptions(false);
  };

  return (
    <StyledSort>
      <button onClick={() => setDisplaySortingOptions(true)}>Sort by</button>

      {displaySortingOptions && (
        <form action="#" className="form">
          <input
            type="radio"
            name="sort"
            id="Popularity"
            defaultChecked={sortBy.Popularity ? "checked" : ""}
            value=""
            onChange={radioButtonHandler}
          />
          <label
            htmlFor="Popularity"
            className={sortBy.Popularity ? "active" : ""}
          >
            Popularity
          </label>

          <input
            type="radio"
            name="sort"
            id="HighRating"
            defaultChecked={sortBy.HighRating ? "checked" : ""}
            value="-rating"
            onChange={radioButtonHandler}
          />
          <label
            htmlFor="HighRating"
            className={sortBy.HighRating ? "active" : ""}
          >
            Highest Rating
          </label>

          <input
            type="radio"
            name="sort"
            id="LowRating"
            defaultChecked={sortBy.LowRating ? "checked" : ""}
            value="rating"
            onChange={radioButtonHandler}
          />
          <label
            htmlFor="LowRating"
            className={sortBy.LowRating ? "active" : ""}
          >
            Lowest Rating
          </label>

          <input
            type="radio"
            name="sort"
            id="LatestRelease"
            defaultChecked={sortBy.LatestRelease ? "checked" : ""}
            value="-released"
            onChange={radioButtonHandler}
          />
          <label
            htmlFor="LatestRelease"
            className={sortBy.LatestRelease ? "active" : ""}
          >
            Latest Release
          </label>
          <input
            type="radio"
            name="sort"
            id="OldestRelease"
            defaultChecked={sortBy.OldestRelease ? "checked" : ""}
            value="released"
            onChange={radioButtonHandler}
          />
          <label
            htmlFor="OldestRelease"
            className={sortBy.OldestRelease ? "active" : ""}
          >
            Oldest Released
          </label>

          <input
            type="radio"
            name="sort"
            id="AZName"
            defaultChecked={sortBy.AZName ? "checked" : ""}
            value="name"
            onChange={radioButtonHandler}
          />
          <label htmlFor="AZName" className={sortBy.AZName ? "active" : ""}>
            Name A &rarr; Z
          </label>

          <input
            type="radio"
            name="sort"
            id="ZAName"
            defaultChecked={sortBy.ZAName ? "checked" : ""}
            value="-name"
            onChange={radioButtonHandler}
          />
          <label htmlFor="ZAName" className={sortBy.ZAName ? "active" : ""}>
            Name Z &rarr; A
          </label>
        </form>
      )}
    </StyledSort>
  );
}

const StyledSort = styled.div`
  position: relative;
  button {
    font-size: 1rem;
    background-color: #fff;
    border-radius: 5px;
    padding: 0.5rem 2rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      color: #fff;
      background-color: var(--color-primary);
      border: 2px solid var(--color-primary);
    }
  }

  form {
    position: absolute;
    top: -10%;
    left: -10%;
    display: flex;
    flex-direction: column;
    width: max-content;
    font-size: 1rem;
    background: #fff;
    border: 1px solid #cccccc;
    border-radius: 10px;
    overflow: hidden;

    input {
      display: none;
    }

    label {
      padding: 0.5rem 2rem;
      cursor: pointer;
    }

    label:hover {
      background-color: #cccccc;
    }
  }
  .active {
    color: #fff;
    background-color: var(--color-primary);
  }
`;

export default Sort;
