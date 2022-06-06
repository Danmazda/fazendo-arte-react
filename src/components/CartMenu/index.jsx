import "./CartMenu.css";
import { useState } from "react";
import { BsBag } from "react-icons/bs";
import { apiRequestsUsers } from "../../services/api";
const CartMenu = ({ cart, setCart, isSignedIn }) => {
  const [cartMenuOpen, setCartMenuOpen] = useState(false);
  const getCart = async () => {
    const data = await apiRequestsUsers.getUserCart();
    console.log(data);
    setCart(data);
  };
  return (
    <section>
      {isSignedIn && (
        <div>
          <div
            className="bag"
            onClick={() => {
              setCartMenuOpen(!cartMenuOpen);
              getCart();
            }}
          >
            <BsBag></BsBag>
          </div>
          <div className={`cartMenu ${!cartMenuOpen && "hidden"}`}>
            <h2>CartMenu</h2>
            <ul>
              {cart.map((element, index) => {
                return (
                  <div className="cartItem">
                    <p>{element.product.fragrance}</p>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default CartMenu;
