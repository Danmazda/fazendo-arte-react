import "../../styles/main.css";
import { useEffect, useState, useReducer, createContext } from "react";
import LoginMenu from "../../components/LoginMenu";
import Header from "../../components/Header";
import CardList from "../../components/CardList";
import Footer from "../../components/Footer";
import CartMenu from "../../components/CartMenu";
import MessageModal from "../../components/Modals/MessageModal/MessageModal";
import { cartReducer } from "../../services/reducers";

export const MessageContext = createContext();
export const CartContext = createContext();
export const LoginContext = createContext();
const Home = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [message, setMessage] = useState({message: "", show: ""});
  const [cart, cartDispatch] = useReducer(cartReducer, []);
  const [searchQuery, setSearchQuery] = useState(new RegExp("", "i"));
  const showMessage = (message) => {
    setMessage({message, show: 'show'});
    setTimeout(() => {
      setMessage({message: "", show: ""})
    }, 5000);
  };
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
      <Header getSearch={getSearch} setLoginOpen={setLoginOpen}></Header>
      <MessageContext.Provider value={{ message, setMessage, showMessage }}>
        <MessageModal></MessageModal>

        <LoginContext.Provider value={{ isSignedIn, setIsSignedIn }}>
          <CartContext.Provider value={{ cart, cartDispatch }}>
            <LoginMenu
              loginOpen={loginOpen}
              setLoginOpen={setLoginOpen}
            ></LoginMenu>

            <CardList searchQuery={searchQuery}></CardList>
            <CartMenu></CartMenu>
          </CartContext.Provider>
        </LoginContext.Provider>
      </MessageContext.Provider>
      <Footer></Footer>
    </div>
  );
};

export default Home;
