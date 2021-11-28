import styled from "styled-components";
import { motion } from "framer-motion";
import { detail } from "../actions/detailAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { smallImage, platformNameToSvg } from "../util";

function Game({ name, img, genres, id, metacritic, platforms }) {
  const dispatch = useDispatch();

  const location = useLocation();

  const loadDetailHandler = () => {
    dispatch(detail(id));
    document.body.style.overflow = "hidden";
  };

  return (
    <StyledGame onClick={loadDetailHandler}>
      <Link
        to={`${location.pathname === "/" ? "" : location.pathname}/game/${id}`}
      >
        {/* <div>
          {platforms?.map((data) => (
            <img
              key={data.platform.id}
              src={platformNameToSvg(data.platform.name)}
              alt="platforms"
            ></img>
          ))}
        </div> */}

        <img src={smallImage(img, 640)} alt="" />
        <div className="flex">
          <div className="left">
            <h3>{name}</h3>
            <p>{genres.map((genre) => genre.name).join(", ")}</p>
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
  position: relative;

  img {
    flex: 300px;
    width: 250px;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;
    border-radius: 8px;
    box-shadow: 0 1px 8px #00000026;
  }

  .flex {
    display: flex;
    gap: 2rem;
  }

  .metacritic {
    align-self: flex-start;
    position: absolute;
    top: 80%;
    right: 0;
    color: var(--color-primary);
    font-weight: 500;
    padding: 0 0.1rem;
    border: 1px solid var(--color-primary);
    border-radius: 3px;
  }
`;

export default Game;
