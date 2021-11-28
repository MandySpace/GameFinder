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

let i = 0;

function GameDetail() {
  const history = useHistory();
  const location = useLocation();

  const rightArrowRef = useRef(null);
  const leftArrowRef = useRef(null);
  const containerRef = useRef(null);

  const { detail, screenshots, isLoading } = useSelector(
    (store) => store.detail
  );

  const [galleryPic, setGalleryPic] = useState(null);

  useEffect(() => setGalleryPic(screenshots[0]?.image), [screenshots]);

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
    containerRef.current.scrollTo({
      left: containerWidth * i,
      behavior: "smooth",
    });

    //ACTIVATING/DEACTIVATING BUTTONS
    scrollLeft + containerWidth < width
      ? (rightArrowRef.current.style.display = "inline-block")
      : (rightArrowRef.current.style.display = "none");

    scrollLeft === 0
      ? (leftArrowRef.current.style.display = "none")
      : (leftArrowRef.current.style.display = "inline-block");
  };

  return (
    <ModalContainer onClick={exitDetailHandler} className="close">
      {isLoading ? (
        <LoadingSpinner>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </LoadingSpinner>
      ) : (
        <Detail>
          <img
            src={close}
            alt="close icon"
            className="svg close"
            onClick={exitDetailHandler}
          />
          <Media>
            <img src={detail.background_image} alt="Game cover" />

            <Stats>
              <h3>{detail.name}</h3>
              <p>
                {detail.publishers
                  .map((publisher) => publisher.name)
                  .join(", ")}
              </p>
            </Stats>
          </Media>

          <Platforms>
            {detail.parent_platforms?.map((data) => (
              <img
                key={data.platform.id}
                src={platformNameToSvg(data.platform.name)}
                alt="platforms"
              ></img>
            ))}
          </Platforms>

          <RatingContainer>
            <div className="ratings">
              <div className="empty">
                {emptyStars()}
                <div className="full">
                  {ratingToStars(detail.rating).map((star, i) => star)}
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
            <div>
              <p>Platform:</p>
              <p>Release:</p>
              <p>Publisher:</p>
              <p>Genres:</p>
              <p>Website:</p>
            </div>
            <div>
              <p>
                {detail.parent_platforms
                  ?.map((platform) => platform.platform.name)
                  .join(", ")}
              </p>
              <p>{reverseDate(detail.released)}</p>
              <p>
                {detail.publishers
                  .map((publisher) => publisher.name)
                  .join(", ")}
              </p>
              <p>{detail.genres?.map((genre) => genre.name).join(", ")}</p>
              <a href={detail.website} target="_blank" rel="noreferrer">
                {detail.website}
              </a>
            </div>
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

          {detail.stores[0] && <h4>Available on</h4>}
          <Stores>
            {detail.stores
              .filter((store) =>
                ["PlayStation Store", "Xbox Store", "Steam"].includes(
                  store.store?.name
                )
              )
              .map((store) => (
                <a
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
  min-height: 100vh;

  backdrop-filter: blur(8px) brightness(0.4);
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
`;

const Detail = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 10%;
  width: 80%;
  height: max-content;
  background: white;
  padding-bottom: 5rem;

  color: black;

  .svg {
    position: fixed;
    top: 2%;
    right: 12%;
    cursor: pointer;
    background-color: #ffffff1f;
    z-index: 2000;

    &:hover {
      transform: scale(1.05);
    }
  }

  h4 {
    width: max-content;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 300;
    margin: 0 auto;
    margin-bottom: 4rem;
    background-color: var(--color-primary);
    color: #ffffff;
    padding: 0.3rem 3rem;
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
`;

const RatingContainer = styled.div`
  display: flex;
  margin-left: auto;
  width: max-content;
  align-items: flex-end;
  gap: 1rem;
  padding: 1rem;

  .ratings {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 30px;
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
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 50px;
      object-fit: cover;
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
    }
  }
`;

const Platforms = styled(motion.div)`
  width: min-content;
  margin-left: auto;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  background: #ffffffa9;
  margin-top: -3.5rem;
  position: relative;
  z-index: 1000;

  img {
    width: 36px;
  }
`;

const Media = styled(motion.div)`
  position: relative;
  img {
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
  margin-top: 10rem;
  padding: 3rem;
  width: 70%;
  max-width: 80rem;
  line-height: 1.6;
  background-color: #292929;
  color: #fff;

  img {
    width: 100%;
    object-fit: cover;
    margin-bottom: 3rem;
    outline: 10px solid #fff;
  }
`;

const Table = styled.div`
  display: flex;
  width: max-content;
  margin: 10rem auto;
  gap: 5rem;
  font-weight: 400;
  p,
  a {
    font-size: 1.2rem;
  }
`;

const Stores = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 70%;
  max-width: 50em;
  margin: 0 auto;
  gap: 2rem;

  a {
    flex: 1;
  }

  img {
    width: 100%;
    object-fit: cover;
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

  .gallery-pic {
    width: 100%;
  }

  .container {
    display: flex;
    overflow-x: hidden;
    margin-bottom: 10rem;

    img {
      width: 33.33%;
      cursor: pointer;
      border: 4px solid #fff;
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
  }
  .left {
    left: -1.6%;
  }

  .right {
    right: -1.6%;
  }
`;

export default GameDetail;
