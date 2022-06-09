import "../../styles/main.css";
import { useState, useReducer, createContext } from "react";
import Header from "../../components/Header/Header";
import CardList from "../../components/CardList/CardList";
import Footer from "../../components/Footer/Footer";
import CartMenu from "../../components/CartMenu/CartMenu";
import LoginProvider from "../../Contexts/LoginProvider";
import MessageProvider from "../../Contexts/MessageProvider";
import { cartReducer } from "../../services/reducers";

export const CartContext = createContext();
const Home = () => {
  const [cart, cartDispatch] = useReducer(cartReducer, []);
  const [searchQuery, setSearchQuery] = useState(new RegExp("", "i"));

  const getSearch = (event) => {
    setSearchQuery(new RegExp(`${event.target.value}`, "i"));
  };

  return (
    <main className="Home">
      <MessageProvider>
        <LoginProvider>
          <Header getSearch={getSearch}></Header>
          <CartContext.Provider value={{ cart, cartDispatch }}>
            <CardList searchQuery={searchQuery}></CardList>
            <CartMenu></CartMenu>
          </CartContext.Provider>
        </LoginProvider>
      </MessageProvider>
      <Footer></Footer>
    </main>
  );
};

export default Home;
