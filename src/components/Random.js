import axios from "axios";
import React, { useEffect, useState } from "react";
const API_KEY = process.env.REACT_APP_GIPHY_APP_KEY;
export default function Random() {
  async function fetchData() {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const output = await axios.get(url);
    console.log(output);
  }
  useEffect(() => {
    fetchData();
  }, []);
  const [gif, setGif] = useState("");
  let clickHandler = () => {};
  return (
    <div className="w-1/2 h-[450px] bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-2xl underline uppercase font-bold">A Random Gif</h1>
      <img src={gif} alt="" srcset="" width="450" />
      <button
        className="bg-white w-10/12 opacity-70 border border-black text-lg py-2 rounded-lg"
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
}
