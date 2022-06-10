import "../../styles/main.css";
import { useState } from "react";

import CardList from "../../components/CardList/CardList";

import CartMenu from "../../components/CartMenu/CartMenu";


const Home = () => {
  const [searchQuery, setSearchQuery] = useState(new RegExp("", "i"));

  const getSearch = (event) => {
    setSearchQuery(new RegExp(`${event.target.value}`, "i"));
  };

  return (
    <main className="Home">
            <CardList searchQuery={searchQuery}></CardList>
            <CartMenu></CartMenu>
    </main>
  );
};

export default Home;
