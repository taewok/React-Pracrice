import React, { useEffect } from "react";

const CardTurn = () => {
    useEffect(() => {
        var card = document.querySelector(".card");
        card.addEventListener("click", function () {
          card.classList.toggle("is-flipped");
        });
      });
  return (
    <div className="card_box">
      <div className="card">
        <div className="card_face card_front">front</div>
        <div className="card_face card_back">back</div>
      </div>
    </div>
  );
};

export default CardTurn;
