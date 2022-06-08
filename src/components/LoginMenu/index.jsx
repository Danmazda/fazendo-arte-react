import "./LoginMenu.css";
import { apiRequestsUsers } from "../../services/api";
import { AiFillCloseSquare } from "react-icons/ai";
import { LoginContext } from '../../views/Home';
import { useContext } from 'react';
const LoginMenu = ({ loginOpen, setLoginOpen }) => {
  const {isSignedIn, setIsSignedIn} = useContext(LoginContext);
  const submitHandler = async (event) => {
    event.preventDefault();
    const { email, password } = document.forms[0];
    await apiRequestsUsers.UserSignIn(email.value, password.value);
    setIsSignedIn(true);
  };
  const logOutHandler = () => {
    localStorage.clear();
    setIsSignedIn(false);
  };
  return (
    <div className={`LoginMenu ${!loginOpen && "hidden"}`}>
      <AiFillCloseSquare
        className="cancel"
        onClick={() => {
          setLoginOpen(false);
        }}
      ></AiFillCloseSquare>
      {!isSignedIn ? (
        <div>
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
      ) : (
        <div>
          <h2>Logado como: {localStorage.email}</h2>
          <button onClick={logOutHandler}>Deslogar</button>
        </div>
      )}
    </div>
  );
};

export default LoginMenu;
