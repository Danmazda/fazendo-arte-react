import "./CartMenu.css";
import { useState, useEffect, useCallback} from "react";
import { BsBag } from "react-icons/bs";
import { apiRequestsUsers } from "../../services/api";
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from "react-icons/ai";
const CartMenu = ({ cart, setCart, isSignedIn }) => {
  const [cartMenuOpen, setCartMenuOpen] = useState(false);
  const getCart = useCallback(
    async () => {
      const data = await apiRequestsUsers.getUserCart();
      const {cart} = data;
      if(cart){
        setCart(cart);
      }else{
        console.log(data);
      }
    }, [setCart]
  );
  useEffect(()=>{
    console.log(isSignedIn);
    if(isSignedIn){
      getCart();
    }
  }, [isSignedIn, getCart]); 
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
              {cart.map((element, index) => {
                return (
                  <div className="cartItem" key={index}>
                    <img src={element.product.image} alt={`${element.product.fragrance} no carrinho`}  className="cartItem__image"/>
                    <p>{element.product.fragrance}</p>
                    <div className="cartItem__control">
                    <AiOutlinePlusCircle/>
                      <p>{element.quantity}</p>
                    <AiOutlineMinusCircle/>
                    </div>
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
