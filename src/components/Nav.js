import search from "../img/search.svg";
import logo from "../img/logo.png";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { searchGames } from "../actions/searchAction";
import { latestGames } from "../actions/latestAction";
import { upcomingGames } from "../actions/upcomingAction";
import { popularGames } from "../actions/popularAction";
import { Link } from "react-router-dom";

function Nav() {
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();

  const history = useHistory();

  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(searchGames(searchQuery));
    history.push("/results");
  };

  const changeHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <StyledNav>
      <Logo src={logo} alt="logo" onClick={() => history.push("/")} />
      <ul>
        <li>
          <Link
            className="link"
            to="/latest"
            onClick={() => dispatch(latestGames())}
          >
            Latest Releases
          </Link>
          <div>
            <Link
              to="/latest"
              onClick={() => dispatch(latestGames("", 1, "", "", "", "", 2, 7))}
            >
              <p>This week</p>
            </Link>
            <Link
              to="/latest"
              onClick={() => dispatch(latestGames("", 1, "", "", "", "", 1, 1))}
            >
              <p>This month</p>
            </Link>
            <Link
              to="/latest"
              onClick={() => dispatch(latestGames("", 1, "", "", "", "", 0, 1))}
            >
              <p>This year</p>
            </Link>
          </div>
        </li>

        <li>
          <Link
            className="link"
            to="/upcoming"
            onClick={() => dispatch(upcomingGames())}
          >
            Upcoming Releases
          </Link>
          <div>
            <Link
              to="/upcoming"
              onClick={() =>
                dispatch(upcomingGames("", 1, "", "", "", "", 2, 14))
              }
            >
              <p>Next week</p>
            </Link>
            <Link
              to="/upcoming"
              onClick={() =>
                dispatch(upcomingGames("", 1, "", "", "", "", 1, 1))
              }
            >
              <p>Next month</p>
            </Link>
            <Link
              to="/upcoming"
              onClick={() =>
                dispatch(upcomingGames("", 1, "", "", "", "", 0, 1))
              }
            >
              <p>Next year</p>
            </Link>
          </div>
        </li>

        <li>
          <Link
            className="link"
            to="/popular"
            onClick={() => dispatch(popularGames())}
          >
            Popular Releases{" "}
          </Link>
          <div>
            <Link
              to="/popular"
              onClick={() =>
                dispatch(popularGames("", 1, "", "", "", "80,100", 0, 1, 0, 0))
              }
            >
              <p>This year</p>
            </Link>
            <Link
              to="/popular"
              onClick={() =>
                dispatch(popularGames("", 1, "", "", "", "80,100", 0, 2, 0, 1))
              }
            >
              <p>Last year</p>
            </Link>
            <Link
              to="/popular"
              onClick={() => dispatch(popularGames("", 1, "", "", "", ""))}
            >
              <p>All time</p>
            </Link>
          </div>
        </li>
      </ul>
      <Form action="#" onSubmit={clickHandler}>
        <input
          value={searchQuery}
          type="text"
          placeholder="Search for games..."
          onChange={changeHandler}
        />
        <img
          onClick={clickHandler}
          src={search}
          alt="search icon"
          className="search-icon"
        />
      </Form>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  height: 65px;
  display: flex;
  justify-content: space-between;
  color: var(--color-light-font);
  padding: 0rem 1rem;
  border-bottom: 1px solid #cccccc9b;

  ul {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-right: auto;
    padding: 2rem;
  }

  li {
    position: relative;
    list-style: none;
    font-size: 1.2rem;
    font-weight: 300;
    padding: 1.3rem 0.5rem;
    &:hover div {
      display: block;
    }
  }

  div {
    display: none;
    position: absolute;
    top: 65px;
    left: 0;
    width: 100%;
    border: 1px solid #cccccc;
    border-radius: 5px;
    overflow: hidden;
    backdrop-filter: blur(8px) brightness(0.2);
    background-color: var(--color-light-body);
    z-index: 100;
  }

  p {
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
  }

  .link {
    padding: 1.3rem 0.5rem;
    cursor: pointer;
  }
`;

const Logo = styled.img`
  width: 60px;
  aspect-ratio: 1;
  object-fit: contain;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  align-self: center;

  input {
    font-family: inherit;
    width: 30%;
    min-width: 20rem;
    padding: 0.5rem 1rem;
    padding-right: 3rem;
    font-size: 1.2rem;
    border-radius: 8px;
    font-weight: 100;
    border: 1px solid #a3a3a3;
  }

  .search-icon {
    border: none;
    cursor: pointer;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-primary);
    margin-left: -3rem;
  }
`;

export default Nav;
