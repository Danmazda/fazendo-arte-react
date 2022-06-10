import "../../styles/main.css";
import { useState } from "react";
import SearchInput from '../../components/SearchInput/SearchInput';
import CardList from "../../components/HomeComponents/CardList/CardList";
import CartMenu from "../../components/CartComponents/CartMenu/CartMenu";


const Home = () => {
  const [searchQuery, setSearchQuery] = useState(new RegExp("", "i"));
  const getSearch = (event) => {
    setSearchQuery(new RegExp(`${event.target.value}`, "i"));
  };
  

  return (
    <main className="Home">
            <SearchInput getSearch={getSearch}></SearchInput>
            <CardList searchQuery={searchQuery}></CardList>
            <CartMenu ></CartMenu>
    </main>
  );
};

export default Home;
