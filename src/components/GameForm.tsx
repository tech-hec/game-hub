import React, { FormEvent, useRef } from "react";

export const GameForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const boozeRef = useRef<HTMLInputElement>(null);
  const number_of_playersRef = useRef<HTMLInputElement>(null);
  const durationRef = useRef<HTMLInputElement>(null);
  const equipementRef = useRef<HTMLInputElement>(null);
  const preparationRef = useRef<HTMLInputElement>(null);
  const gameplayRef = useRef<HTMLInputElement>(null);
  const best_suited_forRef = useRef<HTMLInputElement>(null);

  const game = {
    name: "",
    boozines: "",
    number_of_players: 2,
    duration: 30,
    equipement: "",
    preparation: "",
    gameplay: "",
    best_suited_for: "",
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null) game.name = nameRef.current.value;
    if (boozeRef.current !== null) game.boozines = boozeRef.current.value;
    if (number_of_playersRef.current !== null)
      game.number_of_players = parseInt(number_of_playersRef.current.value);
    if (durationRef.current !== null)
      game.duration = parseInt(durationRef.current.value);
    if (equipementRef.current !== null)
      game.equipement = equipementRef.current.value;
    if (preparationRef.current !== null)
      game.preparation = preparationRef.current.value;
    if (gameplayRef.current !== null) game.gameplay = gameplayRef.current.value;
    if (best_suited_forRef.current !== null)
      game.best_suited_for = best_suited_forRef.current.value;
    console.log(game);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} id="name" type="text" className="fomr-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="boozines" className="form-label">
          Boozines
        </label>
        <input
          ref={boozeRef}
          id="boozines"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="best-suited-for" className="form-label">
          Best suited for
        </label>
        <input
          ref={best_suited_forRef}
          id="best-suited-for"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="number-of-players" className="form-label">
          Number of players
        </label>
        <input
          ref={number_of_playersRef}
          id="number-of-players"
          type="number"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="duration" className="form-label">
          Duration
        </label>
        <input
          ref={durationRef}
          id="duration"
          type="number"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="equipement" className="form-label">
          Equipement
        </label>
        <input
          ref={equipementRef}
          id="equipement"
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="preparation" className="form-label">
          Preparation
        </label>
        <input
          ref={preparationRef}
          id="preparation"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="gameplay" className="form-label">
          Gameplay
        </label>
        <input
          ref={gameplayRef}
          id="gameplay"
          type="text"
          className="form-control"
        />
      </div>

      <button className="btn btn-primary" type="submit">
        Submit!
      </button>
    </form>
  );
};

export default GameForm;
