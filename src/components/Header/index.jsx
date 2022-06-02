import "./Header.css";
const Header = () => {
  return (
    <header>
      <div className="title">
        <h1>Fazendo Arte</h1>
        <p>com Helena Barcelos</p>
      </div>
      <nav>
        <ul>
          <li><a href="#Products">Produtos</a></li>
          <li><a href="#About">Sobre</a></li>
          <li><a href="#Mail">Contato</a></li>
        </ul>
      </nav>
      <button>Login</button>
    </header>
  );
};

export default Header;
