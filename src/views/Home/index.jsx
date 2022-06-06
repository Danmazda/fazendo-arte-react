import "../../styles/main.css";
import { useEffect, useState } from "react";
import LoginMenu from "../../components/LoginMenu";
import Header from "../../components/Header";
import CardList from "../../components/CardList";
import Footer from "../../components/Footer";
import CartMenu from "../../components/CartMenu";
const Home = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState(new RegExp("", "i"));
  const getSearch = (event) => {
    setSearchQuery(new RegExp(`${event.target.value}`, "i"));
  };
  useEffect(() => {
    if (localStorage.length !== 0) {
      setIsSignedIn(true);
    }
  },[]);

  return (
    <div className="Home">
      <Header getSearch={getSearch} setLoginOpen={setLoginOpen}></Header>
      <LoginMenu loginOpen={loginOpen} setLoginOpen={setLoginOpen} isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn}></LoginMenu>
      <CardList searchQuery={searchQuery}></CardList>
      <CartMenu cart={cart} setCart={setCart} isSignedIn={isSignedIn}></CartMenu>
      <Footer></Footer>
    </div>
  );
};

export default Home;
