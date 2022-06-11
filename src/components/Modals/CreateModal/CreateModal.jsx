import "./CreateModal.css";
import { apiRequestsProducts } from "../../../services/api";
import { MessageContext } from "../../../Contexts/MessageProvider";
import { useContext, useState } from "react";
const CreateModal = ({ createOpen, setCreateOpen, product }) => {
  const { showMessage } = useContext(MessageContext);
  const [fragrance, setFragrance] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await apiRequestsProducts.createProduct(
      fragrance,
      description,
      price,
      image
    );
    if (response.message) {
      showMessage("Erro ao criar produto");
    } else {
      showMessage("Produto criado com sucesso");
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
      {createOpen && (
        <form className="CreateModal" onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="fragrance">Tipo:</label>
            <input
              type="text"
              name="fragrance"
              required
              onChange={handleFragranceChange}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="description">Descrição:</label>
            <input
              type="text"
              name="description"
              required
              onChange={handleDescriptionChange}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="price">Preço:</label>
            <input
              type="number"
              name="price"
              required
              onChange={handlePriceChange}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="image">Imagem:</label>
            <input
              type="url"
              name="image"
              required
              onChange={handleImageChange}
            />
          </fieldset>
          <button type="submit">Send</button>
        </form>
      )}
    </>
  );
};

export default CreateModal;
