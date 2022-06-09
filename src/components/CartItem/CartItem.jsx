import "./CartItem.css";
import { useContext } from "react";
import { CartContext } from "../../views/Home";
import { cartActions } from "../../services/actions";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

const CartItem = ({ element }) => {
  const { cartDispatch } = useContext(CartContext);
  return (
    <div className="cartItem">
      <img
        src={element.product.image}
        alt={`${element.product.fragrance} no carrinho`}
        className="cartItem__image"
      />
      <p>{element.product.fragrance}</p>
      <div className="cartItem__control">
        <AiOutlinePlusCircle
          className="clickable"
          onClick={() => {
            cartDispatch({ type: cartActions.ADD, id: element.product._id });
          }}
        />
        <p>{element.quantity}</p>
        <AiOutlineMinusCircle
          className="clickable"
          onClick={() => {
            cartDispatch({ type: cartActions.REMOVE, id: element.product._id });
          }}
        />
        <BsFillTrashFill
          className="clickable"
          onClick={() => {
            cartDispatch({
              type: cartActions.REMOVEALL,
              id: element.product._id,
            });
          }}
        />
      </div>
    </div>
  );
};

export default CartItem;
