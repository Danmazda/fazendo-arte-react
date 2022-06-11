import "./DeleteModal.css";
import { apiRequestsProducts } from '../../../services/api';
const DeleteModal = ({deleteOpen, setDeleteOpen, toDelete}) => {
  const deleteProduct = async(id) =>{
  }
  return (
    <>
    {deleteOpen && <div className='DeleteModal'>
      {`Certeza que deseja excluir ${toDelete.fragrance}?`}
      <button onClick={()=>{
        deleteProduct(toDelete._id);
      }}>Sim</button>
      <button onClick={()=>{
        setDeleteOpen(false);
      }}>Não</button>
    </div>}
    </>
    
  );
};

export default DeleteModal;