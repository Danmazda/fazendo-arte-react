import "./CartMenu.css";
import { useState, useContext} from "react";
import { BsBag, BsFillTrashFill } from "react-icons/bs";
import { cartActions } from '../../services/actions';
// import { apiRequestsUsers } from "../../services/api";
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from "react-icons/ai";
import { CartContext, LoginContext } from '../../views/Home';
const CartMenu = () => {
  const {isSignedIn} = useContext(LoginContext);
  const {cart, cartDispatch} = useContext(CartContext);
  const [cartMenuOpen, setCartMenuOpen] = useState(false);
  // const getCart = useCallback(
  //   async () => {
  //     const data = await apiRequestsUsers.getUserCart();
  //     const {cart} = data;
  //     if(cart){
  //       setCart(cart);
  //     }else{
  //       console.log(data);
  //     }
  //   }, [setCart]
  // );
  // useEffect(()=>{
  //   if(isSignedIn){
  //     // getCart();
  //   }
  // }, [isSignedIn]); 
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
                    <AiOutlinePlusCircle className='clickable' onClick={()=>{
                      cartDispatch({type: cartActions.ADD, id: element.product._id});
                    }}/>
                      <p>{element.quantity}</p>
                    <AiOutlineMinusCircle className='clickable' onClick={()=>{
                      cartDispatch({type: cartActions.REMOVE, id: element.product._id});
                    }}/>
                    <BsFillTrashFill className='clickable' onClick={
                      ()=>{
                        cartDispatch({type: cartActions.REMOVEALL, id: element.product._id});
                      }
                    }/>
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
