import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <Link to={"/"}>
          <img
            className="logo"
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            alt=""
          />
        </Link>
        <div>
          <Link to={"/pokemon"}>
            <button>Pokemons</button>
          </Link>
          <Link to={"/type"}>
            <button>Types</button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
