import "../../styles/main.css";
import { useState } from "react";
import Header from "../../components/Header";
import CardList from "../../components/CardList";
import Footer from "../../components/Footer";
const Home = () => {
  const [searchQuery, setSearchQuery] = useState(new RegExp("", "i"));
  const getSearch = (event) => {
    setSearchQuery(new RegExp(`${event.target.value}`, "i"));
  };
  return (
    <div className="Home">
      <Header getSearch={getSearch}></Header>
      <CardList searchQuery={searchQuery}></CardList>
      <Footer></Footer>
    </div>
  );
};

export default Home;
