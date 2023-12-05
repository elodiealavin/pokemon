import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Type = () => {
  const [data, setData] = useState();
  //   console.log(data);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/type/");
        console.log("console1", response.data);

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        // console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <main>
      {data.results.map((result) => {
        // console.log(result);
        const tab = result.url.split("/");
        const index = tab[tab.length - 2];
        return (
          <div key={result.url}>
            <Link to={`/type/${result.name}`}>
              <span>{result.name}</span>;
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
                alt=""
              />
            </Link>
          </div>
        );
      })}
    </main>
  );
};

export default Type;
