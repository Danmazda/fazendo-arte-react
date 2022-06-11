import "./DeleteModal.css";
import { apiRequestsProducts } from "../../../services/api";
import { MessageContext } from "../../../Contexts/MessageProvider";
import { useContext } from "react";
const DeleteModal = ({ deleteOpen, setDeleteOpen, product }) => {
  const { showMessage } = useContext(MessageContext);
  const deleteProduct = async (id) => {
    const response = await apiRequestsProducts.deleteProduct(id);
    if (response.message === "Deleted") {
      showMessage("Deleted");
    } else {
      showMessage("Erro ao deletar!");
    }
  };
  return (
    <>
      {deleteOpen && (
        <div className="DeleteModal">
          <div className='modalContainer'>
          <h2>{`Certeza que deseja excluir ${product.fragrance}?`}</h2>
          <button
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
