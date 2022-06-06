import "./LoginMenu.css";
import { apiRequestsUsers } from "../../services/api";
import { AiFillCloseSquare } from "react-icons/ai";
const LoginMenu = ({ loginOpen, setLoginOpen }) => {
  const submitHandler = async (event) => {
    event.preventDefault();
    const { email, password } = document.forms[0];
    await apiRequestsUsers.UserSignIn(email.value, password.value);
  };
  return (
    <div className={`LoginMenu ${!loginOpen && "hidden"}`}>
      <AiFillCloseSquare
        className="cancel"
        onClick={() => {
          setLoginOpen(false);
        }}
      ></AiFillCloseSquare>
      <form onSubmit={submitHandler}>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" />
        </fieldset>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginMenu;
