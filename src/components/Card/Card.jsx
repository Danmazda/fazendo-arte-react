import "./Card.css";
import { useState, useContext } from "react";
import { CartContext } from "../../views/Home/Home";
import { MessageContext } from '../../Contexts/MessageProvider';
import { cartActions } from "../../services/actions";

const Card = ({
  fragrance,
  description,
  image,
  price,
  _id,
  products,
}) => {
  const [showBt, setShowBt] = useState(false);
  const { cart, cartDispatch } = useContext(CartContext);
  const { showMessage} = useContext(MessageContext);
  const addProductToCart = (id) => {
    const find = cart.find((p) => p.product._id === id);
    if (!find) {
      cartDispatch({ type: cartActions.ADDNEW, id, products });
    } else {
      cartDispatch({ type: cartActions.ADD, id });
    }
  };
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
              addProductToCart(_id);
              showMessage(`${fragrance} adicionada ao carrinho.`);
              
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
