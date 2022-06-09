import "../../styles/main.css";
import { useEffect, useState, useReducer, createContext } from "react";
import LoginMenu from "../../components/LoginMenu";
import Header from "../../components/Header";
import CardList from "../../components/CardList";
import Footer from "../../components/Footer";
import CartMenu from "../../components/CartMenu";
import MessageModal from "../../components/Modals/MessageModal/MessageModal";
import SignupMenu from "../../components/SignupMenu/SingupMenu";
import { cartReducer } from "../../services/reducers";

export const MessageContext = createContext();
export const CartContext = createContext();
export const LoginContext = createContext();
const Home = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [message, setMessage] = useState({ message: "", show: "" });
  const [cart, cartDispatch] = useReducer(cartReducer, []);
  const [searchQuery, setSearchQuery] = useState(new RegExp("", "i"));
  const showMessage = (message) => {
    setMessage({ message, show: "show" });
    setTimeout(() => {
      setMessage({ message: "", show: "" });
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
          <SignupMenu
            loginOpen={loginOpen}
            setLoginOpen={setLoginOpen}
            signupOpen={signupOpen}
            setSignupOpen={setSignupOpen}
          ></SignupMenu>
          <LoginMenu
              loginOpen={loginOpen}
              setLoginOpen={setLoginOpen}
              signupOpen={signupOpen}
              setSignupOpen={setSignupOpen}
            ></LoginMenu>
          <CartContext.Provider value={{ cart, cartDispatch }}>
            

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
