import React from "react";
import { heroes } from "../data/heroes";
import { HeroCard } from "../components/heroes/HeroCard";
import { useForm } from "../hooks/useForm";

export const SearchPage = () => {
  const filtteredHeroes = heroes;

  const [{ search }, reset, handleInputChange] = useForm({ search: "" });

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim().length <= 2) {
      return;
    }

    handleInputChange();
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

          {filtteredHeroes.map((hero) => {
            <HeroCard key={hero.id} {...hero} />;
          })}
        </div>
      </div>
    </>
  );
};
