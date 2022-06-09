import "../../styles/main.css";
import { useState, useReducer, createContext } from "react";
import LoginMenu from "../../components/LoginMenu/LoginMenu";
import Header from "../../components/Header/Header";
import CardList from "../../components/CardList/CardList";
import Footer from "../../components/Footer/Footer";
import CartMenu from "../../components/CartMenu/CartMenu";
import MessageModal from "../../components/Modals/MessageModal/MessageModal";
import SignupMenu from "../../components/SignupMenu/SingupMenu";
import LoginProvider from '../../Contexts/LoginProvider';
import { cartReducer } from "../../services/reducers";

export const MessageContext = createContext();
export const CartContext = createContext();
const Home = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
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
 

  return (
    <main className="Home">
      <MessageContext.Provider value={{ message, setMessage, showMessage }}>
        <MessageModal></MessageModal>
        <LoginProvider>
      <Header getSearch={getSearch} setLoginOpen={setLoginOpen}></Header>

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
        </LoginProvider>
      </MessageContext.Provider>
      <Footer></Footer>
    </main>
  );
};

export default Home;
