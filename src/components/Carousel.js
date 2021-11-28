import { useRef, useEffect } from "react";
import styled from "styled-components";
import leftArrow from "../img/left.svg";
import rightArrow from "../img/right.svg";
import useWindowSize from "../components/useWindowSize";

const remToPixel = (rem) =>
  rem * parseFloat(getComputedStyle(document.documentElement).fontSize);

function Carousel({ GamesParentRef, GamesRef }) {
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);

  const i = useRef(0);

  const windowSize = useWindowSize();

  useEffect(() => {
    i.current = 0;
    GamesRef.current.scrollTo({
      left: 0,
      behavior: "smooth",
    });
    rightArrowRef.current.style.display = "inline-block";
    leftArrowRef.current.style.display = "none";
  }, [windowSize, GamesRef]);

  const clickHandler = (e) => {
    //VARIABLES
    const containerWidth = GamesRef.current.clientWidth;
    const width =
      (GamesParentRef.current.childNodes[0]?.offsetWidth + remToPixel(2)) *
        GamesParentRef.current.childNodes.length -
      remToPixel(2);
    let scrollLeft = (containerWidth - containerWidth * 0.1) * i.current;

    //EVALUATING COUNTER
    if (
      e.target.classList.contains("right") &&
      scrollLeft + containerWidth < width
    )
      i.current += 1;

    if (e.target.classList.contains("left") && scrollLeft > 0) i.current -= 1;

    scrollLeft = (containerWidth - containerWidth * 0.1) * i.current;

    //SCROLLING CONTAINER
    GamesRef.current.scrollTo({
      left: (containerWidth - containerWidth * 0.1) * i.current,
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
    <Arrows>
      <img
        ref={leftArrowRef}
        src={leftArrow}
        alt="left arrow"
        className="arrow left"
        style={{ display: "none" }}
        onClick={clickHandler}
      />
      <img
        ref={rightArrowRef}
        src={rightArrow}
        alt="right arrow"
        className="arrow right"
        onClick={clickHandler}
      />
    </Arrows>
  );
}
const Arrows = styled.div`
  .arrow {
    padding: 0.4rem;
    position: absolute;
    top: 38%;
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
    left: -1%;
  }

  .right {
    right: -1%;
  }
`;

export default Carousel;
