import playstation from "../img/playstation_card.svg";
import xbox from "../img/xbox_card.svg";
import steam from "../img/steam_card.svg";
import playstationBg from "../img/playstation_background.jpg";
import xboxBg from "../img/xbox_background.jpg";
import steamBg from "../img/steam_background.jpg";
import bg from "../img/background.jpg";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchGames } from "../actions/searchAction";

function PlatformCards() {
  const dispatch = useDispatch();

  return (
    <StyledPlatformCards>
      {/* <h2>Browse by platforms</h2> */}
      <div className="card-container">
        <div className="cards ps">
          <img src={playstation} alt="platform logo Playstation" />
          <Link
            to="/results"
            onClick={() => dispatch(searchGames("", 1, "", "", "", "", 2))}
          >
            <button className="btn">Explore All &rarr;</button>
          </Link>
        </div>
        <div className="cards xbox">
          <img src={xbox} alt="platform logo xbox" />
          <Link
            to="/results"
            onClick={() => dispatch(searchGames("", 1, "", "", "", "", 3))}
          >
            <button className="btn">Explore All &rarr;</button>
          </Link>
        </div>
        <div className="cards pc">
          <img src={steam} alt="platform logo Steam" />{" "}
          <Link
            to="/results"
            onClick={() => dispatch(searchGames("", 1, "", "", "", "", 1))}
          >
            <button className="btn">Explore All &rarr;</button>
          </Link>
        </div>
      </div>
    </StyledPlatformCards>
  );
}

const StyledPlatformCards = styled(motion.div)`
  width: 100%;
  max-height: 50rem;
  background-image: url(${bg});
  background-size: cover;
  background-position: 0% 30%;
  margin: 7.5rem 0;
  margin-bottom: 10rem;
  padding: 10rem 0;

  .card-container {
    max-width: 120rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  .cards {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
    aspect-ratio: 1;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 1px 50px #ffffff2d;
    background-size: cover;
    background-position: right;
    background-blend-mode: soft-light;
    will-change: transform;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.02);
    }

    img {
      width: 100%;
      height: 100px;
    }

    @media screen and (max-width: 68.75em) {
      width: 25%;
    }

    @media screen and (max-width: 68.75em) {
      img {
        height: 80px;
      }
    }
  }

  .btn {
    margin-top: 2rem;
    font-size: 1rem;
    background: #ffffffa0;
    padding: 0.5rem 1.5rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    will-change: color, background;
    transition: all 0.2s;

    &:hover {
      color: #fff;
      background: var(--color-primary);
    }

    @media screen and (max-width: 68.75em) {
      font-size: 0.8rem;
    }
  }

  .ps {
    background-image: url(${playstationBg}),
      linear-gradient(to bottom, transparent, #000);
  }

  .xbox {
    background-image: url(${xboxBg}),
      linear-gradient(to bottom, transparent, #000);
  }

  .pc {
    background-image: url(${steamBg}),
      linear-gradient(to bottom, transparent, #000);
  }
`;

export default PlatformCards;
