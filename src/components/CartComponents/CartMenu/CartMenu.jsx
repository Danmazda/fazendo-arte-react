import "./CartMenu.css";
import { useState, useContext } from "react";
import { BsBag } from "react-icons/bs";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../../Contexts/CartProvider";
import { LoginContext } from "../../../Contexts/LoginProvider";
const CartMenu = () => {
  const { isSignedIn } = useContext(LoginContext);
  const { cart } = useContext(CartContext);
  const [cartMenuOpen, setCartMenuOpen] = useState(false);
  const getTotal = (total, element) => {
    return total + element.product.price * element.quantity;
  };
  return (
    <section>
      {isSignedIn && (
        <div>
          <div
            className="bag"
            onClick={() => {
              setCartMenuOpen(!cartMenuOpen);
            }}
          >
            <BsBag></BsBag>
          </div>
          <div className={`cartMenu ${!cartMenuOpen && "hidden"}`}>
            {cart.length === 0 ? (
              <h2>Não há itens no carrinho.</h2>
            ) : (
              <>
                <ul>
                  {cart.map((element, index) => {
                    return <CartItem key={index} element={element} />;
                  })}
                </ul>
                <p>
                  Total: {`R$${cart.reduce(getTotal, 0).toFixed(2).replace(".", ",")}`}
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default CartMenu;
