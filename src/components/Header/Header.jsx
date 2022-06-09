import "./Header.css";
import { useContext, useState } from "react";
import SignupMenu from "../../components/SignupMenu/SingupMenu";
import LoginMenu from "../../components/LoginMenu/LoginMenu";
import { LoginContext } from "../../Contexts/LoginProvider";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
const Header = ({ getSearch }) => {
  const { isAdm } = useContext(LoginContext);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  return (
    <header>
      <div className="title">
        <h1>Fazendo Arte</h1>
        <p>com Helena Barcelos</p>
      </div>
      <nav>
        <ul>
          <Link to="/">Início</Link>
          <li>
            <a href="#Products">Produtos</a>
          </li>
          <li>
            <a href="#About">Sobre</a>
          </li>
          <li>
            <a href="#Mail">Contato</a>
          </li>
          {isAdm && <Link to="/admin">Admin</Link>}
        </ul>
      </nav>
      <fieldset>
        <AiOutlineSearch />
        <input
          type="text"
          name="search"
          onChange={getSearch}
          placeholder="Pesquise por nome"
        />
      </fieldset>
      <button
        onClick={() => {
          setLoginOpen(true);
        }}
      >
        Login
      </button>
      <SignupMenu
        loginOpen={loginOpen}
        setLoginOpen={setLoginOpen}
        signupOpen={signupOpen}
        setSignupOpen={setSignupOpen}
      ></SignupMenu>
      <LoginMenu
        loginOpen={loginOpen}
        setLoginOpen={setLoginOpen}
        signupOpen={signupOpen}
        setSignupOpen={setSignupOpen}
      ></LoginMenu>
    </header>
  );
};

export default Header;
