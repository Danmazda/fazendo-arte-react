import "./CardList.css";
import Card from "../Card";
import { apiRequestsProducts } from "../../services/api";
import { useState, useEffect} from "react";
const CardList = ({ searchQuery }) => {
  const [message, setMessage] = useState({ message: "", display: "hidden" });
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const data = await apiRequestsProducts.getProducts();
      setProducts(data);
    } catch (error) {
      console.error(error.message);
    }
  };
  //Mount component
  useEffect(() => {
    getProducts();
  }, []);

  const showMessage = (message) => {
    setMessage({ message, display: "" });
    setTimeout(() => {
      setMessage({ message: "", display: "hidden" });
    }, 2000);
  };
  return (
    <section id="CardList">
      <div className={`modal ${message.display}`}>{message.message}</div>
      {products.map((pr, index) => {
        if (searchQuery.test(pr.fragrance)) {
          return (
            <Card
              {...pr}
              key={index}
              showMessage={showMessage}
              products={products}
            />
          );
        } else {
          return <span key={index}></span>;
        }
      })}
    </section>
  );
};
export default CardList;
