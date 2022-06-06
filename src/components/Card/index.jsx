import "./Card.css";
import { useState } from "react";
const Card = ({
  fragrance,
  description,
  image,
  price,
  _id,
  addItem,
  showMessage,
}) => {
  const [showBt, setShowBt] = useState(false);
  return (
    <div
      className="Card"
      onMouseOver={() => setShowBt(true)}
      onMouseLeave={() => {
        setShowBt(false);
      }}
    >
      <img
        src={image}
        alt=""
        className={`Card__Img ${showBt && "Card__Img--opacity"}`}
      />
      <h3 className="Card__Title">{fragrance}</h3>
      <p className="Card__Price">R${price.toFixed(2).replace(".", ",")}</p>
      {showBt && (
        <div className="Card__action">
          <p className="Card__Description">{description}</p>

          <button
            onClick={() => {
              addItem(_id);
              showMessage(`${fragrance} adicionado ao carrinho.`);
            }}
          >
            Comprar
          </button>
        </div>
      )}
    </div>
  );
};
export default Card;
