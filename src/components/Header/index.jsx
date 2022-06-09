import "./Header.css";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
const Header = ({ getSearch, setLoginOpen }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("adm")) {
      setIsAdmin(true);
    }
  }, []);
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
          {isAdmin && (
            <Link to="/admin">Admin</Link>
          )}
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
    </header>
  );
};

export default Header;
