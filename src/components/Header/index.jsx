import "./Header.css";
import { AiOutlineSearch } from "react-icons/ai";
const Header = ({ getSearch, setLoginOpen }) => {
  return (
    <header>
      <div className="title">
        <h1>Fazendo Arte</h1>
        <p>com Helena Barcelos</p>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#Products">Produtos</a>
          </li>
          <li>
            <a href="#About">Sobre</a>
          </li>
          <li>
            <a href="#Mail">Contato</a>
          </li>
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
