import "./AdminCard.css";
const AdminCard = ({ _id, fragrance, description, price, image, getProductToChange, setUpdateOpen, setDeleteOpen}) => {
  
  return (
    <div className="AdminCard">
      <h3>{fragrance}</h3>
      <img src={image} alt="" />
      <p>{description}</p>
      <p>{price.toFixed(2).replace(".", ",")}</p>
      <button>Update</button>
      <button onClick={()=> {
        getProductToChange(_id);
        setDeleteOpen(true);
      }}>Delete</button>
    </div>
  );
};

export default AdminCard;
