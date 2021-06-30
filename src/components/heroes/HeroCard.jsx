import React from "react";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="col">
      <div class="card">
        <img
          src={`assets/heroes/${id}.jpg`}
          class="card-img-top"
          alt={`${superhero}__image`}
        />
        <div class="card-body">
          <h5 class="card-title">{superhero}</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </div>
  );
};
