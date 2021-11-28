import left from "../img/leftPagination.svg";
import right from "../img/rightPagination.svg";
import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useCallback } from "react";

function Pagination({
  query,
  noOfPages,
  apiSortParam,
  currentPage,
  setCurrentPage,
  action,
}) {
  const [pagesOnDisplayFirst, setPagesOnDisplayFirst] = useState(0);
  const [pagesOnDisplay, setPagesOnDisplay] = useState([]);

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const dispatch = useDispatch();

  const toggleArrows = useCallback(() => {
    if (currentPage === 1) {
      leftRef.current.style.display = "none";
      rightRef.current.style.display = "inline-block";
    } else if (currentPage === noOfPages) {
      rightRef.current.style.display = "none";
      leftRef.current.style.display = "inline-block";
    } else {
      leftRef.current.style.display = "inline-block";
      rightRef.current.style.display = "inline-block";
    }
  }, [leftRef, rightRef, currentPage, noOfPages]);

  useEffect(() => {
    if (noOfPages > 1) {
      setPagesOnDisplayFirst(currentPage > 3 ? currentPage - 3 : 1);
      const arr = [];
      for (let i = pagesOnDisplayFirst; i <= pagesOnDisplayFirst + 7; i++) {
        if (i > 0 && i <= noOfPages) arr.push(i);
      }
      setPagesOnDisplay(arr);
      toggleArrows();
    }
  }, [currentPage, pagesOnDisplayFirst, noOfPages, toggleArrows]);

  const loadPage = (page) => {
    return () => {
      dispatch(action(query, page, apiSortParam));
      toggleArrows();
      setCurrentPage(page);
    };
  };

  return (
    <>
      {noOfPages > 1 && (
        <StyledPagination>
          <img
            ref={leftRef}
            src={left}
            alt="left arrow"
            onClick={loadPage(currentPage - 1)}
            className="arrow left"
          />
          {pagesOnDisplay.includes(1) ? (
            ""
          ) : (
            <div className="first-page">
              <button
                className={1 === currentPage ? "active" : ""}
                onClick={loadPage(1)}
              >
                1
              </button>
              ...
            </div>
          )}
          <div className="pages">
            {pagesOnDisplay?.map((page, i) => (
              <button
                className={
                  i + pagesOnDisplayFirst === currentPage ? "active" : ""
                }
                key={page}
                onClick={loadPage(page)}
              >
                {page}
              </button>
            ))}
          </div>
          {pagesOnDisplay.includes(noOfPages) ? (
            ""
          ) : (
            <div className="first-page">
              ...
              <button
                className={noOfPages === currentPage ? "active" : ""}
                onClick={loadPage(noOfPages)}
              >
                {noOfPages}
              </button>
            </div>
          )}
          <img
            ref={rightRef}
            src={right}
            alt="right arrow"
            onClick={loadPage(currentPage + 1)}
            className="arrow right"
          />
        </StyledPagination>
      )}{" "}
    </>
  );
}

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 5rem 0;

  .arrow {
    cursor: pointer;
  }

  button {
    font-size: 1.2rem;
    background: #fff;
    border: none;
    color: var(--color-primary);
    cursor: pointer;
    padding: 0.5rem 1rem;
  }

  .pages {
    display: flex;
    gap: 1rem;

    .active {
      background: var(--color-primary);
      color: #fff;
    }
  }
`;

export default Pagination;
