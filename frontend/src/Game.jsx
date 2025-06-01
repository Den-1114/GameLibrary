import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function GamePage() {
  const { id } = useParams();
  const [info, setInfo] = useState();

  useEffect(() => {
    axios.get(`http://localhost:3000/info/${id}`).then((response) => {
      setInfo(response.data[0]);
    });
  }, []);

  return (
    <div className="game-thingy">
      <div className="game-card-detailed">
        {info ? (
          <>
            <h1 className="game-title">{info.title}</h1>
            <img src={info.photo} alt={info.title} className="game-cover" />
            <p className="game-description">{info.description}</p>
            <p className="game-detail">
              <strong>Genre:</strong> {info.genre}
            </p>
            <p className="game-detail">
              <strong>Platform:</strong> {info.platform}
            </p>
            <p className="game-price">{info.price}$</p>
          </>
        ) : (
          <p className="loading">Loading game info...</p>
        )}
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default GamePage;
