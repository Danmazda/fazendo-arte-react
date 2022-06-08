import "../../styles/main.css";
import { useEffect, useState, useReducer, createContext } from "react";
import LoginMenu from "../../components/LoginMenu";
import Header from "../../components/Header";
import CardList from "../../components/CardList";
import Footer from "../../components/Footer";
import CartMenu from "../../components/CartMenu";
import { cartReducer } from '../../services/reducers';

export const CartContext = createContext();
export const LoginContext = createContext();
const Home = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [cart, cartDispatch] = useReducer( cartReducer ,[]);
  const [searchQuery, setSearchQuery] = useState(new RegExp("", "i"));
  const getSearch = (event) => {
    setSearchQuery(new RegExp(`${event.target.value}`, "i"));
  };
  useEffect(() => {
    if (localStorage.length !== 0) {
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  }, []);

  return (
    <div className="Home">
      <LoginContext.Provider value={{isSignedIn, setIsSignedIn}}>
      <CartContext.Provider value={{cart, cartDispatch}}>
      <Header getSearch={getSearch} setLoginOpen={setLoginOpen}></Header>
      <LoginMenu
        loginOpen={loginOpen}
        setLoginOpen={setLoginOpen}
      ></LoginMenu>
    
        <CardList searchQuery={searchQuery}></CardList>
      <CartMenu

      ></CartMenu>
      <Footer></Footer>
      </CartContext.Provider>

      </LoginContext.Provider>
     
    </div>
  );
};

export default Home;
