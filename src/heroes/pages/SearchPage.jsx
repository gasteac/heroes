import React, { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { HeroCard } from "../components/HeroCard";

import { getHeroesByName } from "../helpers/getHeroesByName";

export const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams(); //esto se hace asi nomas
  const [input, setInput] = useState(searchParams.get("q"));
  const query = searchParams.get("q") != null ? searchParams.get("q") : "";
  const heroes = useMemo(() => (query ? getHeroesByName(query) : []), [query]); //asi obtengo los heroes si existe una query, : sino arreglo vacio
  const navigate = useNavigate();
  const onNavigateBack = () => {
    navigate(-1);
  };
  const onResetSearch = () => {
    setInput("");
    setSearchParams({});
  };

  const showSearch = query.length === 0;
  const onInputChange = ({ target }) => {
    setInput(target.value);
  };
  const onSearchSubmit = (event) => {
    event.preventDefault();
    setSearchParams({ q: input });
    // como su nombre le indica, le paso parametro por parametro, el valor de cada uno
  };
  return (
    <>
      <div className="mt-5">
        <div className="d-flex align-items-center animate__animated animate__animated animate__fadeInLeft  animate__faster ">
          <button onClick={() => onNavigateBack()} className="btn btn-primary">
            Back
          </button>
          <h1 className="mx-3">Search</h1>
        </div>
        <hr />
        <div className="row">
          <div className="col-5">
            <h4>Search hero by name</h4>
            <form onSubmit={onSearchSubmit}>
              <input
                type="text"
                placeholder="For example: super, wonder"
                className="form-control"
                autoComplete="off"
                value={input || ""}
                onChange={onInputChange}
              />
              <div className="d-flex mt-1">
                <button className="btn btn-primary mt-2">Search</button>
              </div>
            </form>
            <button
              onClick={() => {
                onResetSearch();
              }}
              className="btn btn-danger mt-2"
            >
              Reset?
            </button>
          </div>
          <div className="col-7">
            <h4>Results</h4>

            <div className="overflow-hidden p-1">
              {showSearch ? (
                <div className="alert alert-primary">Search for heroes</div>
              ) : (
                heroes.length === 0 && (
                  <div className="alert alert-danger">
                    No hero was found with <b>{query}</b>{" "}
                  </div>
                )
              )}
              {heroes.map((hero) => (
                <HeroCard key={hero.id} {...hero} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
