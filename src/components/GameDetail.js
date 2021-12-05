import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import close from "../img/close.svg";
import leftArrow from "../img/left.svg";
import rightArrow from "../img/right.svg";
import {
  smallImage,
  platformNameToSvg,
  esrpRatingSvg,
  ratingToStars,
  emptyStars,
  storeImages,
  reverseDate,
} from "../util";
import metacritic from "../img/metacritic.svg";
import { useEffect, useState, useRef } from "react";
import Game from "./Game";
import { fadeAnim } from "../animations";
import { useDispatch } from "react-redux";
import { detailGames } from "../actions/detailAction";
import smoothscroll from "smoothscroll-polyfill";

let i = 0;

function GameDetail() {
  const history = useHistory();
  const location = useLocation();

  const rightArrowRef = useRef(null);
  const leftArrowRef = useRef(null);
  const containerRef = useRef(null);

  const { detail, screenshots, series, isLoading } = useSelector(
    (store) => store.detail
  );

  const [galleryPic, setGalleryPic] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => setGalleryPic(screenshots[0]?.image), [screenshots]);

  useEffect(() => {
    if (Object.keys(detail).length === 0)
      dispatch(detailGames(location.pathname.split("/").slice(-1)));
  }, [dispatch, detail, location.pathname]);

  const exitDetailHandler = (e) => {
    if (e.target.classList.contains("close")) {
      document.body.style.overflow = "auto";
      history.push(location.pathname.split("/").slice(0, -2).join("/"));
    }
  };

  const carousel = (e) => {
    //VARIABLES

    const containerWidth = containerRef.current.offsetWidth;
    const width =
      containerRef.current.childNodes.length *
      containerRef.current.childNodes[0].offsetWidth;
    let scrollLeft = containerWidth * i;

    //EVALUATING COUNTER
    if (
      e.target.classList.contains("right") &&
      scrollLeft + containerWidth < width
    )
      i += 1;

    if (e.target.classList.contains("left") && scrollLeft > 0) i -= 1;

    scrollLeft = containerWidth * i;

    //SCROLLING CONTAINER
    smoothscroll.polyfill(
      containerRef.current.scrollTo({
        left: containerWidth * i,
        behavior: "smooth",
      })
    );

    //ACTIVATING/DEACTIVATING BUTTONS
    scrollLeft + containerWidth < width
      ? (rightArrowRef.current.style.display = "inline-block")
      : (rightArrowRef.current.style.display = "none");

    scrollLeft === 0
      ? (leftArrowRef.current.style.display = "none")
      : (leftArrowRef.current.style.display = "inline-block");
  };

  return (
    <ModalContainer
      onClick={exitDetailHandler}
      className="close"
      variants={fadeAnim}
      initial="hidden"
      animate="show"
    >
      {isLoading ? (
        <LoadingSpinner>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </LoadingSpinner>
      ) : (
        <Detail variants={fadeAnim}>
          <div className="svg close">
            <img
              src={close}
              alt="close icon"
              className="close"
              onClick={exitDetailHandler}
            />
          </div>

          <Media>
            <img
              src={detail.background_image}
              alt="Game cover"
              className="main-img"
            />

            <Stats>
              <h3>{detail.name}</h3>
              <p>
                {detail.publishers
                  .map((publisher) => publisher.name)
                  .join(", ")}
              </p>
            </Stats>

            <Platforms>
              {detail.parent_platforms?.map((data) => (
                <img
                  key={data.platform.id}
                  src={platformNameToSvg(data.platform.name)}
                  alt="platforms"
                ></img>
              ))}
            </Platforms>
          </Media>

          <RatingContainer>
            <div className="ratings">
              <div className="empty">
                {emptyStars()}
                <div className="full">
                  {ratingToStars(detail.rating).map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
              </div>
              <p>{detail.rating}</p>
            </div>
            <div className="metacritic">
              <img src={metacritic} alt="metacritic logo" />
              <p>{detail.metacritic}</p>
            </div>
            <div className="esrb">
              <img
                src={esrpRatingSvg(detail.esrb_rating?.id)}
                alt="esrp rating"
              />
            </div>
          </RatingContainer>

          <Table>
            <table>
              <tbody>
                <tr>
                  <td className="left">Platform:</td>
                  <td>
                    {detail.parent_platforms
                      ?.map((platform) => platform.platform.name)
                      .join(", ")}
                  </td>
                </tr>
                <tr>
                  <td className="left">Release:</td>
                  <td>{reverseDate(detail.released)}</td>
                </tr>
                <tr>
                  <td className="left">Publisher:</td>
                  <td>
                    {detail.publishers
                      .map((publisher) => publisher.name)
                      .join(", ")}
                  </td>
                </tr>
                <tr>
                  <td className="left">Genres:</td>
                  <td>
                    {detail.genres?.map((genre) => genre.name).join(", ")}
                  </td>
                </tr>
                <tr>
                  <td className="left">Website:</td>
                  <td>
                    <a href={detail.website} target="_blank" rel="noreferrer">
                      {detail.website}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

            <table>
              <tbody>
                <tr>
                  <td className="left">Developers:</td>
                  <td>
                    {detail.developers
                      ?.map((developer) => developer.name)
                      .join(", ")}
                  </td>
                </tr>
                <tr>
                  <td className="left">Tags:</td>
                  <td>
                    {detail.tags
                      .map((tag) => tag.name)
                      .slice(0, 4)
                      .join(", ")}
                  </td>
                </tr>

                <tr>
                  <td className="left">Metacritic:</td>
                  <td>
                    <a
                      href={detail.metacritic_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {detail.metacritic_url}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </Table>

          <Description>
            {detail.background_image_additional && (
              <img
                src={smallImage(detail.background_image_additional, 1920)}
                alt="addtional game cover"
              />
            )}
            <p>{detail.description_raw}</p>
          </Description>

          <h4>Gallery</h4>

          <Gallery>
            <img src={galleryPic} alt="Gallery" className="gallery-pic" />
            <div>
              <div className="container" ref={containerRef}>
                {screenshots?.map((screenshot) => (
                  <img
                    ref={rightArrowRef}
                    src={smallImage(screenshot.image, 640)}
                    key={screenshot.id}
                    alt="Screenshots of the game"
                    onClick={() => setGalleryPic(screenshot.image)}
                  />
                ))}
              </div>
            </div>
            <img
              ref={leftArrowRef}
              src={leftArrow}
              alt="left arrow"
              className="arrow left"
              onClick={carousel}
            />
            <img
              ref={rightArrowRef}
              src={rightArrow}
              alt="right arrow"
              className="arrow right"
              onClick={carousel}
            />
          </Gallery>

          {series.length !== 0 && (
            <>
              <h4>Other Games in the Series</h4>
              <Series>
                {series?.map(
                  (game) =>
                    game.name &&
                    game.id &&
                    game.background_image &&
                    game.genres && (
                      <Game
                        name={game.name}
                        img={game.background_image}
                        genres={game.genres}
                        key={game.id}
                        id={game.id}
                        metacritic={game.metacritic}
                      />
                    )
                )}
              </Series>
            </>
          )}

          {detail.stores[0] && <h4>Available on</h4>}
          <Stores>
            {detail.stores
              .filter((store) =>
                ["PlayStation Store", "Xbox Store", "Steam"].includes(
                  store.store?.name
                )
              )
              .map((store, i) => (
                <a
                  key={i}
                  href={`https://${store.store.domain}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={storeImages(store.store.name)}
                    alt="Stores to purchase games"
                  />
                </a>
              ))}
          </Stores>
        </Detail>
      )}
    </ModalContainer>
  );
}

const ModalContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;

  backdrop-filter: blur(6px) brightness(0.4);
  position: fixed;
  top: 0;
  left: 0;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgray;
    border-radius: 50px;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--color-light-body);
    border-radius: 50px;
  }
  z-index: 20000;
`;

const Detail = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 10%;
  width: 80%;
  height: max-content;
  /* overflow-y: auto; */
  background: var(--color-light-body);
  padding-bottom: 5rem;
  color: var(--color-light-font);
  z-index: 20000;

  .svg {
    width: 32px;
    position: absolute;
    top: 0.5%;
    right: 1.5%;
    cursor: pointer;
    z-index: 2000;

    &:hover {
      transform: scale(1.05);
    }

    img {
      display: block;
    }
    /* @media screen and (max-width: 31.25em) {
      top: 0%;
      right: 0%;
    } */
  }

  h4 {
    width: max-content;
    text-align: center;
    font-size: 2rem;
    font-weight: 300;
    margin: 5rem auto;
    margin-top: 10rem;
    border-radius: 5px;
    background-color: var(--color-primary);
    color: #ffffff;
    padding: 0.3rem 3rem;
  }

  @media screen and (max-width: 68.75em) {
    width: 100%;
    left: 0;
  }
`;

const Stats = styled(motion.div)`
  background: var(--color-primary);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  width: max-content;
  max-width: 35rem;
  padding: 2rem;
  position: absolute;
  top: 90%;
  left: 5%;

  h3 {
    font-size: 3rem;
    font-weight: 300;
    line-height: 1;
  }

  @media screen and (max-width: 31.25em) {
    width: 50%;
  }
`;

const RatingContainer = styled.div`
  display: flex;
  margin-left: auto;
  width: max-content;
  align-items: flex-start;
  gap: 2rem;
  padding: 1rem;

  .ratings {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 30px;

      @media screen and (max-width: 53.125em) {
        width: 20px;
      }

      @media screen and (max-width: 40.625em) {
        width: 10px;
      }
    }

    .empty {
      position: relative;
    }

    .full {
      position: absolute;
      top: 0;
      left: 0;
    }

    p {
      font-size: 2rem;
      font-weight: 700;
    }
  }

  .metacritic {
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 35px;
      object-fit: cover;

      @media screen and (max-width: 40.625em) {
        width: 20px;
      }
    }

    p {
      font-size: 2rem;
      font-weight: 700;
    }
  }

  .esrb {
    img {
      width: 64px;
      object-fit: cover;

      @media screen and (max-width: 53.125em) {
        width: 50px;
      }

      @media screen and (max-width: 40.625em) {
        width: 30px;
      }
    }
  }
`;

const Platforms = styled(motion.div)`
  width: min-content;
  margin-left: auto;
  padding: 0.5rem 1rem;
  background: #ffffffa9;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;

  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1000;

  img {
    width: 36px;
  }

  @media screen and (max-width: 53.125em) {
    img {
      width: 20px;
    }
  }
`;

const Media = styled(motion.div)`
  position: relative;
  .main-img {
    width: 100%;
    height: 40rem;
    object-fit: cover;
    object-position: center;
  }
`;

const Description = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: 5rem auto;
  width: 70%;
  max-width: 80rem;
  line-height: 1.6;
  color: var(--color-light-font);

  @media screen and (max-width: 40.625em) {
    width: 100%;
    padding: 0 5rem;
  }

  @media screen and (max-width: 31.25em) {
    padding: 0 3rem;
  }

  p {
    margin: 0 auto;
    column-count: 2;
    @media screen and (max-width: 40.625em) {
      width: 80%;
    }
  }

  img {
    width: 100%;
    object-fit: cover;
    margin-bottom: 3rem;
  }
`;

const Series = styled.div`
  width: 70%;
  max-width: 80rem;
  margin: 0 auto;
  margin-bottom: 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  row-gap: 1rem;
  column-gap: 1rem;
  justify-items: center;
  justify-content: center;

  img {
    width: 100%;
  }

  @media screen and (max-width: 68.75em) {
    grid-template-columns: repeat(auto-fill, 150px);
  }

  @media screen and (max-width: 53.125em) {
    grid-template-columns: repeat(auto-fill, 125px);
  }

  @media screen and (max-width: 40.625em) {
    grid-template-columns: repeat(auto-fill, 100px);
    width: 100%;
    padding: 0 5rem;
  }

  @media screen and (max-width: 31.25em) {
    padding: 0 3rem;
  }
`;

const Table = styled.div`
  display: flex;
  justify-content: center;
  margin: 10rem auto;
  font-weight: 400;
  padding: 0 5rem;

  td {
    font-size: 1.2rem;
    padding-left: 1rem;
    max-width: 30ch;

    @media screen and (max-width: 87.5em) {
      font-size: 1rem;
    }
  }

  td a {
    text-decoration: underline;

    &:hover {
      color: var(--color-primary);
    }
  }

  @media screen and (max-width: 40.625em) {
    flex-direction: column;
    width: 60%;
    margin-top: 5rem;

    .left {
      width: 10rem;
    }
  }

  @media screen and (max-width: 31.25em) {
    flex-direction: column;
    width: 90%;
    margin-top: 7rem;

    .left {
      width: 10rem;
    }
  }
`;

const Stores = styled(motion.div)`
  width: 80%;
  max-width: 50em;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 0 2rem;

  a {
    background-color: #fff;
    height: 200px;
    box-shadow: 0 3px 10px #00000026;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    border-radius: 6px;
    will-change: transform;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.03);
    }
  }

  img {
    width: 250px;
    object-fit: cover;
  }

  @media screen and (max-width: 68.75em) {
    width: 70%;

    img {
      width: 200px;
    }

    a {
      height: 150px;
    }
  }

  @media screen and (max-width: 53.125em) {
    img {
      width: 150px;
    }

    a {
      height: 100px;
    }
  }

  @media screen and (max-width: 40.625em) {
    img {
      width: 80px;
    }

    a {
      height: 50px;
    }
  }
`;

const LoadingSpinner = styled(motion.div)`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Gallery = styled(motion.div)`
  width: 70%;
  max-width: 80rem;
  margin: 0 auto;
  position: relative;

  @media screen and (max-width: 40.625em) {
    width: 100%;
    padding: 0 5rem;
  }

  @media screen and (max-width: 31.25em) {
    padding: 0 3rem;
  }

  .gallery-pic {
    width: 100%;
  }

  .container {
    display: flex;
    overflow-x: hidden;
    margin-bottom: 5rem;

    img {
      width: 33.33%;
      cursor: pointer;
      border: 4px solid var(--color-light-body);
      opacity: 0.9;
      will-change: opacity;
      transition: opacity 0.1s;

      &:hover {
        opacity: 1;
        border: 4px solid var(--color-primary);
      }
    }
  }
  .arrow {
    padding: 0.4rem;
    position: absolute;
    top: 85%;
    border-radius: 50%;
    background-color: var(--color-primary);
    box-shadow: 0 2px 10px #00000057;
    cursor: pointer;
    will-change: transform;
    transition: transform 0.1s;

    &:hover {
      transform: scale(1.02);
      background-color: var(--color-primary-dark);
    }

    &:active {
      transform: scale(0.98);
      background-color: var(--color-primary-dark);
    }

    @media screen and (max-width: 68.75em) {
      transform: scale(0.8);
      top: 81%;

      &:hover {
        transform: scale(0.82);
      }

      &:active {
        transform: scale(0.78);
      }
    }

    @media screen and (max-width: 53.125em) {
      transform: scale(0.7);
      top: 83%;

      &:hover {
        transform: scale(0.72);
      }

      &:active {
        transform: scale(0.68);
      }
    }

    @media screen and (max-width: 40.625em) {
      top: 81%;
    }

    @media screen and (max-width: 31.25em) {
      top: 78%;
    }
  }
  .left {
    left: -1.6%;

    @media screen and (max-width: 68.75em) {
      left: -3%;
    }

    @media screen and (max-width: 40.625em) {
      left: 3%;
    }

    @media screen and (max-width: 31.25em) {
      left: 1%;
    }
  }

  .right {
    right: -1.6%;

    @media screen and (max-width: 68.75em) {
      right: -3%;
    }

    @media screen and (max-width: 40.625em) {
      right: 3%;
    }

    @media screen and (max-width: 31.25em) {
      right: 1%;
    }
  }
`;

export default GameDetail;
