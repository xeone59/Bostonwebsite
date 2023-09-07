

import './Attractions.css';
import React, { useState } from 'react';

import image1 from './images/amanda-murphy-HOo8S172hTA-unsplash.jpg';
import image2 from './images/esaias-tan-YeTnLWZrP30-unsplash.jpg';
import image3 from './images/lindsay-doyle-D3zAp0jTv5w-unsplash.jpg';
import image4 from './images/brie-odom-mabey-hI8Kdw0CkF0-unsplash.jpg';

function Attractions( {setPage} ){

  const [filter, setFilter] = useState("all");

  const cardsData = [
    {id: "1", category: "park", title: "Boston Common", image: image1},
    {id: "2", category: "library", title: "Boston Public Library", image: image2},
    {id: "3", category: "downtown", title: "Downtown", image: image3},
    {id: "4", category: "university", title: "Harvard University", image: image4}
  ];

  const filteredCards = filter === "all" ? cardsData : cardsData.filter(card => card.category === filter);

  return (
    <div className="card-container" id="maincontent">
      <div className="card-filter">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("park")}>Parks</button>
        <button onClick={() => setFilter("library")}>Libraries</button>
        <button onClick={() => setFilter("downtown")}>Downtown</button>
        <button onClick={() => setFilter("university")}>Universities</button>
      </div>
      <div className="card-list">
        {filteredCards.map(card => (
          <div className="card" key={card.id}>
            <img className="attractions__image" src={card.image} alt={card.title} />
            <h2 className="card-title">{card.title}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Attractions;
