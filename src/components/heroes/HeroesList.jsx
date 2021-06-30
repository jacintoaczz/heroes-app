import React from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroesList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {heroes.map((hero) => {
        return <HeroCard key={hero.id} {...hero} />;
      })}
    </div>
  );
};
