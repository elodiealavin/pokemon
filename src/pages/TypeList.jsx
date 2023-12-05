import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const TypeList = () => {
  const [data, setData] = useState([]);
  console.log("console5", data);
  const [isLoading, setIsLoading] = useState(true);

  const { type } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonResponse = await axios.get(
          `https://pokeapi.co/api/v2/type/${type}`
        );
        console.log("console2", pokemonResponse.data);
        console.log("console4", data);
        setData(pokemonResponse.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p> Loading ...</p>
  ) : (
    <main>
      {data.pokemon.map((elem) => {
        console.log("console3", elem);
        const tab = elem.pokemon.url.split("/");
        const index = tab[tab.length - 2];
        return (
          <div key={elem.url}>
            <span>{elem.pokemon.name}</span>;
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
              alt=""
            />
          </div>
        );
      })}
    </main>
  );
};

export default TypeList;
