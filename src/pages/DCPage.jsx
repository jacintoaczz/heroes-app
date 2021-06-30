import React from "react";
import { HeroesList } from "../components/heroes/HeroesList";

export const DCPage = () => {
  return (
    <>
      <h1>DC Page</h1>
      <hr className="divider" />
      <HeroesList publisher="DC Comics" />
    </>
  );
};
