import axios from "axios";
import React, { useEffect, useState } from "react";

const Games = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchAllGames = async () => {
      try {
        const res = await axios.get("http://localhost:8800/games");
        console.log(res, "1");
      } catch (err) {
        console.log(err, "2");
      }
    };
    fetchAllGames();
  }, []);

  return <div>Games!</div>;
};

export default Games;
