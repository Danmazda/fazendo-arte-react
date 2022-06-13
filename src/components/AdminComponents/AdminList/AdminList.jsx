import "./AdminList.css";
import { apiRequestsProducts } from "../../../services/api";
import CreateModal from "../../Modals/CreateModal/CreateModal";
import DeleteModal from "../../Modals/DeleteModal/DeleteModal";
import UpdateModal from "../../Modals/UpdateModal/UpdateModal";
import { useEffect, useState } from "react";
import AdminCard from "../AdminCard/AdminCard";
const AdminList = ({ searchQuery }) => {
  const [updateOpen, setUpdateOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [productToChange, setProductToChange] = useState({});
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const productsFetch = await apiRequestsProducts.getProducts();
    setProducts([...productsFetch]);
  };
  const getProductToChange = (id) => {
    setProductToChange(products.find((p) => p._id === id));
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <section className="AdminList">
      <div className="adminContainer">
      {products.map((pr, index) => {
        if (searchQuery.test(pr.fragrance)) {
          return (
            <AdminCard
              {...pr}
              key={index}
              getProductToChange={getProductToChange}
              setDeleteOpen={setDeleteOpen}
              setUpdateOpen={setUpdateOpen}
            />
          );
        } else {
          return <span key={index}></span>;
        }
      })}
      </div>
      <button
        onClick={() => {
          setCreateOpen(true);
        }}
        className="create"
      >
        Criar novo produto
      </button>
      <CreateModal
        createOpen={createOpen}
        setCreateOpen={setCreateOpen}
      ></CreateModal>
      <UpdateModal
        updateOpen={updateOpen}
        setUpdateOpen={setUpdateOpen}
        product={productToChange}
      />
      <DeleteModal
        deleteOpen={deleteOpen}
        setDeleteOpen={setDeleteOpen}
        product={productToChange}
      ></DeleteModal>
    </section>
  );
};
export default AdminList;
