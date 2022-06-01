import "./Card.css";
const Card = ({ fragrance, description, image, price, _id, addItem }) => {
  return (
    <div className="Card">
      <img src={image} alt="" className="Card__Img" />
      <h3 className="Card__Title">{fragrance}</h3>
      <p className="Card__Description">{description}</p>
      <p className="Card__Price">R${price.toFixed(2).replace(".", ",")}</p>
      <div className="Card__action">
        <button onClick={() => addItem(_id)}>Buy</button>
      </div>
    </div>
  );
};
export default Card;
