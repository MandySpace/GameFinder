import styled from "styled-components";
import { searchGames } from "../actions/searchAction";
import { latestGames } from "../actions/latestAction";
import { upcomingGames } from "../actions/upcomingAction";
import { popularGames } from "../actions/popularAction";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import twitter from "../img/twitter.svg";
import github from "../img/github.svg";
import gmail from "../img/gmail.svg";

function Footer() {
  const dispatch = useDispatch();

  return (
    <StyledFooter>
      <div className="list-container">
        <div className="list">
          <Link
            className="link"
            to="/latest"
            onClick={() => dispatch(latestGames())}
          >
            <h4>Latest Releases</h4>
          </Link>
          <ul>
            <Link
              to="/latest"
              onClick={() => dispatch(latestGames("", 1, "", "", "", "", 2, 7))}
            >
              <li>This Week</li>
            </Link>
            <Link
              to="/latest"
              onClick={() => dispatch(latestGames("", 1, "", "", "", "", 1, 1))}
            >
              <li>This Month</li>
            </Link>
            <Link
              to="/latest"
              onClick={() => dispatch(latestGames("", 1, "", "", "", "", 0, 1))}
            >
              <li>This Year</li>
            </Link>
          </ul>
        </div>
        <div className="list">
          <Link
            className="link"
            to="/upcoming"
            onClick={() => dispatch(upcomingGames())}
          >
            <h4>Upcoming Releases</h4>
          </Link>
          <ul>
            <Link
              to="/upcoming"
              onClick={() =>
                dispatch(upcomingGames("", 1, "", "", "", "", 2, 14))
              }
            >
              <li>Next Week</li>
            </Link>
            <Link
              to="/upcoming"
              onClick={() =>
                dispatch(upcomingGames("", 1, "", "", "", "", 1, 1))
              }
            >
              <li>Next Month</li>
            </Link>
            <Link
              to="/upcoming"
              onClick={() =>
                dispatch(upcomingGames("", 1, "", "", "", "", 0, 1))
              }
            >
              <li>Next Year</li>
            </Link>
          </ul>
        </div>
        <div className="list">
          <Link
            className="link"
            to="/popular"
            onClick={() => dispatch(popularGames())}
          >
            <h4>Popular Releases</h4>
          </Link>
          <ul>
            <Link
              to="/popular"
              onClick={() =>
                dispatch(popularGames("", 1, "", "", "", "80,100", 0, 1, 0, 0))
              }
            >
              <li>This Year</li>
            </Link>
            <Link
              to="/popular"
              onClick={() =>
                dispatch(popularGames("", 1, "", "", "", "80,100", 0, 2, 0, 1))
              }
            >
              <li>Last year</li>
            </Link>
            <Link
              to="/popular"
              onClick={() => dispatch(popularGames("", 1, "", "", "", ""))}
            >
              <li>All time</li>
            </Link>
          </ul>
        </div>
        <div className="list">
          <Link to="/results" onClick={() => dispatch(searchGames())}>
            <h4>Platforms</h4>
          </Link>
          <ul>
            <Link
              to="/results"
              onClick={() => dispatch(searchGames("", 1, "", "", "", "", 2))}
            >
              <li>Playstation</li>
            </Link>
            <Link
              to="/results"
              onClick={() => dispatch(searchGames("", 1, "", "", "", "", 3))}
            >
              <li>Xbox</li>
            </Link>
            <Link
              to="/results"
              onClick={() => dispatch(searchGames("", 1, "", "", "", "", 1))}
            >
              <li>Steam</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="contact">
        <h5>Contact On</h5>
        <div className="svg-container">
          <div className="svg">
            <a
              href="https://twitter.com/AmanMandy94"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} alt="" />
            </a>
          </div>
          <div className="svg">
            <a
              href="https://github.com/MandySpace"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="" />
            </a>
          </div>
          <div className="svg">
            <a
              href="mailto:amandeepsingh1994@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gmail} alt="" />
            </a>
          </div>
        </div>
      </div>
      <p>© 2021 Amandeep Singh. All rights reserved.</p>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  width: 100%;
  height: 35rem;
  background-color: var(--color-primary-dark);
  color: #fff;
  font-size: 1.2rem;

  h4,
  li,
  .svg {
    will-change: transform;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.05);
    }
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 400;
    cursor: pointer;
    margin-bottom: 2rem;
  }

  p {
    margin-top: 5rem;
    text-align: center;
  }

  li {
    text-align: center;
    list-style: none;
    margin-top: 0.5rem;
    cursor: pointer;
  }

  .list-container {
    margin: 0 auto;
    padding-top: 5rem;
    width: 70%;
    max-width: 120rem;
    display: flex;
    justify-content: center;
    gap: 10rem;
  }

  .contact {
    h5 {
      font-size: 1.5rem;
      font-weight: 400;
      text-align: center;
      margin: 2rem 0;
      margin-top: 5rem;
    }

    .svg-container {
      margin: 0 auto;
      display: flex;
      gap: 5rem;
      justify-content: center;

      img {
        width: 100%;
      }

      .svg {
        width: 50px;
      }
    }
  }
`;

export default Footer;
