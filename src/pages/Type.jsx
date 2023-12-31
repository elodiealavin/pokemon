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

        return (
          <div key={result.url}>
            <Link to={`/type/${result.name}`}>
              <span>{result.name}</span>;
            </Link>
          </div>
        );
      })}
    </main>
  );
};

export default Type;
