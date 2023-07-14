import React, { useEffect, useState } from "react";

const GameList = () => {
  const [games, setGames] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching products");
    setGames(["Beerpong", '"100-spørsmål"']);
  }, []);

  return <div>GameList</div>;
};

export default GameList;
