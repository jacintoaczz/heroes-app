import React, {useMemo} from "react";
import { useParams, Redirect } from "react-router-dom";
import { getHeroById } from "../selectors/getHeroById";

export const HeroPage = ({ history }) => {
  const { heroId } =  useMemo(() => useParams(), [heroId])

  const hero = getHeroById(heroId);
  if (!hero) {
    return <Redirect to="/" />;
  }

  const handleBack = () => {
    if (history.length <= 2) {
      history.push("/marvel");
    }

    history.goBack();
  };

  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  return (
    <>
      <h1>{superhero} page</h1>
      <hr className="divider" />

      <div className="row mt-5">
        <div className="col-4">
          <img
            src={`../assets/heroes/${heroId}.jpg`}
            alt={`${superhero}_image`}
            className="img-thumbnail"
          />
        </div>

        <div className="col-8">
          <h2>{superhero}</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Alter ego: </strong> {alter_ego}
            </li>
            <li className="list-group-item">
              <strong>Publisher: </strong> {publisher}
            </li>
            <li className="list-group-item">
              <strong>First appearance: </strong> {first_appearance}
            </li>
          </ul>

          <h3 className="mt-2">Characters</h3>
          <p>{characters}</p>

          <button className="btn btn-outline-info" onClick={handleBack}>
            Go back
          </button>
        </div>
      </div>
    </>
  );
};
