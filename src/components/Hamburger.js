import styled from "styled-components";
import hamburger from "../img/bars-solid.svg";
import { latestGames } from "../actions/latestAction";
import { upcomingGames } from "../actions/upcomingAction";
import { popularGames } from "../actions/popularAction";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import close from "../img/close_ham.svg";
import { useState } from "react";

function Hamburger() {
  const [menuOpen, setMenuOpen] = useState(false);

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <StyledHamburger>
      <img src={hamburger} alt="hamburger icon" onClick={toggleMenuHandler} />
      {menuOpen && (
        <div className="hamburger-menu">
          <div className="close">
            <img
              src={close}
              alt="close icon"
              className="svg"
              onClick={toggleMenuHandler}
            />
          </div>
          <ul>
            <li className="main-li">
              <Link
                className="link"
                to="/latest"
                onClick={() => {
                  dispatch(latestGames());
                  setMenuOpen(!menuOpen);
                }}
              >
                Latest Releases
              </Link>
            </li>

            <li className="main-li">
              <Link
                className="link"
                to="/upcoming"
                onClick={() => {
                  dispatch(upcomingGames());
                  setMenuOpen(!menuOpen);
                }}
              >
                Upcoming Releases
              </Link>
            </li>

            <li className="main-li">
              <Link
                className="link"
                to="/popular"
                onClick={() => {
                  dispatch(popularGames());
                  setMenuOpen(!menuOpen);
                }}
              >
                Popular Releases
              </Link>
            </li>
          </ul>
        </div>
      )}
    </StyledHamburger>
  );
}

const StyledHamburger = styled.div`
  width: 20px;
  align-self: center;
  display: none;
  margin: 0 0.2rem;

  .close {
    position: absolute;
    top: 0;
    right: 0;
  }

  .hamburger-menu {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 10000;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(8px) brightness(0.2);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 40.625em) {
    display: block;
  }
`;

export default Hamburger;
