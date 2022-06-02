import "./Home.css";
import Header from '../Header';
import CardList from "../CardList";
import Footer from '../Footer';
const Home = () => {
  return (
    <div className="Home">
      <Header></Header>
      <CardList></CardList>
      <Footer></Footer>
    </div>
  );
};

export default Home;
