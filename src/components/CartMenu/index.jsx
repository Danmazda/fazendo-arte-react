import "./CartMenu.css";
import { useState, useContext} from "react";
import { BsBag } from "react-icons/bs";
// import { apiRequestsUsers } from "../../services/api";
import CartItem from '../CartItem/CartItem';
import { CartContext, LoginContext } from '../../views/Home';
const CartMenu = () => {
  const {isSignedIn} = useContext(LoginContext);
  const {cart} = useContext(CartContext);
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
              {cart.map((element, index) => <CartItem index={index} element={element}/>)}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default CartMenu;
