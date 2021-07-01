import React, { useMemo } from "react";
import queryString from "query-string";

import { useLocation } from "react-router-dom";
import { HeroCard } from "../components/heroes/HeroCard";
import { useForm } from "../hooks/useForm";
import { getHeroesByName } from "../selectors/getHeroesByName";

export const SearchPage = ({ history }) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const [{ search }, reset, handleInputChange] = useForm({ search: q });
  const filteredHeroes = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim().length <= 2) {
      return;
    }

    history.push(`?q=${search}`);
  };

  return (
    <>
      <h1>Search page</h1>
      <hr className="divider" />

      <div className="row">
        <div className="col-5">
          <h4>Search form</h4>
          <hr className="divider" />

          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="search"
              placeholder="Find your hero..."
              className="form-control"
              onChange={handleInputChange}
              value={search}
              autoComplete="off"
            />

            <button className="btn mt-1 btn-outline-primary">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Search results</h4>
          <hr className="divider" />

          {q === "" && <div className="alert alert-info">Search a hero...</div>}

          {q !== "" && filteredHeroes.length === 0 && (
            <div className="alert alert-danger">
              {`There's no hero with the name ${q}`}
            </div>
          )}

          {filteredHeroes.map((hero) => {
            return <HeroCard key={hero.id} {...hero} />;
          })}
        </div>
      </div>
    </>
  );
};
