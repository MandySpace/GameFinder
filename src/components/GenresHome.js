import { useDispatch } from "react-redux";
import { GENRES_URL } from "../api";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { searchGames } from "../actions/searchAction";

function GenreHome() {
  const [genres, setGenres] = useState([]);

  const dispatch = useDispatch();

  useEffect(
    () =>
      axios
        .get(GENRES_URL)
        .then((res) => setGenres(res.data.results.slice(0, 12))),
    [setGenres]
  );

  return (
    <Genres>
      {genres?.map((genre) => {
        return (
          <Link
            key={genre.id}
            to="/results"
            onClick={() =>
              dispatch(searchGames("", 1, "", "", "", "", "", `${genre.id}`))
            }
          >
            <GenreCard key={genre.id}>
              <div className="bg-container">
                <div className="black-overlay"></div>
                <img src={genre.image_background} alt="genre" />
              </div>
              <div className="info">
                <p>{genre.name}</p>
                <p>{genre.games_count}</p>
              </div>
            </GenreCard>
          </Link>
        );
      })}
    </Genres>
  );
}

const Genres = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  gap: 2rem;
  width: 90%;
  max-width: 120rem;
  margin: 0 auto;
  margin-bottom: 10rem;
  padding: 0 5rem;

  @media screen and (max-width: 31.25em) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    width: 100%;
  }
`;

const GenreCard = styled.div`
  position: relative;
  cursor: pointer;
  box-shadow: 0 1px 8px #00000026;

  :hover p {
    transform: translateY(-10px);
  }
  :hover img {
    opacity: 0.5;
  }

  p {
    color: #ffffffe1;
    text-align: center;
    width: 100%;
    font-size: 1.5rem;
    font-weight: 500;
    text-shadow: 0 10px 50px #0000005c;
    will-change: transform;
    transition: transform 0.2s;
  }

  img {
    display: block;
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 8px;
  }

  .black-overlay {
    background-image: linear-gradient(
      to bottom,
      hsla(0, 0%, 0%, 0) 0%,
      hsla(0, 0%, 0%, 0.102) 7.9%,
      hsla(0, 0%, 0%, 0.202) 15.2%,
      hsla(0, 0%, 0%, 0.3) 22.1%,
      hsla(0, 0%, 0%, 0.395) 28.6%,
      hsla(0, 0%, 0%, 0.486) 34.8%,
      hsla(0, 0%, 0%, 0.572) 40.8%,
      hsla(0, 0%, 0%, 0.653) 46.7%,
      hsla(0, 0%, 0%, 0.728) 52.6%,
      hsla(0, 0%, 0%, 0.795) 58.5%,
      hsla(0, 0%, 0%, 0.854) 64.5%,
      hsla(0, 0%, 0%, 0.904) 70.8%,
      hsla(0, 0%, 0%, 0.945) 77.4%,
      hsla(0, 0%, 0%, 0.975) 84.4%,
      hsla(0, 0%, 0%, 0.994) 91.9%,
      hsl(0, 0%, 0%) 100%
    );
    background-blend-mode: multiply;
    position: absolute;
    inset: 0;
    border-radius: 8px;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default GenreHome;
