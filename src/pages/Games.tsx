import { Heading } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

const Games = () => {
  const [games, setGames] = useState<any[]>([]);

  useEffect(() => {
    const fetchAllGames = async () => {
      try {
        const res = await axios.get("http://localhost:8800/games");
        setGames(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllGames();
  }, []);

  return (
    <div>
      <Heading>Games</Heading>
      <div className="games">
        {games.map((game) => (
          <div className="game" key={game.id}>
            {game.coverimg && <img src={game.coverimg} alt="" />}
            <h2>{game.name}</h2>
            <h2>{game.booziness}</h2>
            <h2>{game.number_of_players}</h2>
            <h2>{game.best_suited_for}</h2>
            <h2>{game.duration}</h2>
            <h2>{game.equipement}</h2>
            <h2>{game.preparation}</h2>
            <h2>{game.gameplay}</h2>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;
