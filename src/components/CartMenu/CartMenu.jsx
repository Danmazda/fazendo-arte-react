import "./CartMenu.css";
import { useState, useContext } from "react";
import { BsBag } from "react-icons/bs";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../views/Home/Home";
import { LoginContext } from '../../Contexts/LoginProvider';
const CartMenu = () => {
  const { isSignedIn } = useContext(LoginContext);
  const { cart } = useContext(CartContext);
  const [cartMenuOpen, setCartMenuOpen] = useState(false);
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
            <ul>
              {cart.length === 0 ? (
                <h2>Não há itens no carrinho.</h2>
              ) : (
                cart.map((element, index) => (
                  <CartItem key={index} element={element} />
                ))
              )}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default CartMenu;
