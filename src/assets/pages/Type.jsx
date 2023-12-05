import axios from "axios";
import { useState, useEffect } from "react";

const Type = () => {
  const [data, setData] = useState();
  //   console.log(data);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/type/");
        console.log(response.data);

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
            <span>{result.name}</span>;
          </div>
        );
      })}
    </main>
  );
};

export default Type;
