import { apiRequestsProducts } from "../../../services/api";
import { MessageContext } from "../../../Contexts/MessageProvider";
import { useContext, useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";

const UpdateModal = ({ updateOpen, setUpdateOpen, product }) => {
  const { showMessage } = useContext(MessageContext);
  const [fragrance, setFragrance] = useState(product.fragrance);
  const [description, setDescription] = useState(product.description);
  const [image, setImage] = useState(product.image);
  const [price, setPrice] = useState(product.price);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await apiRequestsProducts.updateProduct( product._id,
      fragrance,
      description,
      price,
      image
    );
    if(response.message === "updated"){
      showMessage(`${fragrance} atualizado!`);
    } else{
      showMessage(`Erro ao atualizar!`);
    }
  };
  const handleFragranceChange = (event) => {
    setFragrance(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleImageChange = (event) => {
    setImage(event.target.value);
  };
  return (
    <>
      {updateOpen && (
        <div className="modifyModal">
           <form className="formModal" onSubmit={handleSubmit}>
          <AiFillCloseSquare className='cancel'
            onClick={() => {
              setUpdateOpen(false);
            }}
          />
          <h2>Atualize o produto</h2>
          <fieldset>
            <label htmlFor="fragrance">Tipo:</label>
            <input
              type="text"
              name="fragrance"
              placeholder={`${product.fragrance}`}
              required
              onChange={handleFragranceChange}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="description">Descrição:</label>
            <input
              type="text"
              name="description"
              placeholder={`${product.description}`}

              required
              onChange={handleDescriptionChange}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="price">Preço:</label>
            <input
              type="number"
              name="price"
              placeholder={product.price}
              required
              onChange={handlePriceChange}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="image">Imagem:</label>
            <input
              type="url"
              name="image"
              placeholder={`${product.image}`}
              required
              onChange={handleImageChange}
            />
          </fieldset>
          <button type="submit">Atualizar</button>
        </form>
        </div>
       
      )}
    </>
  );
};

export default UpdateModal;
