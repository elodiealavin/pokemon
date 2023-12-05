import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Pokemon = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { name } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        console.log("console6", response);

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <main>
      <p>{data.name}</p>
      <img src={data.sprites.front_default} alt="" />
    </main>
  );
};

export default Pokemon;
