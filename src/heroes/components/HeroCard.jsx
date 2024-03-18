import React from "react";
import { Link } from "react-router-dom";

const CharactersByHero = ({ alter_ego, characters }) => {
  return alter_ego === characters ? <></> : <p>{characters}</p>;
};

export const HeroCard = ({
  // atributos del objeto heroe
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageUrl = `/heroes/${id}.jpg`;

  return (
    <div className="col animate__animated animate__fadeIn animate__faster">
      <div className="card m-1">
        <div className="row g-0">
          <div className="col-5">
            <Link to={`/hero/${id}`}>
              <img src={heroImageUrl} className="card-img" alt={superhero} />
            </Link>
          </div>
          <div className="col-7">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              <CharactersByHero characters={characters} alter_ego={alter_ego} />
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
              <Link to={`/hero/${id}`}>Mas info..</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
