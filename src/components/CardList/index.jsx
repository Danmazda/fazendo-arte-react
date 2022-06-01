import "./CardList.css";
import Card from "../Card";
import "./CardList.css";
import products from "../../mock/products";
import { useState } from "react";
const CardList = () => {
  const [action, setAction] = useState({ action: "", display: "hidden" });
  const [productCart, setProductCart] = useState([]);
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
  const showAction = (action) => {
    setAction({ action, display: "" });
    setTimeout(() => {
      setAction({ action: "", display: "hidden" });
    }, 2000);
  };
  return (
    <section id="CardList">
      <div className={`modal ${action.display}`}>{action.action}</div>
      {products.map((pr, index) => (
        <Card
          {...pr}
          key={index}
          addItem={addProductToCart}
          showAction={showAction}
        />
      ))}
      <div className="cart">
        {productCart.map((p, index) => (
          <div key={index}>
            <h3>{p.id}</h3>
            <p>{p.quantity}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default CardList;
