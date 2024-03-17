import React, { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { HeroCard } from "../components/HeroCard";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../helpers/getHeroesByName";

export const SearchPage = () => {
  const [busco, setBusco] = useState(false);
  const navigate = useNavigate();
  const onNavigateBack = () => {
    navigate(-1);
  };
  const onResetSearch = (event) => {
    event.preventDefault();
    setBusco(false);
    setSearchParams({});
  };

  const [searchParams, setSearchParams] = useSearchParams(); //esto se hace asi nomas
  const query = useMemo(() => searchParams.get("q"), [searchParams.get("q")]); //obtengo el valor q este en el query q en la url
  const heroes = useMemo(() => (query ? getHeroesByName(query) : []), [query]); //asi obtengo los heroes si existe una query, : sino arreglo vacio
  const { searchText, onInputChange } = useForm({
    searchText: query || '',
  });

  const inputValue = searchText.trim();

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (inputValue.length < 1 || !inputValue) return;
    setSearchParams({ q: inputValue });
    setBusco(true);
    // como su nombre le indica, le paso parametro por parametro, el valor de cada uno
  };
  return (
    <>
      <div className="d-flex align-items-center mt-5  animate__animated animate__zoomInDown animate__faster">
        <button onClick={() => onNavigateBack()} className="btn btn-primary">
          Back
        </button>
        <h1 className="mx-3">Search</h1>
      </div>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search by name</h4>
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <div className="d-flex mt-1">
              <button className="btn btn-outline-primary mt-2">Search</button>
            </div>
          </form>
          <button
            onClick={(e) => {
              onResetSearch(e);
            }}
            className="btn btn-outline-danger mt-2"
          >
            Reset?
          </button>
        </div>
        <div className="col-7">
          <h4>Results</h4>

          <div className="overflow-hidden p-1">
            {(query === null || query.length === 0) ? (
              <div className="alert alert-primary">Search for heroes</div>
            ) : (
              heroes.length === 0 && busco && (
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
    </>
  );
};
