import "./CardList.css";
import Card from "../Card";
import { apiRequestsProducts } from "../../services/api";
import { useState, useEffect} from "react";
const CardList = ({ searchQuery }) => {
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

  
  return (
    <section id="CardList">
      {products.map((pr, index) => {
        if (searchQuery.test(pr.fragrance)) {
          return (
            <Card
              {...pr}
              key={index}
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
