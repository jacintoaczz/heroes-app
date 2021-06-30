import React from "react";
import { HeroesList } from "../components/heroes/HeroesList";

export const MarvelPage = () => {
  return (
    <>
      <h1>Marvel Page</h1>
      <hr className="divider" />

      <HeroesList publisher="Marvel Comics" />
    </>
  );
};
