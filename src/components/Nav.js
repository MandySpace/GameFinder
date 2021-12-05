import search from "../img/search.svg";
import logo from "../img/logo.png";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { searchGames } from "../actions/searchAction";
import { latestGames } from "../actions/latestAction";
import { upcomingGames } from "../actions/upcomingAction";
import { popularGames } from "../actions/popularAction";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { buttonHoverAnim, fadeAnim } from "../animations";
import Hamburger from "./Hamburger";
import bulbOff from "../img/bulb-off.svg";
import bulbOn from "../img/bulb-on.svg";
import { useEffect } from "react";

function Nav({ darkTheme, setDarkTheme }) {
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();

  const history = useHistory();

  const location = useLocation();

  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(searchGames(searchQuery));
    history.push("/results");
    setSearchQuery("");
  };

  const changeHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    if (darkTheme) document.documentElement.className = "dark";
    else document.documentElement.className = "light";
  }, [darkTheme]);

  return (
    <StyledNav>
      <Logo src={logo} alt="logo" onClick={() => history.push("/")} />
      <ul className="big-screen">
        <li className="main-li">
          <Link
            className="link"
            to="/latest"
            onClick={() => dispatch(latestGames())}
          >
            Latest Releases
          </Link>
          <Line
            variants={buttonHoverAnim}
            initial="hidden"
            animate={location.pathname === "/latest" ? "show" : ""}
          ></Line>
          <div className="drop">
            <Link
              to="/latest"
              onClick={() => dispatch(latestGames("", 1, "", "", "", "", 2, 7))}
            >
              <p>This Week</p>
            </Link>
            <Link
              to="/latest"
              onClick={() => dispatch(latestGames("", 1, "", "", "", "", 1, 1))}
            >
              <p>This Month</p>
            </Link>
            <Link
              to="/latest"
              onClick={() => dispatch(latestGames("", 1, "", "", "", "", 0, 1))}
            >
              <p>This Year</p>
            </Link>
          </div>
        </li>

        <li className="main-li">
          <Link
            className="link"
            to="/upcoming"
            onClick={() => dispatch(upcomingGames())}
          >
            Upcoming Releases
          </Link>
          <Line
            variants={buttonHoverAnim}
            initial="hidden"
            animate={location.pathname === "/upcoming" ? "show" : ""}
          ></Line>
          <div className="drop">
            <Link
              to="/upcoming"
              onClick={() =>
                dispatch(upcomingGames("", 1, "", "", "", "", 2, 14))
              }
            >
              <p>Next Week</p>
            </Link>
            <Link
              to="/upcoming"
              onClick={() =>
                dispatch(upcomingGames("", 1, "", "", "", "", 1, 1))
              }
            >
              <p>Next Month</p>
            </Link>
            <Link
              to="/upcoming"
              onClick={() =>
                dispatch(upcomingGames("", 1, "", "", "", "", 0, 1))
              }
            >
              <p>Next Year</p>
            </Link>
          </div>
        </li>

        <li className="main-li">
          <Link
            className="link"
            to="/popular"
            onClick={() => dispatch(popularGames())}
          >
            Popular Releases
          </Link>
          <Line
            variants={buttonHoverAnim}
            initial="hidden"
            animate={location.pathname === "/popular" ? "show" : ""}
          ></Line>
          <div className="drop">
            <Link
              to="/popular"
              onClick={() =>
                dispatch(popularGames("", 1, "", "", "", "80,100", 0, 1, 0, 0))
              }
            >
              <p>This Year</p>
            </Link>
            <Link
              to="/popular"
              onClick={() =>
                dispatch(popularGames("", 1, "", "", "", "80,100", 0, 2, 0, 1))
              }
            >
              <p>Last Year</p>
            </Link>
            <Link
              to="/popular"
              onClick={() => dispatch(popularGames("", 1, "", "", "", ""))}
            >
              <p>All Time</p>
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

      <div className="right">
        <div className="theme" onClick={() => setDarkTheme(!darkTheme)}>
          <img src={darkTheme ? bulbOff : bulbOn} alt="theme icon" />
        </div>
        <Hamburger variants={fadeAnim} />
      </div>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  height: 65px;
  display: flex;
  justify-content: space-between;
  color: var(--color-light-font);
  padding: 0rem 2rem;
  border-bottom: 1px solid #cccccc9b;
  position: relative;

  @media screen and (max-width: 53.125em) {
    height: 50px;
  }

  @media screen and (max-width: 31.25em) {
    height: 40px;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-right: auto;
    padding: 2rem;

    @media screen and (max-width: 40.625em) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 6rem;
      margin: 0rem;
    }
  }

  .theme {
    display: flex;
    align-items: center;
    padding-bottom: 0.4rem;

    @media screen and (max-width: 53.125em) {
      img {
        transform: scale(0.7);
      }
    }
  }

  .right {
    display: flex;
    gap: 0.5rem;
    order: 3;
    padding: 0 2rem;

    @media screen and (max-width: 40.625em) {
      order: 0;
    }

    @media screen and (max-width: 31.25em) {
      padding: 0 0.2rem;
    }
  }

  .big-screen {
    order: 2;

    @media screen and (max-width: 40.625em) {
      order: 0;
    }

    @media screen and (max-width: 40.6255em) {
      display: none;
    }
  }

  .main-li {
    position: relative;
    list-style: none;
    font-size: 1.2rem;
    font-weight: 400;
    padding: 1.3rem 0.5rem;

    &:hover div {
      display: block;
    }

    @media screen and (max-width: 68.75em) {
      &:hover .drop {
        display: none;
      }
    }

    @media screen and (max-width: 40.625em) {
      font-size: 4rem;
      will-change: transform;
      transition: transform 0.2s;

      :active {
        transform: scale(0.98);
      }

      a {
        color: #fff;
        text-shadow: 0 3px 20px #000000c7;
      }
    }
  }

  .drop {
    display: none;
    position: absolute;
    top: 65px;
    left: 0;
    width: 100%;
    border: 1px solid #cccccc;
    border-radius: 5px;
    overflow: hidden;
    backdrop-filter: blur(8px) brightness(0.5);
    background-color: #ffffff53;
    z-index: 100;
  }

  p {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 400;
    padding: 0.5rem 1rem;
    will-change: background;
    transition: background 0.2s;

    &:hover {
      background: var(--color-primary);
    }
  }

  .link {
    padding: 1.3rem 0.5rem;
    cursor: pointer;
  }
`;

const Line = styled(motion.div)`
  height: 0.1rem;
  width: 0%;
  background: var(--color-primary);
  position: absolute;
  top: 80%;
  left: 10%;
`;

const Logo = styled.img`
  order: 1;
  width: 60px;
  aspect-ratio: 1;
  object-fit: contain;
  cursor: pointer;

  @media screen and (max-width: 53.125em) {
    width: 40px;
  }

  @media screen and (max-width: 40.625em) {
    order: 0;
  }

  @media screen and (max-width: 31.25em) {
    width: 30px;
  }
`;

const Form = styled.form`
  order: 4;
  display: flex;
  align-self: center;

  @media screen and (max-width: 40.625em) {
    order: 0;
  }

  @media screen and (max-width: 31.25em) {
    padding-left: 2rem;
  }

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

    &:focus {
      outline: 2px solid var(--color-primary);
    }

    @media screen and (max-width: 40.625em) {
      min-width: 40rem;
      font-size: 2rem;
      width: 90%;
    }

    @media screen and (max-width: 31.25em) {
      font-size: 1.8rem;
      min-width: 25rem;
    }
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

    @media screen and (max-width: 68.75em) {
      margin-left: -3.5rem;
    }

    @media screen and (max-width: 53.125em) {
      margin-left: -4rem;
      transform: scale(0.8);
    }

    @media screen and (max-width: 40.625em) {
      margin-left: -4.5rem;
    }

    @media screen and (max-width: 31.25em) {
      margin-left: -5rem;
    }
  }
`;

export default Nav;
