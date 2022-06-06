import "./CartMenu.css";
import { useState, useEffect } from "react";
import { BsBag } from "react-icons/bs";
import { apiRequestsUsers } from "../../services/api";
const CartMenu = () => {
  const [cartMenuOpen, setCartMenuOpen] = useState(false);
  useEffect(() => {
    apiRequestsUsers.getUserByEmail();
  }, []);

  return (
    <section>
      <div className="bag">
        <BsBag
          onClick={() => {
            setCartMenuOpen(!cartMenuOpen);
            apiRequestsUsers.getUserByEmail();
          }}
        ></BsBag>
      </div>
      <div className={`cartMenu ${!cartMenuOpen && "hidden"}`}>
        <h2>CartMenu</h2>
        <ul></ul>
      </div>
    </section>
  );
};

export default CartMenu;
