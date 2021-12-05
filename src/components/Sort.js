import styled from "styled-components";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import sort from "../img/sort.svg";
import sortDark from "../img/sort-dark.svg";

function Sort({ query, setApiSortParam, action, darkTheme }) {
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
      <button
        onClick={() => setDisplaySortingOptions(true)}
        className="desktop-button"
      >
        Sort by
      </button>
      <button
        onClick={() => setDisplaySortingOptions(true)}
        className="mobile-button"
      >
        <img src={darkTheme ? sort : sortDark} alt="sort icon" />
      </button>

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
    color: var(--color-light-font);
    background-color: var(--color-light-body);
    border: 2px solid #8b8b8b;
    border-radius: 5px;
    padding: 0.5rem 2rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      color: #fff;
      background-color: var(--color-primary);
      border: 2px solid var(--color-primary);
    }

    @media screen and (max-width: 53.125em) {
      font-size: 1.2rem;
    }

    @media screen and (max-width: 40.625em) {
      font-size: 1.5rem;
    }
  }

  form {
    color: var(--color-light-font);
    background-color: var(--color-light-body);
    position: absolute;
    top: -10%;
    left: -10%;
    display: flex;
    z-index: 1000;
    flex-direction: column;
    width: max-content;
    font-size: 1rem;
    border: 1px solid #cccccc;
    border-radius: 10px;
    overflow: hidden;

    @media screen and (max-width: 68.75em) {
      left: -30%;
    }
    @media screen and (max-width: 53.125em) {
      left: -350%;
      font-size: 1.5rem;
    }

    @media screen and (max-width: 40.625em) {
      left: -250%;
    }

    input {
      display: none;
    }

    label {
      padding: 0.5rem 2rem;
      cursor: pointer;
    }

    label:hover {
      color: #202020;
      background-color: #cccccc;
    }
  }
  .active,
  .active:hover {
    color: #fff;
    background-color: var(--color-primary);
  }

  .mobile-button {
    display: none;
    @media screen and (max-width: 53.125em) {
      display: block;
      padding: 0.5rem 1rem;
      border: 1px solid #8b8b8b;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        border: 1px solid var(--color-primary);
      }
    }
  }

  .desktop-button {
    @media screen and (max-width: 53.125em) {
      display: none;
    }
  }
`;

export default Sort;
