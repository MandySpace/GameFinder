import playstation from "../img/playstation_card.svg";
import xbox from "../img/xbox_card.svg";
import steam from "../img/steam_card.svg";
import playstationBg from "../img/playstation_background.jpg";
import xboxBg from "../img/xbox_background.jpg";
import steamBg from "../img/steam_background.jpg";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchGames } from "../actions/searchAction";

function PlatformCards() {
  const dispatch = useDispatch();

  return (
    <StyledPlatformCards>
      <h2>Browse by platforms</h2>
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
  margin-bottom: 10rem;

  h2 {
    text-align: center;
  }

  .card-container {
    width: 90%;
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
    box-shadow: 0 3px 10px #00000034;
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
