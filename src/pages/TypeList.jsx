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
      <div>
        <h1>Types List</h1>
      </div>
      {data.pokemon.map((elem) => {
        console.log("console3", elem);

        return (
          <div key={elem.url}>
            <span>{elem.pokemon.name}</span>;
          </div>
        );
      })}
    </main>
  );
};

export default TypeList;
