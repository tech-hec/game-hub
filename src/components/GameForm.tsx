import { Button } from "@chakra-ui/react";
import axios from "axios";
import React, { FormEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GameForm = () => {
  /*   const nameRef = useRef<HTMLInputElement>(null);
  const boozeRef = useRef<HTMLInputElement>(null);
  const number_of_playersRef = useRef<HTMLInputElement>(null);
  const durationRef = useRef<HTMLInputElement>(null);
  const equipementRef = useRef<HTMLInputElement>(null);
  const preparationRef = useRef<HTMLInputElement>(null);
  const gameplayRef = useRef<HTMLInputElement>(null);
  const best_suited_forRef = useRef<HTMLInputElement>(null); */

  const [game, setGame] = useState({
    name: "",
    booziness: "",
    number_of_players: 2,
    best_suited_for: "",
    duration: 30,
    equipement: "",
    preparation: "",
    gameplay: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setGame((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // if (nameRef.current !== null) game.name = nameRef.current.value;
    // if (boozeRef.current !== null) game.booziness = boozeRef.current.value;
    // if (number_of_playersRef.current !== null)
    //   game.number_of_players = parseInt(number_of_playersRef.current.value);
    // if (durationRef.current !== null)
    //   game.duration = parseInt(durationRef.current.value);
    // if (equipementRef.current !== null)
    //   game.equipement = equipementRef.current.value;
    // if (preparationRef.current !== null)
    //   game.preparation = preparationRef.current.value;
    // if (gameplayRef.current !== null) game.gameplay = gameplayRef.current.value;
    // if (best_suited_forRef.current !== null)
    //   game.best_suited_for = best_suited_forRef.current.value;

    try {
      console.log(game);
      await axios.post("http://localhost:8800/games", game);
      navigate("/calculategame");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <h1>Add new game</h1>
        <input
          type="text"
          placeholder="name"
          onChange={handleChange}
          name="name"
        />
        <br />
        <input
          type="text"
          placeholder="booziness"
          onChange={handleChange}
          name="booziness"
        />
        <br />
        <input
          type="number"
          placeholder="number of players"
          onChange={handleChange}
          name="number_of_players"
        />
        <br />
        <input
          type="text"
          placeholder="best suited for"
          onChange={handleChange}
          name="best_suited_for"
        />
        <br />
        <input
          type="number"
          placeholder="duration"
          onChange={handleChange}
          name="duration"
        />
        <br />
        <input
          type="text"
          placeholder="equipement"
          onChange={handleChange}
          name="equipement"
        />
        <br />
        <input
          type="text"
          placeholder="preparation"
          onChange={handleChange}
          name="preparation"
        />
        <br />
        <input
          type="text"
          placeholder="gameplay"
          onChange={handleChange}
          name="gameplay"
        />
        <br />
      </div>
      <form onSubmit={handleSubmit}>
        {/*      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} id="name" type="text" className="fomr-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="booziness" className="form-label">
          Booziness
        </label>
        <input
          ref={boozeRef}
          id="booziness"
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
      </div> */}

        <Button
          className="btn btn-primary"
          type="submit"
          onClick={handleSubmit}
        >
          Submit!
        </Button>
      </form>
    </>
  );
};

export default GameForm;
