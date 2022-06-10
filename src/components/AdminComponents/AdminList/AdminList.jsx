import { apiRequestsProducts } from "../../../services/api";
import { useEffect, useState } from "react";
import AdminCard from '../AdminCard/AdminCard';
const AdminList = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const products = await apiRequestsProducts.getProducts();
    setProducts(products);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return <section>
    {products.map(p=><AdminCard/>)}
  </section>;
};
export default AdminList;