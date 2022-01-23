import styled from "styled-components";
import { motion } from "framer-motion";
import { detailGames } from "../actions/detailAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { smallImage } from "../util";

function Game({ name, img, genres, id, metacritic }) {
  const dispatch = useDispatch();

  const location = useLocation();

  const loadDetailHandler = () => {
    dispatch(detailGames(id));
    document.body.style.overflow = "hidden";
  };

  return (
    <StyledGame onClick={loadDetailHandler}>
      <Link
        // to={`${location.pathname === "/" ? "" : location.pathname}/game/${id}`}
        to={`${
          location.pathname === "/"
            ? ""
            : location.pathname.split("/")[2] === "game"
            ? `/${location.pathname.split("/")[1]}`
            : location.pathname.split("/")[1] === "game"
            ? ""
            : location.pathname
        }/game/${id}`}
      >
        <div className="img-cont">
          <img src={smallImage(img, 640)} alt="" />
        </div>
        <div className="flex">
          <div className="left">
            <h3>{name}</h3>
            <p>
              {genres
                .slice(0, 3)
                .map((genre) => genre.name)
                .join(", ")}
            </p>
          </div>
          {metacritic && (
            <div className="right">
              <p className="metacritic">{metacritic}</p>
            </div>
          )}
        </div>
      </Link>
    </StyledGame>
  );
}

const StyledGame = styled(motion.div)`
  cursor: pointer;

  :hover img {
    transform: scale(1.05);
  }

  img {
    /* flex: 300px; */
    display: block;
    width: 250px;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;
    border-radius: 8px;
    box-shadow: 0 1px 8px #00000026;
    will-change: transform;
    transition: transform 0.2s ease-out;

    @media screen and (max-width: 68.75em) {
      width: 150px;
    }

    @media screen and (max-width: 53.125em) {
      width: 125px;
    }

    @media screen and (max-width: 40.625em) {
      width: 100px;
    }
  }

  .img-cont {
    overflow-x: hidden;
    overflow-y: hidden;
    -webkit-overflow-x: hidden;
    -webkit-overflow-y: hidden;
    border-radius: 8px;
    position: relative;
    /* z-index: 10; */
  }

  .flex {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
  }

  .metacritic {
    color: #fff;
    background-image: linear-gradient(to bottom right, #6397d8, #4486d8);
    font-weight: 500;
    padding: 0.2rem 0.3rem;
    /* border: 1px solid var(--color-primary); */
    border-radius: 3px;
  }

  .left {
    @media screen and (max-width: 40.625em) {
      width: 70px;
    }
  }
`;

export default Game;
