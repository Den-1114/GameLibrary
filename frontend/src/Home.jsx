import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Game({ img_src, name, price }) {
  return (
    <div className="game">
      <div className="gameImg">
        <img src={img_src} />
      </div>
      <p className="name">{name}</p>
      <p className="price">{price}</p>
    </div>
  );
}

function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((response) => (setGames(response.data)));
  }, []);


  return (
    <>
      <h1>GAMES LIBRARY</h1>
      <hr></hr>
      <div className="lib">
        {games.map((game) => (
          <Link to={`/game/${game._id}`}>
            <Game
              key={game._id}
              img_src={game.photo}
              name={game.title}
              price={game.price + "$"}
            />
          </Link>
        ))}
      </div>
      <a href="http://localhost:5173/upload">Upload game</a>
    </>
  );
}

export default Home;
