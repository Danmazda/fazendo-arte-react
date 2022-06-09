import "./SignupMenu.css";
import { AiFillCloseSquare } from "react-icons/ai";
import { useContext } from "react";
import { LoginContext, MessageContext } from "../../views/Home";
import { apiRequestsUsers } from "../../services/api";
const SignupMenu = ({ loginOpen, setLoginOpen, signupOpen, setSignupOpen }) => {
  const { isSignedIn } = useContext(LoginContext);
  const { showMessage } = useContext(MessageContext);
  const submitHandler = async (event) => {
    event.preventDefault();
    const { name, email, password, password2 } = document.forms[0];
    if (password.value !== password2.value) {
      showMessage("As senhas devem ser iguais!");
      return;
    }
    await apiRequestsUsers.UserSignUp(name.value, email.value, password.value);
    showMessage(
      "Usuário cadastrado com sucesso! Já é possível fazer login na sua conta."
    );
  };
  return (
    <div className={`SignupMenu ${!signupOpen && "hidden"}`}>
      {!isSignedIn && (
        <div>
          <AiFillCloseSquare
            className="cancel"
            onClick={() => {
              setSignupOpen(false);
            }}
          ></AiFillCloseSquare>
          <h2>Cadastre-se:</h2>
          <form onSubmit={submitHandler}>
            <fieldset>
              <label htmlFor="name">Seu nome</label>
              <input type="text" name="name" required />
            </fieldset>
            <fieldset>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" required />
            </fieldset>
            <fieldset>
              <label htmlFor="password">Senha</label>
              <input type="password" name="password" required />
            </fieldset>
            <fieldset>
              <label htmlFor="password2"> Confirme a Senha</label>
              <input type="password" name="password2" required />
            </fieldset>
            <button type="submit">Cadastre-se</button>
            <button
              type="button"
              onClick={() => {
                setLoginOpen(true);
                setSignupOpen(false);
              }}
            >
              Faça Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignupMenu;
