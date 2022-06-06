import "../../styles/main.css";
import { useState } from "react";
import LoginMenu from "../../components/LoginMenu";
import Header from "../../components/Header";
import CardList from "../../components/CardList";
import Footer from "../../components/Footer";
import CartMenu from "../../components/CartMenu";
const Home = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(new RegExp("", "i"));
  const getSearch = (event) => {
    setSearchQuery(new RegExp(`${event.target.value}`, "i"));
  };
  return (
    <div className="Home">
      <Header getSearch={getSearch} setLoginOpen={setLoginOpen}></Header>
      <LoginMenu loginOpen={loginOpen} setLoginOpen={setLoginOpen}></LoginMenu>
      <CardList searchQuery={searchQuery}></CardList>
      <CartMenu></CartMenu>
      <Footer></Footer>
    </div>
  );
};

export default Home;
