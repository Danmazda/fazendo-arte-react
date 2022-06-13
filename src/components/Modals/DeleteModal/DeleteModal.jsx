import "./DeleteModal.css";
import { apiRequestsProducts } from "../../../services/api";
import { MessageContext } from "../../../Contexts/MessageProvider";
import { useContext } from "react";

const DeleteModal = ({ deleteOpen, setDeleteOpen, product, getProducts }) => {
  const { showMessage } = useContext(MessageContext);
  const deleteProduct = async (id) => {
    const response = await apiRequestsProducts.deleteProduct(id);
    if (response.message === "Deleted") {
      showMessage(`${product.fragrance} deletado com sucesso`);
      setDeleteOpen(false);
      getProducts();
    } else {
      showMessage("Erro ao deletar!");
    }
  };
  return (
    <>
      {deleteOpen && (
        <div className="DeleteModal modifyModal">
          <div className='modalContainer'>
          <h2>{`Certeza que deseja excluir ${product.fragrance}?`}</h2>
          <button
          className='confirm'
            onClick={() => {
              deleteProduct(product._id);
            }}
          >
            Sim
          </button>
          <button
            onClick={() => {
              setDeleteOpen(false);
            }}
            className="delete"
          >
            Não
          </button>
          </div>
         
        </div>
      )}
    </>
  );
};

export default DeleteModal;
