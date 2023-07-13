import React from "react";

export const GameForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input id="name" type="text" className="fomr-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="boozines" className="form-label">
          Boozines
        </label>
        <input id="boozines" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="equipement" className="form-label">
          Equipement
        </label>
        <input id="equipement" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="duration" className="form-label">
          Duration
        </label>
        <input id="duration" type="number" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="preparation" className="form-label">
          Preparation
        </label>
        <input id="preparation" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="gameplay" className="form-label">
          Gameplay
        </label>
        <input id="gameplay" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="number-of-players" className="form-label">
          Number of players
        </label>
        <input id="number-of-players" type="number" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="best-suited-setting" className="form-label">
          Best suited setting
        </label>
        <input id="best-suited-setting" type="text" className="form-control" />
      </div>
    </form>
  );
};

export default GameForm;
