import "./CardList.css";
import Card from "../Card";
import "./CardList.css";
import { useState, useEffect } from "react";
const CardList = ({ searchQuery }) => {
  const [message, setMessage] = useState({ message: "", display: "hidden" });
  const [productCart, setProductCart] = useState([]);
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const request = await fetch(
      "https://apifazendoarte-production.up.railway.app/aromatizador/all"
    );
    const response = await request.json();
    response.sort((a, b) => {
      console.log(a.fragrance);
      return a.fragrance.localeCompare(b.fragrance);
    });
    setProducts(response);
  };
  //Mount component
  useEffect(() => {
    getProducts();
  }, []);

  const addProductToCart = (id) => {
    const index = productCart.findIndex((p) => p.id === id);
    if (index === -1) {
      const toAdd = { id, quantity: 1 };
      productCart.push(toAdd);
    } else {
      productCart[index].quantity += 1;
    }
    setProductCart([...productCart]);
  };

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
              addItem={addProductToCart}
              showMessage={showMessage}
            />
          );
        } else {
          return <span key={index}></span>;
        }
      })}

      <div className="cart">
        {productCart.map((product, index) => (
          <div key={index}>
            <h3>{product.id}</h3>
            <p>{product.quantity}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default CardList;
