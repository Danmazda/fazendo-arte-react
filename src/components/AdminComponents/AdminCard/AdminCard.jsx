import "./AdminCard.css";
const AdminCard = ({ fragrance, description, price, image }) => {
  
  return (
    <div className="AdminCard">
      <h3>{fragrance}</h3>
      <img src={image} alt="" />
      <p>{description}</p>
      <p>{price.toFixed(2).replace(".", ",")}</p>
      <button>Update</button>
      <button>Delete</button>
    </div>
  );
};

export default AdminCard;
