import "./AdminList.css";
import { apiRequestsProducts } from "../../../services/api";
import CreateModal from "../../Modals/CreateModal/CreateModal";
import { useEffect, useState } from "react";
import AdminCard from "../AdminCard/AdminCard";
const AdminList = ({ searchQuery }) => {
  console.log(document.forms);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [productToChange, setProductToChange] = useState({});
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const products = await apiRequestsProducts.getProducts();
    setProducts(products);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <section className="AdminList">
      {products.map((pr, index) => {
        if (searchQuery.test(pr.fragrance)) {
          return <AdminCard {...pr} key={index} />;
        } else {
          return <span key={index}></span>;
        }
      })}
      <button
        onClick={() => {
          setCreateOpen(true);
        }}
      >
        Criar novo produto
      </button>
      <CreateModal
        createOpen={createOpen}
        setCreateOpen={setCreateOpen}
      ></CreateModal>
    </section>
  );
};
export default AdminList;
