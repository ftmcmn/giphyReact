import React, { useState } from "react";
import axios from "axios";

const Giphys = () => {
  const [query, setQuery] = useState("");
  const [giphys, setGiphys] = useState([]);

  const loadData = async () => {
    try {
      const response = await axios(
        `https://api.giphy.com/v1/gifs/search?api_key=jvwQ39CJL5MLoGf9d3Qi6a6uEa4UqlS1&q=${query}&limit=10&offset=0&rating=g&lang=en`
      );
      setGiphys(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <input
          placeholder="kelime giriniz"
          id="input-text"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={loadData}>Ara</button>
        <div>
          {giphys.map((gif, index) => (
            <img key={index} src={gif.images.original.url} alt={gif.title} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Giphys;
